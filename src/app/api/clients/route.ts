import { db } from '@/lib/db';
import { clients } from '@/lib/db/schema';
import { NextResponse } from 'next/server';

export async function GET() {
  const allClients = await db.select().from(clients);
  return NextResponse.json(allClients);
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const newClient = await db.insert(clients).values({ name, email }).returning();
  return NextResponse.json(newClient[0]);
}