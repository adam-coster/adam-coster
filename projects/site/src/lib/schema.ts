import { char, datetime, int, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm/sql";
 
export const visit = mysqlTable("Visit", {
  route: varchar("route", { length: 64 }).notNull(),
  referrer: varchar("referrer", { length: 64 }),
  userId: char("userId", { length: 6 }).notNull(),
  views: int("views").default(1).notNull(),
  when: datetime("when", {fsp:3}).default(sql`current_timestamp(3)`).notNull()
}, (table) => ({
  pk: primaryKey({ columns: [table.route, table.userId] })
}));