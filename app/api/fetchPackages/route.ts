import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/db';
import { travelPackage } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  try {
    const packages = await db.select().from(travelPackage).orderBy(desc(travelPackage.date));

    return NextResponse.json({ packages });
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 });
  }
}