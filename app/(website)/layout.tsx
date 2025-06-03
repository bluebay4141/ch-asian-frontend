import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import ClientProvider from "@/components/ClientProvider";


async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        
        "Discover Sri Lanka: Your Gateway To Authentic Experiences",
        template: '%s ',
    },
    description:
      
      "Explore the beauty of Sri Lanka with personalized itineraries. Immerse yourself in culture, adventure, and relaxation. Start your journey today!",
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            "https://www.chasianholidays.com/img/opengraph.png",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: "Discover Sri Lanka: Your Gateway To Authentic Experiences",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div><ClientProvider/>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
