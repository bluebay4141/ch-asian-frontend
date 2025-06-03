import { getSettings } from "@/lib/sanity/client";
import TravelPackageWhale from "./travel-package-whale";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: '5-Day Sri Lanka Adventure: Whale Watching, Turtle Hatchery & Colombo Tour',
  description: 'Experience whale watching, visit a turtle hatchery, and explore Colombo on this 5-day Sri Lanka adventure with CH Asian Holidays.',
};

export default async function TripPage() {
  const settings = await getSettings();
  return <TravelPackageWhale />;
}