import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  status: text('status').default('pending'),
  clientId: integer('client_id').references(() => clients.id),
  createdAt: timestamp('created_at').defaultNow(),
});

export const billing = pgTable('billing', {
  id: serial('id').primaryKey(),
  clientId: integer('client_id').references(() => clients.id),
  hours: integer('hours').notNull(),
  rate: integer('rate').notNull(),
  total: integer('total').notNull(),
  invoiceDate: timestamp('invoice_date').defaultNow(),
});