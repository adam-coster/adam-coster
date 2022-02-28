/**
 * With special thanks to: https://github.com/rileydakota/valheim-ecs-fargate-cdk
 */

import {
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_efs as efs,
  aws_secretsmanager as secretsManager,
  CfnOutput,
  Stack,
  StackProps,
  Tags,
} from 'aws-cdk-lib';
import { paramCase } from 'change-case';
import { Construct } from 'constructs';
import type { GenerateValheimCdkAppOptions } from './cdkAppGenerator';
import { ValheimWorld } from './instanceInfo';

// TODO:
// - Use EC2 instead of Fargate -- more understandable & predictable resources,
//   with the same or lesser cost.

export interface ValheimStackProps
  extends StackProps,
    Readonly<GenerateValheimCdkAppOptions> {
  worlds: ValheimWorld[];
}

interface ValheimWorldInstanceProps {
  world: ValheimWorld;
}

class ValheimWorldInstance extends Construct {
  constructor(scope: Construct, id: string, props: ValheimWorldInstanceProps) {
    super(scope, id);

    // Add instance-specific tags to all associated resources

    Tags.of(scope).add('ValheimInstance', props.world.safeName);
    const valheimServerPass = new secretsManager.Secret(this, 'Password', {
      description: `Valheim server password for ${props.world.name}`,
      secretName: paramCase(`valheim-pass-${props.world.safeName}`),
    });
  }
}

export class ValheimStack extends Stack {
  constructor(scope: Construct, id: string, props?: ValheimStackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'ValheimVpc', {
      cidr: '10.0.0.0/24',
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'ValheimPublicSubnet',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
      maxAzs: 1,
    });

    const fargateCluster = new ecs.Cluster(this, 'ValheimFargate', {
      vpc: vpc,
    });

    const serverFileSystem = new efs.FileSystem(this, 'ValheimFs', {
      vpc: vpc,
    });

    const serverVolumeConfig: ecs.Volume = {
      name: 'ValheimFsVolume',
      efsVolumeConfiguration: {
        fileSystemId: serverFileSystem.fileSystemId,
      },
    };

    const mountPoint: ecs.MountPoint = {
      containerPath: '/config',
      sourceVolume: serverVolumeConfig.name,
      readOnly: false,
    };

    const valheimTaskDefinition = new ecs.TaskDefinition(
      this,
      'valheimTaskDefinition',
      {
        compatibility: ecs.Compatibility.FARGATE,
        cpu: '2048',
        memoryMiB: '4096',
        volumes: [serverVolumeConfig],
        networkMode: ecs.NetworkMode.AWS_VPC,
      },
    );

    const container = valheimTaskDefinition.addContainer('valheimContainer', {
      image: ecs.ContainerImage.fromRegistry('lloesche/valheim-server'),
      logging: ecs.LogDrivers.awsLogs({ streamPrefix: 'ValheimServer' }),
      environment: {
        SERVER_NAME: 'VALHEIM-SERVER-AWS-ECS',
        SERVER_PORT: '2456',
        WORLD_NAME: 'VALHEIM-WORLD-FILE',
        SERVER_PUBLIC: '1',
        UPDATE_INTERVAL: '900',
        BACKUPS_INTERVAL: '3600',
        BACKUPS_DIRECTORY: '/config/backups',
        BACKUPS_MAX_AGE: '3',
        BACKUPS_DIRECTORY_PERMISSIONS: '755',
        BACKUPS_FILE_PERMISSIONS: '644',
        CONFIG_DIRECTORY_PERMISSIONS: '755',
        WORLDS_DIRECTORY_PERMISSIONS: '755',
        WORLDS_FILE_PERMISSIONS: '644',
        DNS_1: '10.0.0.2',
        DNS_2: '10.0.0.2',
        STEAMCMD_ARGS: 'validate',
      },
      secrets: {
        SERVER_PASS: ecs.Secret.fromSecretsManager(
          valheimServerPass,
          'VALHEIM_SERVER_PASS',
        ),
      },
    });

    container.addPortMappings(
      {
        containerPort: 2456,
        hostPort: 2456,
        protocol: ecs.Protocol.UDP,
      },
      {
        containerPort: 2457,
        hostPort: 2457,
        protocol: ecs.Protocol.UDP,
      },
      {
        containerPort: 2458,
        hostPort: 2458,
        protocol: ecs.Protocol.UDP,
      },
    );

    container.addMountPoints(mountPoint);

    const valheimService = new ecs.FargateService(this, 'valheimService', {
      cluster: fargateCluster,
      taskDefinition: valheimTaskDefinition,
      desiredCount: 1,
      assignPublicIp: true,
      platformVersion: ecs.FargatePlatformVersion.VERSION1_4,
    });

    serverFileSystem.connections.allowDefaultPortFrom(valheimService);
    valheimService.connections.allowFromAnyIpv4(
      new ec2.Port({
        protocol: ec2.Protocol.UDP,
        stringRepresentation: 'valheimPorts',
        fromPort: 2456,
        toPort: 2458,
      }),
    );

    new CfnOutput(this, 'serviceName', {
      value: valheimService.serviceName,
      exportName: 'FargateServiceName',
    });

    new CfnOutput(this, 'clusterArn', {
      value: fargateCluster.clusterName,
      exportName: 'FargateClusterName',
    });

    new CfnOutput(this, 'EFSId', {
      value: serverFileSystem.fileSystemId,
    });
  }
}
