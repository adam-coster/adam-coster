import { createValheimServersApp } from '@adam-coster/valheim-cdk';

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

const app = createValheimServersApp(servers);
