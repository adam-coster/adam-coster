import { assert } from '@adam-coster/utility';
import { Environment } from '@aws-cdk/core';
import { App } from 'aws-cdk-lib';
import { ValheimWorld, ValheimWorldInfo } from './instanceInfo';
import { ValheimStack } from './serverStack';

export interface GenerateValheimCdkAppOptions {
  /**
   * AWS environment to deploy to
   */
  env?: Environment;

  /**
   * CloudFormation stack name. Note that changing
   * this value later will result in *a new stack*
   * being created!
   *
   * @default "Valheim"
   */
  stackName?: string;

  /**
   * Tags to apply to all resources in the stack.
   * Meaningful tags make it easier to find things.
   *
   * (CloudFormation will likely add tags to all
   * resources as well)
   *
   * @default
   * `{ GameServer: 'Valheim' }`
   */
  tags?: { [key: string]: string };

  /**
   * Saves are stored in a *versioned* S3 bucket.
   * Each save gets written as another version,
   * causing the older versions to be inactive.
   *
   * Depending on how frequently you're backing up
   * your saves, you could end up with a lot of old
   * versions sitting around, eating up your S3 dollars.
   *
   * Expiring old versions *will not impact* the current
   * backup. The current backup does not expire.
   *
   * @default 1
   */
  expireOldBackupsAfterDays?: number;
}

export function generateValheimCdkApp(
  servers: ValheimWorldInfo[],
  options?: GenerateValheimCdkAppOptions,
): App {
  const worlds = servers.map((server) => new ValheimWorld(server));
  assert(worlds.length > 0, 'No servers specified');

  const app = new App();
  new ValheimStack(app, 'ValheimServer', {
    tags: options?.tags || { GameServer: 'Valheim' },
    worlds,
    description: `Valheim dedicated server(s), running in Elastic Beanstalk.`,
    stackName: options?.stackName || 'Valheim',
    env: options?.env,
    ...options,
  });

  return app;
}
