import { assert } from '@adam-coster/utility';
import { Environment } from '@aws-cdk/core';
import { App } from 'aws-cdk-lib';
import { ValheimWorld, ValheimWorldInfo } from './lib/instanceInfo';
import { ValheimStack } from './lib/serverStack';

export function createValheimServersApp(
  servers: ValheimWorldInfo[],
  env?: Environment,
): App {
  const worlds = servers.map((server) => new ValheimWorld(server));
  assert(worlds.length > 0, 'No servers specified');

  const app = new App();
  new ValheimStack(app, 'Valheim', {
    tags: { DedicatedGameServer: 'Valheim' },
    worlds,
    description: `Valheim dedicated server(s), running in Elastic Beanstalk.`,
    stackName: 'Valheim',
    env,
  });

  return app;
}
