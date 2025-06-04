export const dynamic = 'force-dynamic';

import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";

async function fetchPackages() {
  const res = await fetch(`${process.env.SITE_URL}/api/fetchPackages`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch packages');
  }

  const data = await res.json();

  return data.packages;
}

export default async function IndexPage() {
  let packages = [];
  try {
    packages = await fetchPackages();
  } catch (error) {
    return <div className='px-5 sm:px-33.25 py-10 text-red-500 text-base'>Failed to load packages.</div>;
  }

  return(<HomePage packages={packages} />)
}