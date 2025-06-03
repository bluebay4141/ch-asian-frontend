import { NextResponse, NextRequest } from 'next/server';
import { db } from '@/lib/db/db';
import { inquiries } from '@/lib/db/schema';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      userEmail,
      packageId,
      noOfAdults,
      noOfChilds,
      country,
      phoneNo,
      specialNotes,
      isOpenUser,
      isOpenAdmin,
      adminMessage,
      pdfUrl,
      userName,
      userId,
      noOfDays,
      date,
      travelCounts,
      travelDate
    } = body;

    const newUUID = uuidv4();

    await db.insert(inquiries).values({
      id: newUUID,
      inquiryNumber: `WEB-${newUUID}`,
      userEmail,
      packageId,
      noOfAdults,
      noOfChilds,
      country,
      phoneNo,
      specialNotes,
      isOpenUser,
      isOpenAdmin,
      adminMessage,
      pdfUrl,
      userName,
      userId,
      date: new Date(),
      noOfDays,
      travelCounts,
      travelDate
    });

    return NextResponse.json({ message: 'Inquiry added successfully'});
  } catch (error) {
    console.error('Error adding inquiry:', error);
    return NextResponse.json({ error: 'Failed to add inquiry' }, { status: 500 });
  }
}