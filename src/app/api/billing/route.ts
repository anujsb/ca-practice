import { db } from '@/lib/db';
import { billing } from '@/lib/db/schema';
import { NextResponse } from 'next/server';
import { generateBillingInsight } from '@/lib/gemini';

export async function GET() {
  const allBilling = await db.select().from(billing);
  return NextResponse.json(allBilling);
}

export async function POST(request: Request) {
  const { clientId, hours, rate } = await request.json();
  const total = hours * rate;
  const newBilling = await db.insert(billing).values({ clientId, hours, rate, total }).returning();
  const insight = await generateBillingInsight(newBilling[0]);
  return NextResponse.json({ ...newBilling[0], insight });
}