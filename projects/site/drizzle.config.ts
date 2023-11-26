import { config } from 'dotenv';
import type { Config } from "drizzle-kit";

config();
 
export default {
  schema: "./src/lib/schema.ts",
  out: "./migrations",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL!
  }
} satisfies Config;