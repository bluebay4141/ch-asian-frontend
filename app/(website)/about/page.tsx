import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About Us: Your Trusted Travel Companion In Sri Lanka',
  description: 'Learn about our vision, mission, and commitment to providing authentic and immersive travel experiences in Sri Lanka. Discover the team behind your unforgettable journey.',
};

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <About settings={settings} authors={authors} />;
}

export const revalidate = 60;
