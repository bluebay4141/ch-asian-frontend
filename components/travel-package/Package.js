'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSearchParams } from "next/navigation";

// Import Swiper styles
import 'swiper/css';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Container from "@/components/container"

import tripHero from "../../public/img/trip-hero.png"
import tripGrid1 from "../../public/img/trip-grid-1.png"
import tripGrid2 from "../../public/img/trip-grid-2.png"
import tripGrid3 from "../../public/img/trip-grid-3.png"
import tripGrid4 from "../../public/img/trip-grid-4.png"
import tripGrid5 from "../../public/img/trip-grid-5.png"
import imagePosition from "../../public/img/image-position.png"
import moreImages from "../../public/img/more-images.png"
import carTrip from "../../public/img/car-trip.png"
import foodTrip from "../../public/img/food-trip.png"
import hotelTrip from "../../public/img/hotel-trip.png"
import eyeTrip from "../../public/img/eye-trip.png"
import kandyImg from "../../public/img/kandy-img.png"
import kegalleImg from "../../public/img/kegalle.png"
import galleImg from "../../public/img/galle.png"
import jaffnaImg from "../../public/img/jaffna.png"
import calendarImg from "../../public/img/Calendar.png"
import checkmarkImg from "../../public/img/Checkmark.png"
import cancelImg from "../../public/img/Cancel.png"
import srilankaImg from "../../public/img/sri-lanka.png"
import srilankaMobileImg from "../../public/img/sri-lanka-mobile.png"
import testimonialsMobile from "../../public/img/advisor-testimonials-mobile.png"
import testimonialsDesktop from "../../public/img/advisor-testimonials.png"
import nineArchImg from "../../public/img/nine-arch-2.webp"
import dayImg1 from "../../public/img/coconut-tree-hill.webp"
import dayImg2 from "../../public/img/mirissa-whale-watching.webp"
import dayImg3 from "../../public/img/colombo.webp"
import dayImg4 from "../../public/img/red-mosque.webp"
import coconutTreeHillImg from "../../public/img/coconut-tree-hill-2.webp"
import mirissaImg from "../../public/img/mirissa.webp"
import mirissaWhaleImg from "../../public/img/mirissa-whale-watching-02.webp"
import turtleImg1 from "../../public/img/turtle-hatchery-kosgoda.webp"
import turtleImg2 from "../../public/img/turtle-hatchery-kosgoda-2.webp"
import maduRiver from "../../public/img/madu_river.webp"

import Subscription from "@/components/subscription"
import TravelSlider from "@/components/TravelSlider";
import Services from "@/components/services";

import TipTapEditor from "@/components/text-editor/TipTapEditor";

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


