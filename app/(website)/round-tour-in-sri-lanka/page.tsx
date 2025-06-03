import { getSettings } from "@/lib/sanity/client";
import TravelPackageRound from "./travel-package-round";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Discover Sri Lanka In 4 Days: Elephant Orphanage, Tea Plantations, And Beach Escapes',
  description: `Experience the best of Sri Lanka in just 4 days with our captivating tour. From elephant encounters to tea plantation tours and beach getaways, immerse yourself in the island's rich culture and natural beauty.`,
};

export default async function TripPage() {
  const settings = await getSettings();
  return <TravelPackageRound />;
}