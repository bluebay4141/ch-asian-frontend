import { getSettings } from "@/lib/sanity/client";
import TravelPackageHoneymoon from "./travel-package-honeymoon";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Enchanting Sri Lanka Honeymoon: 7-Day Romantic Adventure',
  description: 'Experience the ultimate honeymoon in Sri Lanka with tailored experiences in Kandy, Nuwara Eliya, Bentota & Colombo. Discover love in paradise.',
};


export default async function TripPage() {
  const settings = await getSettings();
  return <TravelPackageHoneymoon />;
}