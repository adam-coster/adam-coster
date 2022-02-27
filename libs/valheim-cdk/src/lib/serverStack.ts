import {
  aws_elasticbeanstalk as beanstalk,
  aws_s3 as s3,
  Duration,
  RemovalPolicy,
  Stack,
  StackProps,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ValheimWorld } from './instanceInfo';

export interface ValheimStackProps extends StackProps {
  worlds: ValheimWorld[];
}

export class ValheimStack extends Stack {
  constructor(scope: Construct, id: string, props?: ValheimStackProps) {
    super(scope, id, props);

    /* Things we need:
       - An S3 bucket
       - An Elastic Beanstalk "Valheim" application
       - Per Valheim server:
        - An Elastic Beanstalk environment for that app
        - Static IP
        - Backups sent to S3, under a specific key
        - Ability to load a backup from S3
    */

    // TODO: S3 Bucket
    const backupsBucket = new s3.Bucket(this, 'backups', {
      versioned: true,
      removalPolicy: RemovalPolicy.RETAIN,
      lifecycleRules: [
        {
          abortIncompleteMultipartUploadAfter: Duration.days(3),
          noncurrentVersionExpiration: Duration.days(3),
        },
      ],
    });

    // TODO: Elastic Beanstalk Application
    const app = new beanstalk.CfnApplication(this, 'app', {
      description: 'Beanstalk container for Valheim environments',
      resourceLifecycleConfig: {
        versionLifecycleConfig: { maxCountRule: { maxCount: 20 } },
      },
    });

    // TODO: Create an Elastic Beanstalk Environment, per Valheim server
  }
}
