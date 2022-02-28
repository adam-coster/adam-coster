import { generateValheimCdkApp } from '@adam-coster/cloudheim';
import { Environment } from 'aws-cdk-lib';

const servers = [
  {
    name: 'Orliekat',
    admins: ['76561197970630140', '76561197976434679'],
  },
  {
    name: 'Meadle Earth',
    admins: ['76561197970630140'],
  },
];

const env: Environment = {
  account: '041094602614',
  region: 'us-east-2',
};

const app = generateValheimCdkApp(servers, { env });
