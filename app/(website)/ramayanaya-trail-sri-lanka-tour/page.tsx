import { getSettings } from "@/lib/sanity/client";
import TravelPackageRamayana from "./travel-package-ramayana";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Ramayanaya Odyssey: 6-Day Cultural & Natural Journey in Sri Lanka',
  description: `Embark on a 6-day Ramayanaya-inspired journey through Sri Lanka's temples, landscapes, and cities. Explore ancient sites, lush tea plantations, and vibrant Colombo.`,
};


export default async function TripPage() {
  const settings = await getSettings();
  return <TravelPackageRamayana />;
}