function TravelPackage() {
  const [curOpen, setCurOpen] = useState(0);
  const [showGallery, setShowGallery] = useState(false)
  const [toBottom, setToBottom] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting ,errors } ,
    reset,
  } = useForm();

  async function onSubmit(formData) {
    setLoadingSubmit(true);

    const inquiryData = {
      userId: null,
      userEmail: formData.email,
      userName: formData.name,
      packageId: packageData?.id,
      noOfAdults: "",
      noOfChilds: "",
      noOfDays: "",
      country: '',
      phoneNo: '',
      specialNotes: formData.message,
      isOpenUser: false,
      isOpenAdmin: false,
      adminMessage: "",
      pdfUrl: "",
      travelCounts: formData.travelercount.toString(),
      travelDate: formData.date
    };

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
      });
  
      toast.success('Your email message has been sent successfully');
  
      reset({email: "", name: "", travelercount: "", message: "", date: ""});
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setLoadingSubmit(false);
    }
  }

  const searchParams = useSearchParams();
  const packageId = searchParams.get('packageId');

  console.log(packageId)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [packageData, setPackageData] = useState([]);

  useEffect(() => {
    if (packageId) {
      const fetchTravelPackage = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(`/api/packages/${packageId}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch travel package: ${response.statusText}`);
          }
          const data = await response.json();
          setPackageData(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
          setLoading(false);
        }
      };

      fetchTravelPackage();
    }
  }, [packageId]);

  return (
    <Container>
      <section onMouseEnter={() => setToBottom(false)}>
        <Image src={tripHero} alt="" className="w-full absolute top-0 max-w-[1536px]" />

        <div className="px-17.5 mt-8 mb-11 z-50 sticky items-center gap-2.5 hidden sm:grid sm:grid-cols-[60%_40%]">
          {loading ? (
            <>
              <div>
                <Skeleton className="rounded-lang w-full h-100 object-cover" />
              </div>

              <div className="grid grid-cols-2 gap-2.5 h-100">
                <Skeleton className="rounded-lang w-full h-full object-cover" />
                <Skeleton className="rounded-lang w-full h-full object-cover" />
                <Skeleton className="rounded-lang w-full h-full object-cover" />
                <Skeleton className="rounded-lang cursor-pointer w-full h-full object-cover" />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={packageData?.packageImages?.[0]?.url} alt="" className="rounded-lang cursor-pointer w-full object-cover" onClick={() => setShowGallery(true)} />
              </div>

              <div className="grid grid-cols-2 gap-2.5 h-full">
                <img src={packageData?.packageImages?.[1]?.url} alt="" className="h-full rounded-lang cursor-pointer object-cover" onClick={() => setShowGallery(true)} />
                <img src={packageData?.packageImages?.[2]?.url} alt="" className="h-full rounded-lang cursor-pointer object-cover" onClick={() => setShowGallery(true)} />
                <img src={packageData?.packageImages?.[3]?.url} alt="" className="h-full rounded-lang cursor-pointer object-cover" onClick={() => setShowGallery(true)} />
                <div className="relative">
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5" onClick={() => setShowGallery(true)}>
                    <Image src={moreImages} alt="" />
                    <span className="text-sm text-white font-Helvetica font-normal">View More</span>
                  </button>
                  <img src={packageData?.packageImages?.[4]?.url} alt="" className="h-full bg-gradient-to-r from-black via-black to-transparent bg-cover bg-no-repeat bg-center rounded-lang object-cover" />
                </div>
              </div>
            </>
          )}
        </div>

        <div className='sm:hidden pl-5 pt-27.5'>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={14}
            direction={"horizontal"}
            mousewheel={false}
          >
            {mobileImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image.image} alt="" className="h-auto rounded-[14px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {showGallery && <TravelSlider setShowGallery={setShowGallery} images={packageData?.packageImages?.map((currentImage=> ({'image': currentImage.url})))} />}

      <section className={`sm:flex gap-8 px-5 sm:px-17.5 mt-7.5 sm:mt-0 ${toBottom ? "items-end" : ""}`}>
        <article className="sm:basis-3/5">
          <div onMouseEnter={() => setToBottom(false)}>
            {loading ? (
              <Skeleton className="rounded-md w-full h-8" />
            ) : (
              <h2 className="text-testimonials leading-8 sm:leading-none sm:text-5xl font-normal font-Calistoga text-hero-2 ">
                {packageData?.packageName}
              </h2>
            )}
           
            {loading ? (
              <Skeleton className="!rounded-full !w-1/6 h-8 mt-4 sm:mt-10 mb-8" />
            ) : (
              <div className="sm:flex items-center gap-6 mt-4 sm:mt-10 pb-8 border-b border-trip-border">
                <p className="p-2.5 rounded-full bg-hero-1 text-white text-sm font-medium inline-block mb-7.5 sm:mb-0">{packageData?.noOfDays}</p>
              </div>
            )}
          
            {loading ? (
              <div className="mt-7.5 sm:mt-10 pb-7.5 sm:pb-10 border-b border-trip-border flex items-center  sm:gap-x-12.5 gap-y-5 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <Skeleton className="!rounded-md !w-9 h-7.5" />
                  <Skeleton className="!rounded-md !w-30 h-6" />
                </div>
                <div className="flex items-center gap-2.5">
                  <Skeleton className="!rounded-md !w-9 h-7.5" />
                  <Skeleton className="!rounded-md !w-30 h-6" />
                </div>
                <div className="flex items-center gap-2.5">
                  <Skeleton className="!rounded-md !w-9 h-7.5" />
                  <Skeleton className="!rounded-md !w-30 h-6" />
                </div>
                <div className="flex items-center gap-2.5">
                  <Skeleton className="!rounded-md !w-9 h-7.5" />
                  <Skeleton className="!rounded-md !w-30 h-6" />
                </div>
              </div>
            ) : (
              <div className={`mt-7.5 sm:mt-10 pb-7.5 sm:pb-10 border-b border-trip-border flex items-center  sm:gap-x-12.5 gap-y-5 flex-wrap ${packageData?.facilities?.length === 2 ? "" : "justify-between"}`}>
                {packageData?.facilities?.map(currentFacility => (
                  <p key={currentFacility?.id} className="flex items-center gap-2.5">
                    <Image src={currentFacility?.title === 'Transport' ? carTrip : currentFacility?.title === 'Meals' ? foodTrip : currentFacility?.title === 'Stay' ? hotelTrip : eyeTrip} alt="" />
                    <span className="text-base font-Helvetica font-normal text-hero-3">{currentFacility?.title} Included</span>
                  </p>
                ))}
              </div>
            )}

            <div className="mt-6 sm:pt-7 pt-9 pb-6 pl-5 pr-3.5 border-[0.5px] border-trip-border rounded-lang mb-5 sm:hidden">
              {loading ? (
                <>
                  <div className="flex item-center justify-between mb-5">
                    <Skeleton className="!rounded-md !w-25 h-6" />
                    <Skeleton className="!rounded-md !w-15 h-6" />
                  </div>
                  <Skeleton className="!rounded-md !w-2/6 h-10" />
                  <Skeleton className="!rounded-md !w-full h-10 mt-9" />
                </>
              ) : (
                <>
                  <div className="flex item-center justify-between mb-5">
                    <span className="text-base sm:text-hero-text-1 font-Helvetica font-normal text-hero-3 leading-6">Starting From</span>
                    <span className="sm:flex items-center gap-1 hidden">
                      {starRating}
                      <span className="text-hero-text-1 font-Helvetica font-bold text-hero-3 leading-6">4.8/5</span>
                    </span>
                  </div>
                  <h4 className="space-x-1.5">
                    <span className="text-2xl sm:text-testimonials font-Helvetica font-bold text-black leading-10">USD {packageData?.price?.split('$')?.at(1)}</span>
                    <span className="text-base sm:text-hero-text-1 text-person font-Helvetica font-normal">Per Person</span>
                  </h4>
                  <button className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-9 w-full">Book Now</button>
                </>
              )}

              {/* <h4 className="text-collaborators text-hero-3 font-Helvetica font-light leading-8 line-through mt-3">USD 2,499</h4> */}
            </div>

            {loading ? (
               <div className="mt-12.5 mb-12.5 sm:mb-17.5">
                  <Skeleton className="!rounded-md !w-2/6 h-8 mb-7.5" />

                  <div className="mb-7.5">
                    <Skeleton className="!rounded-md !w-full h-6" />
                    <Skeleton className="!rounded-md !w-full h-6" />
                    <Skeleton className="!rounded-md !w-full h-6" />
                    <Skeleton className="!rounded-md !w-full h-6" />
                    <Skeleton className="!rounded-md !w-full h-6" />
                    <Skeleton className="!rounded-md !w-full h-6" />
                  </div>
               </div>
            ) : (
              <div className="mt-12.5 mb-12.5 sm:mb-17.5">
                <h4 className="text-collaborators text-highlights font-Helvetica font-bold leading-8 mb-7.5">Trip Highlights</h4>
                {packageData?.tripHighlights && (
                  <div className="mb-7.5 font-Helvetica">
                    <TipTapEditor editable={false} value={packageData?.tripHighlights} className="trip-higlight" />
                  </div>
                )}
              </div>
            )}
            
            {!loading && (
              <form onSubmit={handleSubmit(onSubmit)} className="pt-11 pb-8 px-5 border-[0.5px] border-trip-border rounded-lang mb-12.5 sm:hidden">  
                <input type="text" id="name" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Your Name" {...register('name',{required: true, maxLength: 50 , minLength: 2})}/>
                <input type="email" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Email Address" {...register('email',{required: true, pattern: /^\S+@\S+$/i})}/>

                <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                  <div className="relative">
                    <input type="date" id="date" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full pr-12" placeholder="Travel Date" {...register("date", {required: true})}/>
                    
                  </div>
                  <input type="number" id="travelercount" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Traveler Count" {...register("travelercount", {required: true, max: 99, min: 1})}/>
                </div>

                <textarea type="text" id="name" className="h-35 sm:h-35 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Your Message" {...register('message',{required: true, minLength: 6})}/>

                <button type="submit" className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-2.5 w-full" disabled={loadingSubmit}>
                  {loadingSubmit ? "Sending inquiry" : "Book Now"}
                </button>
              </form>
            )}
          </div>

          {!loading && (
            <div onMouseEnter={() => setToBottom(true)}>
              <h4 className="text-collaborators text-highlights font-Helvetica font-bold leading-8 mb-7.5">Trip Schedule</h4>

              <div>
                {packageData?.tripSchedule?.map((item, index, faqsArray) => (
                  <AccordionItem
                    key={item?.id}
                    num={index}
                    title={item?.title}
                    day={item?.id}
                    image={item?.image ? JSON.parse(item?.image)?.[0]?.url : ''}
                    locations={item?.tags}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    lastIndex={faqsArray?.length - 1}
                >
                {item?.tripHighlights && (
                  <div className="mb-7.5 font-Helvetica">
                    <TipTapEditor key={item?.id} editable={false} value={item?.tripHighlights} className="trip-day" />
                  </div>
                )}
                </AccordionItem>
                ))}
              </div>
            </div>
          )}
        </article>

        <div className="sm:basis-2/5 hidden sm:flex flex-col h-full">
          <div className="pt-7 pb-6 pl-5 pr-3.5 border-[0.5px] border-trip-border rounded-lang mb-5">
              {loading ? (
                <>
                  <div className="flex item-center justify-between mb-5">
                    <Skeleton className="!rounded-md !w-25 h-6" />
                    <Skeleton className="!rounded-md !w-15 h-6" />
                  </div>
                  <Skeleton className="!rounded-md !w-2/6 h-10" />
                  <Skeleton className="!rounded-md !w-full h-10 mt-9" />
                </>
              ) : (
                <>
                  <div className="flex item-center justify-between mb-5">
                    <span className="text-base sm:text-hero-text-1 font-Helvetica font-normal text-hero-3 leading-6">Starting From</span>
                    <span className="sm:flex items-center gap-1 hidden">
                      {starRating}
                      <span className="text-hero-text-1 font-Helvetica font-bold text-hero-3 leading-6">4.8/5</span>
                    </span>
                  </div>
                  <h4 className="space-x-1.5">
                    <span className="text-2xl sm:text-testimonials font-Helvetica font-bold text-black leading-10">USD {packageData?.price?.split('$')?.at(1)}</span>
                    <span className="text-base sm:text-hero-text-1 text-person font-Helvetica font-normal">Per Person</span>
                  </h4>
                  <button className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-9 w-full">Book Now</button>
                </>
              )}
          </div>

          {!loading && (
            <div className="pt-11 pb-8 px-5 border-[0.5px] border-trip-border rounded-lang">
              <h4 className="text-testimonials font-Helvetica text-black font-bold leading-10 mb-5">Send An Inquiry</h4>

              <p className="text-base font-Helvetica text-hero-3 font-light leading-6 mb-6">
                Celebrate your wanderlust with us! Fill out the form below to start planning your next adventure.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="hidden sm:block">  
              <input type="text" id="name" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Your Name" {...register('name',{required: true, maxLength: 50 , minLength: 2})}/>
              <input type="email" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Email Address" {...register('email',{required: true, pattern: /^\S+@\S+$/i})}/>

              <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                <div className="relative">
                  <input type="date" id="date" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full pr-12" placeholder="Travel Date" {...register("date", {required: true})}/>
                  
                </div>
                <input type="number" id="travelercount" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Traveler Count" {...register("travelercount", {required: true, max: 99, min: 1})}/>
              </div>

              <textarea type="text" id="name" className="h-35 sm:h-35 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Your Message" {...register('message',{required: true, minLength: 6})}/>

              <button type="submit" className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-2.5 w-full" disabled={loadingSubmit}>
                {loadingSubmit ? "Sending inquiry" : "Book Now"}
              </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {!loading && (
        <section className="relative sm:border border-trip-border sm:mx-17.5 mt-20 sm:mt-12.5 sm:pt-12.5 sm:pl-11 sm:pr-18 pl-5 pr-5 sm:pb-12 rounded-lang grid sm:grid-cols-2 gap-17.5 sm:gap-23.75 overflow-y-hidden" onMouseEnter={() => setToBottom(true)}>
          <div>
            <h4 className="text-xl text-hero-3 font-Helvetica font-medium mb-7.5 sm:mb-9.5">Inclusions</h4>

            {packageData?.inclusions && (
              <div className="font-Helvetica">
                <TipTapEditor editable={false} value={packageData?.inclusions} className="trip-higlight inclusions-list" />
              </div>
            )}
          </div>

          <div className="h-full bg-trip-border absolute top-0 w-[1px] left-1/2 transform -translate-x-1/2 hidden sm:block"></div>

          <div>
            <h4 className="text-xl text-hero-3 font-Helvetica font-medium mb-9.5">Exclusions</h4>

            {packageData?.exclusions && (
              <div className="mb-7.5 font-Helvetica">
                <TipTapEditor editable={false} value={packageData?.exclusions} className="trip-higlight exclusions-list" />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="relative px-5 sm:px-17.5 mt-17.5 sm:mt-5 mb-9 sm:mb-14" onMouseEnter={() => setToBottom(true)}>
        <Image src={nineArchImg} alt="" className="w-full hidden sm:block" />
        <Image src={nineArchImg} alt="" className="w-full sm:hidden h-82.5 rounded-lang object-cover" />

        <h4 className="sm:text-visit text-visit-mobile font-Helvetica font-bold leading-[48px] sm:leading-[74px] text-visit-sl absolute sm:top-1/2 left-1/2 transform bottom-8 sm:bottom-auto -translate-x-1/2 sm:-translate-x-0 sm:-translate-y-1/2 sm:left-28.75" style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>#VisitSriLanka</h4>
      </section>

      <Services showText={false} />

      {/* <section className="mx-5 sm:mx-17.5 mt-7">
        <Image src={testimonialsDesktop} alt="" className="w-full hidden sm:block" />
        <Image src={testimonialsMobile} alt="" className="w-full sm:hidden" />
      </section> */}

      <Subscription />
    </Container>
  )
}

function AccordionItem({ num, title, image, day, locations, curOpen, onOpen, children, lastIndex }) {
  const isOpen = num === curOpen;

  function handleOpen() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`border-[0.5px] py-1.5 px-2 rounded-lang border-trip-border ${num === lastIndex ? "" : "mb-4 sm:mb-2.5"}`} 
    style={{boxShadow: "4px 4px 9px 0px rgba(0, 0, 0, 0.12)"}} onClick={handleOpen}>
      <div className="flex items-center justify-between w-full">
        <div className="sm:flex items-center gap-5 grow pb-6 sm:pb-0">
          <img src={image} alt="" className="sm:h-33.25 h-56 sm:w-50 w-full rounded-lang" />
          <div className="pt-5 sm:pt-0 mx-0.5 sm:px-0 relative">
            <p className="text-sm sm:text-base font-Helvetica font-bold text-hero-1">Day {day}</p>
            <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-medium mt-2.5">{title}</p>

            <div className="flex gap-1.5 items-center mt-3 sm:mt-4">
              {locations.map((loca, index) => <span className="py-1.5 px-2.5 rounded-full bg-journey text-hero-3 font-Helvetica text-xs font-medium" key={index}>{loca}</span>)}
            </div>

            <div className="sm:hidden absolute top-1/2 transform -translate-y-1/2 right-0">
              {isOpen ? polygonFaqUp : polygonFaqDown}
            </div>
          </div>
        </div>
        <div className="pr-2 hidden sm:block">
          {isOpen ? polygonFaqUp : polygonFaqDown}
        </div>
      </div>
      {isOpen && (
        <div className="sm:mt-2 pt-9 sm:pt-7.5 border-t border-trip-border px-0.5 sm:px-5">{children}</div>
      )}
    </div>
  );
}

const faqs = [
  {
    image: dayImg1,
    day: "01",
    title: "Journey To Kandy",
    locations: [
      "3 Locations", "Start The Trial"
    ],
    arrival: "Airport To Mirissa",
    transfers: [
      "Arrive at Bandaranaike International Airport, met by our representative, and proceed to Mirissa.",
      "En route visit Coconut Tree Hill and proceed to the hotel."
    ],
    activityLocation: "Coconut Tree Hill",
    activities: [
      "Coconut Tree Hill is one of the most Instagrammable spots in Sri Lanka and one of the top things to do in Mirissa. The private coconut farm is just a 15-minute walk from Mirissa Beach and offers some of the best views in the area! Once you reach the top of the hill, the headland stretches out ahead of you, allowing you spectacular views over the ocean through the many leaning palm trees. We recommend going at sunrise to take photos when there are fewer people around.",
      "Evening enjoy at the beach.",
    ],
    hotel: "Dinner And Overnight Stay At A Hotel In Mirissa."
  },
  {
    image: dayImg2,
    day: "02",
    title: "Second Day In Kandy",
    locations: [
      "4 Location", "Kandy Culture"
    ],
    arrival: "Mirissa To Colombo",
    transfers: [
      "Early morning joining for whale watching."
    ],
    activityLocation: "Whale Watching – Included To The Package",
    activities: [
      "Need to be in the harbor at 6.30 a.m.",
      "Boart departure at 7:00 a.m. from Mirissa harbor",
      "Tour time is around 3 to 5 hours"
    ],
    includes: [
      "Breakfast (Vegetarian / Non-vegetarian)",
      "Hot & cool beverages",
      "Life jackets",
      "Fully insured",
      "Sea-sick tablets and all kinds of medicine",
      "Whale-watching percentage",
      "Whale-watching guidelines",
      "Internet (Wi-Fi on the boat)",
      "Music",
      "Emergency unit"
    ],
    turtleHatchery: "Turtle Hatchery was started by the Sri Lankans to protect the turtles from extinction With the commencement of the Turtle Hatchery, these eggs were fed and cared for until they were 2 to 4 years old. You can find different species of turtles such as Green Turtles, Leatherback, and Olive Ridley.",
    madhuRiverWithSafari: "The Madu Ganga and Bentota River safari reward you with an enthralling experience. As you sail through the rippling waters, watch out for water monitors, blue-eyed cormorants perched atop floating branches, fruit bats hanging asleep, upside down, and the endearing sight of infant monkeys clinging onto fishermen as they sail across the river on narrowboats. You might even spot a few crocodiles and water snakes along your jungle cruise.",
    hotel: "Dinner And Overnight Stay At Hotel In Colombo"
  },
  {
    image: dayImg3,
    day: "03",
    locations: [
      "1 Location", "Take A Break"
    ],
    title: "Third Day In Kandy",
    arrival: "Colombo",
    transfers: [
      "Morning leisure at the Hotel.",
      "Next, proceed to visit the Colombo City tour and Shopping."
    ],
    activityLocation: "Colombo City Tour",
    activities: [
      "Galle Face Green",
      "Kovil",
      "Viharamahadevi Park",
      "National Museum",
      "Twin World Trade Center Towers",
      "Old Parliament Building",
      "Fort District",
      "Independence Hall At Independence Square",
      "Prominent Buddhist, Hindu, Islam, and Christian places of worship. (Entrance fees to sites not included)."
    ],
    hotel: "Dinner And Overnight Stay At Hotel In Colombo"
  },
  {
    image: dayImg4,
    day: "04",
    locations: [
      "5 Locations", "Live With Nature"
    ],
    title: "Journey To Nuwara Eliya",
    description: "After breakfast, proceed to Katunayake International Airport."
  },
  {
    image: dayImg4,
    day: "05",
    locations: [
      "3 Locations", "Visit Bentota"
    ],
    title: "Journey To Bentota",
    description: "After breakfast, proceed to Katunayake International Airport."
  },
  {
    image: dayImg4,
    day: "06",
    locations: [
      "3 Locations", "Explore Colombo"
    ],
    title: "Journey To Colombo",
    description: "After breakfast, proceed to Katunayake International Airport."
  },
  {
    image: dayImg4,
    day: "07",
    locations: [
      "Departure"
    ],
    title: "Colombo To Airport",
    description: "After breakfast, proceed to Katunayake International Airport."
  }
];

const mobileImages = [
  {image: dayImg2},
  {image: coconutTreeHillImg},
  {image: dayImg1},
  {image: mirissaImg},
  {image: mirissaWhaleImg},
  {image: turtleImg1},
  {image: turtleImg2},
  {image: maduRiver},
  {image: dayImg3},
  {image: dayImg4},
]

const polygonFaqUp = <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
<path d="M26 14.5L13.5 2L1 14.5" stroke="#808080" stroke-width="2"/>
</svg>

const polygonFaqDown = <svg xmlns="http://www.w3.org/2000/svg" width="27" height="15" viewBox="0 0 27 15" fill="none">
<path d="M1 1L13.5 13.5L26 1" stroke="#808080" stroke-width="2"/>
</svg>

const starRating = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
<path d="M7 0L9.18068 3.99855L13.6574 4.83688L10.5284 8.14645L11.1145 12.6631L7 10.71L2.8855 12.6631L3.47158 8.14645L0.342604 4.83688L4.81932 3.99855L7 0Z" fill="#FC5E48"/>
</svg>

export default TravelPackage
