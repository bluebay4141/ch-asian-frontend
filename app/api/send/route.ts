import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import MessageUsEmail from '@/components/EmailMessage';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message , mobilenumber , page , traveldate ,travelercount} = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'check@reservation.chasianholidays.com', // your verified domain
        to: 'reservation@chasianholidays.com', // the email address you want to send a message
      subject: `New Booking!`,
      react: MessageUsEmail({ name, email, message , mobilenumber , page ,  traveldate ,travelercount}),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}