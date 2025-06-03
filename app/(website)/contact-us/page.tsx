import { getSettings } from "@/lib/sanity/client";
import Contact from "./contact";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Contact Us: Get In Touch For Personalized Travel Assistance',
  description: 'Have questions or need assistance? Reach out to our friendly team for personalized travel advice and itinerary customization. Your adventure in Sri Lanka starts here.',
};

export default async function ContactPage() {
  const settings = await getSettings();
  return <Contact settings={settings} />;
}

export const revalidate = 60;
