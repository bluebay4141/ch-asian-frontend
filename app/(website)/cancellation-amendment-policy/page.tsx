import { getSettings } from "@/lib/sanity/client";

import { Metadata } from 'next';
import Cancellation from "./Cancellation";
 
export const metadata: Metadata = {
  title: 'CANCELLATION & AMENDMENT POLICY',
  description: 'Have questions or need assistance? Reach out to our friendly team for personalized travel advice and itinerary customization. Your adventure in Sri Lanka starts here.',
};

export default async function CancellationPage() {
  const settings = await getSettings();
  return <Cancellation settings={settings} />;
}

export const revalidate = 60;
