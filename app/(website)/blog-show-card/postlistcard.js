import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity/image";

export default function PostListCard({index,blog}){

    const imageProps = blog?.mainImage
    ? urlForImage(blog.mainImage)
    : null;

    return(
		  <div className={`flex-col items-center rounded-packages sm:flex bg-packages ${index > 0 ? "hidden" : ""}`} style={{boxShadow: "0px 4px 8.3px 1px rgba(0, 0, 0, 0.09)"}}>
              <Image src={imageProps} height={250} alt="" className="mb-2 w-full rounded-packages h-[250px]" />
              <div className="w-full pl-5 pr-4 pt-5 pb-7.5 grow flex flex-col">
                <h4 className="font-Helvetica text-collaborators leading-7 text-hero-3 font-medium w-full mb-5 line-clamp-2">
                  {blog.title}
                </h4>
                <p className="font-Helvetica text-hero-text-1 text-trip font-light line-clamp-3">
                  {blog.excerpt}
                </p>
                <Link  href={`/post/${blog.slug.current}`} className="flex items-end justify-end mt-7.5 grow">
                  <button className="text-base font-medium leading-normal text-hero-1">Read More {`>>`}</button>
                </Link>
              </div>
            </div>
    )
}