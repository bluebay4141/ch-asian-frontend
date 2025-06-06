import { getAllPosts } from "@/lib/sanity/client";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Link from "next/link";

import { Metadata } from 'next';
 
export const metadata = {
  title: 'Explore Sri Lanka: Discover Stories, Tips, And Inspiration On Our Blog',
  description: `Dive into the vibrant world of Sri Lanka through our blog. Find travel stories, insider tips, and inspiration to plan your next adventure to this stunning island paradise.`,
};

export default async function IndexPage() {
  const posts = await getAllPosts();
  
  return (
    <>
      {posts && (
        <div className="container mx-auto lg:px-25">
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/all-post"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export const revalidate = 60;