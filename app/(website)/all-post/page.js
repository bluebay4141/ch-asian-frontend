import { Suspense } from "react";
import Container from "@/components/container";
import Blog from "./blog";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";


 
export const metadata = {
  title: 'Sri Lanka Blog Archive: Explore Past Adventures And Insights',
  description: `Browse through our archive of Sri Lanka travel blogs for past adventures, tips, and insights. Discover valuable information and inspiration for your next journey to this beautiful island.`,
};


export default async function ArchivePage({ searchParams }) {
  return (
    <>
      <Container className="relative mt-5">
        <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Blog
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">
            See all posts we have ever written.
          </p>
        </div>
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Blog searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

export const revalidate = 60;
