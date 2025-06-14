import { getSettings } from "@/lib/sanity/client";

import { Metadata } from 'next';
import Terms from "./Terms";
 
export const metadata: Metadata = {
  title: 'TERMS AND CONDITIONS',
  description: 'Have questions or need assistance? Reach out to our friendly team for personalized travel advice and itinerary customization. Your adventure in Sri Lanka starts here.',
};

export default async function CancellationPage() {
  const settings = await getSettings();
  return <Terms settings={settings} />;
}

export const revalidate = 60;
