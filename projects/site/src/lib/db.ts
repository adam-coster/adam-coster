import { env } from "$env/dynamic/private";
import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import * as schema from './schema.js';
 
// create the connection
const connection = connect({
  url: env.DATABASE_URL,
});
 
export const db = drizzle(connection, { schema });
