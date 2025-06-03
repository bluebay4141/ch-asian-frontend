import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);
import { useRouter } from "next/navigation";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import whaleWatchingImg from "../public/img/whale-watching.webp"
import nuwaraEliyaImg from "../public/img/nuwara-eliya.webp"
import honeymoonImg from "../public/img/honeymoon-beach.webp"
import vishnuImg from "../public/img/vishnu.webp"

import leftArrowIcon from "../public/img/left-arrow-slider.svg"
import rightArrowIcon from "../public/img/right-arrow-slider.svg"
import booknowBtn from "../public/img/booknow-btn.svg"

function Packages() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const router = useRouter();

  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchPackages = async () => {
      setIsLoading(true)

      try {
        const response = await fetch('/api/fetchPackages');
        if (!response.ok) {
          throw new Error('Failed to fetch packages');
        }
        const data = await response.json();
        setPackages(data.packages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false)
      }
    };

    fetchPackages();
  }, []);

  return (
        <>
          <div className="flex items-center justify-end gap-2.5 mb-3">
            <button onClick={goPrev}>
              <Image alt="" src={leftArrowIcon} width={32} height={28} className="rotate-180" />
            </button>
            <button onClick={goNext}>
              <Image alt="" src={rightArrowIcon} width={32} height={28} />
            </button>
          </div>

          {isLoading ? (
            <div className="grid sm:grid-cols-3 gap-2.5">
              <div style={{ boxShadow: "0px 4px 8.3px 1px rgba(0, 0, 0, 0.09)", minHeight: "420px" }}>
                <Skeleton className="h-60 object-cover rounded-packages" />
                <div className="w-full flex flex-col flex-grow pl-5 pr-4 pt-5 pb-5 sm:pb-7.5">
                  <Skeleton className="h-5.5 rounded-md mb-5" />
                  <Skeleton className="h-3.5 w-2/5 rounded-md mt-auto" />
                  <Skeleton className="h-4 w-2/5 rounded-md mt-7.5" />
                </div>
              </div>

              <div className="hidden sm:block" style={{ boxShadow: "0px 4px 8.3px 1px rgba(0, 0, 0, 0.09)", minHeight: "420px" }}>
                <Skeleton className="h-60 object-cover rounded-packages" />
                <div className="w-full flex flex-col flex-grow pl-5 pr-4 pt-5 pb-5 sm:pb-7.5">
                  <Skeleton className="h-5.5 rounded-md mb-5" />
                  <Skeleton className="h-3.5 w-2/5 rounded-md mt-auto" />
                  <Skeleton className="h-4 w-2/5 rounded-md mt-7.5" />
                </div>
              </div>

              <div className="hidden sm:block" style={{ boxShadow: "0px 4px 8.3px 1px rgba(0, 0, 0, 0.09)", minHeight: "420px" }}>
                <Skeleton className="h-60 object-cover rounded-packages" />
                <div className="w-full flex flex-col flex-grow pl-5 pr-4 pt-5 pb-5 sm:pb-7.5">
                  <Skeleton className="h-5.5 rounded-md mb-5" />
                  <Skeleton className="h-3.5 w-2/5 rounded-md mt-auto" />
                  <Skeleton className="h-4 w-2/5 rounded-md mt-7.5" />
                </div>
              </div>
            </div>
          ) : (
            <Swiper
              ref={swiperRef}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {packages?.map((travelPack) => (
                <SwiperSlide key={travelPack?.id} className="h-full">
                  <div
                    className="flex flex-col h-full items-center rounded-packages bg-packages overflow-hidden"
                    style={{ boxShadow: "0px 4px 8.3px 1px rgba(0, 0, 0, 0.09)", minHeight: "450px" }}
                  >
                    <img
                      alt={travelPack?.packageName}
                      src={travelPack?.packageImages?.[0]?.url}
                      className="w-full h-60 object-cover rounded-packages"
                    />

                    <div className="w-full flex flex-col flex-grow pl-5 pr-4 pt-5 pb-5 sm:pb-7.5">
                      <h4 className="font-Helvetica text-hero-text-1 sm:text-collaborators leading-7 text-hero-3 font-medium w-full mb-5">
                        {travelPack?.packageName}
                      </h4>

                      <div className="flex items-center justify-between sm:block mt-auto">
                        <h4 className="font-Helvetica text-base sm:text-hero-text-1 text-trip font-light w-full">
                          {travelPack?.noOfDays?.split("/")?.at(0)}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between mt-7.5">
                        <p className="font-Helvetica text-hero-text-1 sm:text-collaborators font-medium text-hero-1 leading-normal">
                          {travelPack?.price} Per Pax
                        </p>
                        <button
                          className="hidden sm:block cursor-pointer"
                          onClick={() => {
                            router.push(`/package/?packageId=${travelPack?.id}`);
                          }}
                          >
                            <Image src={booknowBtn} alt="Book Now" />
                          </button>
                      </div>

                      <button
                        className="sm:hidden mt-5 cursor-pointer"
                        onClick={() => {
                          router.push(`/package/?packageId=${travelPack?.id}`);
                        }}
                      >
                        <Image src={booknowBtn} alt="" className="w-81 h-6.5" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
  )
}

const travelPackages = [
  {
    image: whaleWatchingImg,
    title: "Whale Watching Tour In Sri Lanka (Mirissa, Colombo)",
    days: "4 Days Trip",
    price: "$135.00",
    routeLink: "whale-watching-tour-sri-lanka"
  },
  {
    image: nuwaraEliyaImg,
    title: "Round Tour In Sri Lanka (Colombo, Nuwara Eliya, Bentota)",
    days: "4 Days Trip",
    price: "$162.00",
    routeLink: "round-tour-in-sri-lanka"
  },
  {
    image: honeymoonImg,
    title: "Honeymoon In Sri Lanka (Kandy, Nuwara Eliya, Bentota, Colombo)",
    days: "7 Days Trip",
    price: "$470.00",
    routeLink: "honeymoon-in-sri-lanka-travel-packages"
  },
  {
    image: vishnuImg,
    title: "Ramayana Trail (Trincomalee, Kandy, Nuwara Eliya, Colombo)",
    days: "6 Days Trip",
    price: "$235.00",
    routeLink: "ramayanaya-trail-sri-lanka-tour"
  }
]

export default Packages