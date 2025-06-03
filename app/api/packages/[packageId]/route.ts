import { NextResponse } from 'next/server';
import { db } from '@/lib/db/db'; 
import { eq } from 'drizzle-orm';
import { travelPackage } from '@/lib/db/schema';

export async function GET(req: Request, { params }: { params: { packageId: string } }) {
  const { packageId } = params;

  if (!packageId) {
    return NextResponse.json({ error: 'Package ID is required' }, { status: 400 });
  }

  const packageData = await getPackageById(packageId);

  if (!packageData) {
    return NextResponse.json({ error: 'Package not found' }, { status: 404 });
  }

  return NextResponse.json(packageData);
}

async function getPackageById(packageId: string) {
  try {
    const packages = await db
      .select()
      .from(travelPackage)
      .where(eq(travelPackage.id, packageId));

    if (packages.length > 0) {
      const packageData = packages[0];
      return packageData;
    } else {
      console.log('No package found with the given ID.');
    }
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 });
  }
}