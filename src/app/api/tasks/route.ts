import { db } from '@/lib/db';
import { tasks } from '@/lib/db/schema';
import { NextResponse } from 'next/server';

export async function GET() {
  const allTasks = await db.select().from(tasks);
  return NextResponse.json(allTasks);
}

export async function POST(request: Request) {
  const { title, description, clientId } = await request.json();
  const newTask = await db.insert(tasks).values({ title, description, clientId }).returning();
  return NextResponse.json(newTask[0]);
}