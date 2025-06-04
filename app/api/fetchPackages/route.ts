// app/api/fetchPackages/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db/db';
import { travelPackage } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const db = getDb();

    const packages = await db
      .select()
      .from(travelPackage)
      .orderBy(desc(travelPackage.date));

    return NextResponse.json(
      { packages },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch packages' },
      { status: 500 }
    );
  }
}
