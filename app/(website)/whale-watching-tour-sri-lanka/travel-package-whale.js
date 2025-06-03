'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Container from "@/components/container"

import tripHero from "../../../public/img/trip-hero.png"
import tripGrid1 from "../../../public/img/trip-grid-1.png"
import tripGrid2 from "../../../public/img/trip-grid-2.png"
import tripGrid3 from "../../../public/img/trip-grid-3.png"
import tripGrid4 from "../../../public/img/trip-grid-4.png"
import tripGrid5 from "../../../public/img/trip-grid-5.png"
import imagePosition from "../../../public/img/image-position.png"
import moreImages from "../../../public/img/more-images.png"
import carTrip from "../../../public/img/car-trip.png"
import foodTrip from "../../../public/img/food-trip.png"
import hotelTrip from "../../../public/img/hotel-trip.png"
import eyeTrip from "../../../public/img/eye-trip.png"
import kandyImg from "../../../public/img/kandy-img.png"
import kegalleImg from "../../../public/img/kegalle.png"
import galleImg from "../../../public/img/galle.png"
import jaffnaImg from "../../../public/img/jaffna.png"
import calendarImg from "../../../public/img/Calendar.png"
import checkmarkImg from "../../../public/img/Checkmark.png"
import cancelImg from "../../../public/img/Cancel.png"
import srilankaImg from "../../../public/img/sri-lanka.png"
import srilankaMobileImg from "../../../public/img/sri-lanka-mobile.png"
import testimonialsMobile from "../../../public/img/advisor-testimonials-mobile.png"
import testimonialsDesktop from "../../../public/img/advisor-testimonials.png"
import nineArchImg from "../../../public/img/nine-arch-2.webp"
import dayImg1 from "../../../public/img/coconut-tree-hill.webp"
import dayImg2 from "../../../public/img/mirissa-whale-watching.webp"
import dayImg3 from "../../../public/img/colombo.webp"
import dayImg4 from "../../../public/img/red-mosque.webp"
import coconutTreeHillImg from "../../../public/img/coconut-tree-hill-2.webp"
import mirissaImg from "../../../public/img/mirissa.webp"
import mirissaWhaleImg from "../../../public/img/mirissa-whale-watching-02.webp"
import turtleImg1 from "../../../public/img/turtle-hatchery-kosgoda.webp"
import turtleImg2 from "../../../public/img/turtle-hatchery-kosgoda-2.webp"
import maduRiver from "../../../public/img/madu_river.webp"

import Subscription from "@/components/subscription"
import TravelSlider from "@/components/TravelSlider";
import Services from "@/components/services";

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

function TravelPackageWhale() {
  const [curOpen, setCurOpen] = useState(0);
  const [showGallery, setShowGallery] = useState(false)
  const [toBottom, setToBottom] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting ,errors } ,
    reset,
  } = useForm();

  async function onSubmit(formData) { 
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        mobilenumber : '',
        message: formData.message,
        page : 'Whale Watching Tour In Sri Lanka (Mirissa, Colombo)',
        traveldate : formData.date,
        travelercount : formData.travelercount,
      }),
    }).then(() => {
      // Toast notification
      toast.success('Your email message has been sent successfully');
    });

    reset();
  }


  return (
    <Container>
      <section onMouseEnter={() => setToBottom(false)}>
        <Image src={tripHero} alt="" className="w-full absolute top-0 max-w-[1536px]" />

        <div className="px-17.5 mt-8 mb-11 z-50 sticky items-center gap-2.5 hidden sm:grid sm:grid-cols-[60%_40%]">
          <div>
            <Image src={dayImg2} alt="" className="rounded-lang cursor-pointer w-full object-cover" onClick={() => setShowGallery(true)} />
          </div>

          <div className="grid grid-cols-2 gap-2.5 h-full">
            <Image src={coconutTreeHillImg} alt="" className="h-full rounded-lang cursor-pointer object-cover" onClick={() => setShowGallery(true)} />
            <Image src={dayImg1} alt="" className="h-full rounded-lang cursor-pointer object-cover" onClick={() => setShowGallery(true)} />
            <Image src={mirissaImg} alt="" className="h-full rounded-lang cursor-pointer object-cover" onClick={() => setShowGallery(true)} />
            <div className="relative">
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5" onClick={() => setShowGallery(true)}>
                <Image src={moreImages} alt="" />
                <span className="text-sm text-white font-Helvetica font-normal">View More</span>
              </button>
              <Image src={mirissaWhaleImg} alt="" className="h-full bg-gradient-to-r from-black via-black to-transparent bg-cover bg-no-repeat bg-center rounded-lang object-cover" />
            </div>
          </div>
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

      {showGallery && <TravelSlider setShowGallery={setShowGallery} images={mobileImages} />}

      <section className={`sm:flex gap-8 px-5 sm:px-17.5 mt-7.5 sm:mt-0 ${toBottom ? "items-end" : ""}`}>
        <article className="sm:basis-3/5">
          <div onMouseEnter={() => setToBottom(false)}>
            <h2 className="text-testimonials leading-8 sm:leading-none sm:text-5xl font-normal font-Calistoga text-hero-2 ">Whale Watching Tour In Sri Lanka (Mirissa, Colombo)</h2>
            <div className="sm:flex items-center gap-6 mt-4 sm:mt-10 pb-8 border-b border-trip-border">
              <p className="p-2.5 rounded-full bg-hero-1 text-white text-sm font-medium inline-block mb-7.5 sm:mb-0">4 Days / 3 Nights</p>

              {/* <div className="grid grid-cols-3 sm:flex items-center sm:grow divide-x-[0.5px] gap-4">
                <div className="flex items-center gap-1">
                  <p className="text-services-big text-number font-bold font-Helvetica">1</p>
                  <p className="flex flex-col">
                    <span className="text-sm font-Helvetica text-hero-3 font-normal">
                      Day in
                    </span>
                    <span className="text-hero-text-1 font-Helvetica text-hero-3 font-medium">
                      Kandy
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1 pl-2">
                  <p className="text-services-big text-number font-bold font-Helvetica">2</p>
                  <p className="flex flex-col">
                    <span className="text-sm font-Helvetica text-hero-3 font-normal">
                      Day in
                    </span>
                    <span className="text-hero-text-1 font-Helvetica text-hero-3 font-medium">
                      Jaffna
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1 pl-2">
                  <p className="text-services-big text-number font-bold font-Helvetica">1</p>
                  <p className="flex flex-col">
                    <span className="text-sm font-Helvetica text-hero-3 font-normal">
                      Day in
                    </span>
                    <span className="text-hero-text-1 font-Helvetica text-hero-3 font-medium">
                      Colombo
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1 pl-2">
                  <p className="text-services-big text-number font-bold font-Helvetica">3</p>
                  <p className="flex flex-col">
                    <span className="text-sm font-Helvetica text-hero-3 font-normal">
                      Day in
                    </span>
                    <span className="text-hero-text-1 font-Helvetica text-hero-3 font-medium">
                      Yala
                    </span>
                  </p>
                </div>
              </div> */}
            </div>

            <div className="mt-7.5 sm:mt-10 pb-7.5 sm:pb-10 border-b border-trip-border flex items-center justify-between sm:gap-x-12.5 gap-y-5 flex-wrap">
              <p className="flex items-center gap-2.5">
                <Image src={carTrip} alt="" />
                <span className="text-base font-Helvetica font-normal text-hero-3">Transport Included</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Image src={foodTrip} alt="" />
                <span className="text-base font-Helvetica font-normal text-hero-3">Meals Included</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Image src={hotelTrip} alt="" />
                <span className="text-base font-Helvetica font-normal text-hero-3">Stay Included</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Image src={eyeTrip} alt="" />
                <span className="text-base font-Helvetica font-normal text-hero-3">Sightseeing Included</span>
              </p>
            </div>

            <div className="mt-6 sm:pt-7 pt-9 pb-6 pl-5 pr-3.5 border-[0.5px] border-trip-border rounded-lang mb-5 sm:hidden">
              <div className="flex item-center justify-between mb-5">
                <span className="text-base sm:text-hero-text-1 font-Helvetica font-normal text-hero-3 leading-6">Starting From</span>
                <span className="sm:flex items-center gap-1 hidden">
                  {starRating}
                  <span className="text-hero-text-1 font-Helvetica font-bold text-hero-3 leading-6">4.8/5</span>
                </span>
              </div>

              <h4 className="space-x-1.5">
                <span className="text-2xl sm:text-testimonials font-Helvetica font-bold text-black leading-10">USD 135</span>
                <span className="text-base sm:text-hero-text-1 text-person font-Helvetica font-normal">Per Person</span>
              </h4>

              {/* <h4 className="text-collaborators text-hero-3 font-Helvetica font-light leading-8 line-through mt-3">USD 2,499</h4> */}

              <button className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-9 w-full">Book Now</button>
            </div>

            <div className="mt-12.5 mb-12.5 sm:mb-17.5">
              <h4 className="text-collaborators text-highlights font-Helvetica font-bold leading-8 mb-7.5">Trip Highlights</h4>
              <p className="text-base sm:text-hero-text-1 text-hero-3 font-Helvetica font-light leading-6 mb-7.5">
                Embark on an unforgettable journey across the enchanting landscapes and cultural wonders of Sri Lanka with our 5-day tour package. Begin your exploration in Mirissa, where {`you'll`} be greeted by the pristine shores and breathtaking views of Coconut Tree Hill. Dive into the azure depths of the Indian Ocean with a mesmerizing whale-watching excursion, followed by a leisurely journey to Colombo via Bentota. Along the way, visit a Turtle Hatchery and embark on a scenic Madhu River Safari, immersing yourself in the natural beauty and wildlife of this tropical paradise. Discover the vibrant city of Colombo through an immersive city tour, before bidding farewell to this captivating island nation. Experience the best of Sri Lanka with CH Asian Holidays, where every moment is filled with adventure, discovery, and memories to last a lifetime.
              </p>
              {/* <ul className="text-base sm:text-hero-text-1 text-hero-3 font-Helvetica font-light leading-6 space-y-2.5 list-disc list-inside">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              </ul> */}
            </div>

            <div className="pt-11 pb-8 px-5 border-[0.5px] border-trip-border rounded-lang mb-12.5 sm:hidden">
              <h4 className="text-2xl sm:text-testimonials font-Helvetica text-black font-bold leading-10 mb-5">Send An Inquiry</h4>

              <p className="text-sm sm:text-base font-Helvetica text-hero-3 font-light leading-5 sm:leading-6 mb-5 sm:mb-6">
              Celebrate your wanderlust with us! Fill out the form below to start planning your next adventure.
              </p>

              <input type="name" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Your Name" />
              <input type="email" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Email Address" />

              <div className="grid sm:grid-cols-2 gap-2.5 mt-2.5">
                <div className="relative">
                  <input type="text" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full pr-12" placeholder="Travel Date" />
                  <Image src={calendarImg} alt="" className="absolute top-1/2 transform -translate-y-1/2 right-5" />
                </div>
                <input type="text" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Traveler Count" />
              </div>

              <textarea type="text" id="name" className="h-35 sm:h-35 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Your Message" />

              <button className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-2.5 w-full">Book Now</button>
            </div>
          </div>

          <div onMouseEnter={() => setToBottom(true)}>
            <h4 className="text-collaborators text-highlights font-Helvetica font-bold leading-8 mb-7.5">Trip Schedule</h4>

            <div>
              {faqs.map((item, index, faqsArray) => {
                if(item.day !== "04") return (
                  <AccordionItem
                    key={item.title}
                    num={index}
                    title={item.title}
                    day={item.day}
                    image={item.image}
                    locations={item.locations}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    lastIndex={faqsArray.length - 1}
                  >
                    <h4 className="text-services font-Helvetica leading-5 text-hero-3 font-semibold">
                      {item.arrival === "Airport To Mirissa" && "Airport To Mirissa"}
                      {item.arrival === "Mirissa To Colombo" && "Mirissa To Colombo"}
                      {item.arrival === "Colombo" && "Colombo"}
                    </h4>

                    <p className="text-services text-hero-3 font-Helvetica font-light leading-5 space-y-2 mt-5 mb-7.5">
                      {item.transfers.map((transfer, index) => <span className="block" key={index}>{transfer}</span>)}
                    </p>

                    <h4 className="text-services font-Helvetica leading-5 text-hero-3 font-semibold underline-offset-2 decoration-solid underline">
                      {item.activityLocation === "Coconut Tree Hill" && "Coconut Tree Hill"}
                      {item.activityLocation === "Whale Watching – Included To The Package" && "Whale Watching – Included To The Package"}
                      {item.activityLocation === "Colombo City Tour" && "Colombo City Tour"}
                    </h4>

                    {item.activityLocation === "Colombo City Tour" && <p className="text-services text-hero-3 font-Helvetica font-light leading-5 mt-2">While on your city tour in Colombo, you may visit famous places including;</p>}

                    {item.activityLocation !== "Coconut Tree Hill" && (
                      <ul className={`text-services text-hero-3 font-Helvetica font-light leading-5 space-y-2 mb-7.5 list-disc list-inside ${item.activityLocation === "Colombo City Tour" ? "mt-2.5" : "mt-5"}`}>
                        {item.activities.map((activity, index) => <li key={index}>{activity}</li>)}
                      </ul>
                    )}

                    {item.activityLocation === "Coconut Tree Hill" && (
                      <p className={`text-services text-hero-3 font-Helvetica font-light leading-5 space-y-2 mb-7.5 ${item.activityLocation === "Colombo City Tour" ? "mt-2.5" : "mt-5"}`}>
                        {item.activities.map((activity, index) => <span key={index} className="block">{activity}</span>)}
                      </p>
                    )}

                    {item.includes && ( 
                      <>
                        <h4 className="text-services font-Helvetica leading-5 text-hero-3 font-semibold">
                          Includes
                        </h4>

                        <ul className="text-services text-hero-3 font-Helvetica font-light leading-5 space-y-2 list-disc list-inside mt-5 mb-7.5">
                          {item.includes.map((including, index) => <li key={index}>{including}</li>)}
                        </ul>
                      </>
                    )}

                    {item.includes && 
                      <p className="text-services text-hero-3 font-Helvetica font-light leading-5 mb-4">
                        Next Proceed to Colombo via Bentota, En route visit Turtle Hatchery and Madhu River Safari.
                      </p>
                    }

                    {item.turtleHatchery && ( 
                      <>
                        <h4 className="text-services font-Helvetica leading-5 text-hero-3 font-semibold underline-offset-2 decoration-solid underline">
                          Turtle Hatchery
                        </h4>

                        <p className="text-services text-hero-3 font-Helvetica font-light leading-5 space-y-2 list-disc list-inside mt-5 mb-7.5">
                          {item.turtleHatchery}
                        </p>
                      </>
                    )}

                    {item.madhuRiverWithSafari && ( 
                      <>
                        <h4 className="text-services font-Helvetica leading-5 text-hero-3 font-semibold underline-offset-2 decoration-solid underline">
                          Madhu River With Safari
                        </h4>

                        <p className="text-services text-hero-3 font-Helvetica font-light leading-5 space-y-2 list-disc list-inside mt-5 mb-7.5">
                          {item.madhuRiverWithSafari}
                        </p>
                      </>
                    )}

                    {item.activityLocation === "Colombo City Tour" && 
                      <p className="text-services text-hero-3 font-Helvetica font-light leading-5 mb-4">
                        For shopping, you may visit Odel, House of Fashion, Beverly Street, Majestic City, Noritake, etc.
                      </p>
                    }


                    <p className="text-services text-hero-3 font-Helvetica font-semibold leading-5 mt-5 mb-10">
                      {item.hotel}
                    </p>
                  </AccordionItem>
                )

                if(item.day === "04") return (
                  <AccordionItem
                    key={item.title}
                    num={index}
                    title={item.title}
                    day={item.day}
                    image={item.image}
                    locations={item.locations}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    lastIndex={faqsArray.length - 1}
                  >
                    <h4 className="text-services font-Helvetica leading-5 text-hero-3 font-semibold">
                      Colombo To Airport
                    </h4>

                    <p className="text-services text-hero-3 font-Helvetica font-light leading-5 mt-5 mb-12.5">
                      After breakfast, proceed to Katunayake International Airport.
                    </p>
                  </AccordionItem>
                )
              })}
            </div>
          </div>
        </article>

        <div className="sm:basis-2/5 hidden sm:flex flex-col h-full">
          <div className="pt-7 pb-6 pl-5 pr-3.5 border-[0.5px] border-trip-border rounded-lang mb-5">
            <div className="flex item-center justify-between mb-5">
              <span className="text-hero-text-1 font-Helvetica font-normal text-hero-3 leading-6">Starting From</span>
              <span className="flex items-center gap-1">
                {starRating}
                <span className="text-hero-text-1 font-Helvetica font-bold text-hero-3 leading-6">4.8/5</span>
              </span>
            </div>

            <h4 className="space-x-1.5">
              <span className="text-testimonials font-Helvetica font-bold text-black leading-10">USD 135</span>
              <span className="text-hero-text-1 text-person font-Helvetica font-normal">Per Person</span>
            </h4>

            {/* <h4 className="text-collaborators text-hero-3 font-Helvetica font-light leading-8 line-through mt-3">USD 2,499</h4> */}

            <button className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-9 w-full">Book Now</button>
          </div>

          <div className="pt-11 pb-8 px-5 border-[0.5px] border-trip-border rounded-lang">
            <h4 className="text-testimonials font-Helvetica text-black font-bold leading-10 mb-5">Send An Inquiry</h4>

            <p className="text-base font-Helvetica text-hero-3 font-light leading-6 mb-6">Celebrate your wanderlust with us! Fill out the form below to start planning your next adventure.</p>
            <form onSubmit={handleSubmit(onSubmit)}>  
            <input type="text" id="name" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Your Name" {...register('name',{required: true, maxLength: 50 , minLength: 2})}/>
            <input type="email" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Email Address" {...register('email',{required: true, pattern: /^\S+@\S+$/i})}/>

            <div className="grid grid-cols-2 gap-2.5 mt-2.5">
              <div className="relative">
                <input type="date" id="date" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full pr-12" placeholder="Travel Date" {...register("date", {required: true})}/>
                
              </div>
              <input type="number" id="travelercount" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Traveler Count" {...register("travelercount", {required: true, max: 99, min: 1})}/>
            </div>

            <textarea type="text" id="name" className="h-35 sm:h-35 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5" placeholder="Your Message" {...register('message',{required: true, minLength: 6})}/>

            <button type="submit" className="py-4 px-5 bg-hero-1 rounded-lang text-sm font-Helvetica font-bold leading-normal text-white mt-2.5 w-full">Book Now</button>
            </form>
          </div>
          
        </div>
      </section>

      <section className="relative sm:border border-trip-border sm:mx-17.5 mt-20 sm:mt-12.5 sm:pt-12.5 sm:pl-11 sm:pr-18 pl-5 pr-5 sm:pb-18 rounded-lang grid sm:grid-cols-2 gap-17.5 sm:gap-23.75 overflow-y-hidden" onMouseEnter={() => setToBottom(true)}>
        <div>
          <h4 className="text-xl text-hero-3 font-Helvetica font-medium mb-7.5 sm:mb-9.5">Inclusions</h4>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3.5">
              <Image src={checkmarkImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Accommodation on a sharing basis. (Double rooms)</p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={checkmarkImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Whale-watching package.</p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={checkmarkImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Transport exclusively by air-conditioned vehicles.</p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={checkmarkImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Coach with English / Hindi speaking chauffeur / National guides.</p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={checkmarkImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Meeting arrangements at the airport on arrival and departure.</p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={checkmarkImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">The above are net and include all government taxes.</p>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-trip-border absolute rotate-90 top-0 w-full hidden sm:block"></div>

        <div>
          <h4 className="text-xl text-hero-3 font-Helvetica font-medium mb-9.5">Exclusions</h4>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3.5">
              <Image src={cancelImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Airport taxes.</p>
            </div>
            <div>
              <div className="flex items-start gap-3.5">
                <Image src={cancelImg} alt="" className="w-6 h-6" />
                <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Lunch for the entire tour.</p>
              </div>

              <ul className="text-services text-hero-3 font-Helvetica font-light leading-5 space-y-2 list-disc list-inside mt-3 pl-4">
                <li>Gangarama Temple – 03 USD Per person.</li>
                <li>Turtle Hatchery – 05 USD Per person.</li>
                <li>Madhu River Safari – 10 USD Per person.</li>
              </ul>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={cancelImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">
              Some of the places included in the itinerary, you can enter free of charge. Rates and taxes are subject to change as per government regulations without prior notice.
              </p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={cancelImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">
                Expenses of personal nature such as tipping, porters, laundry, telephones, etc.
              </p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={cancelImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Video and Camera permits.</p>
            </div>
            <div className="flex items-start gap-3.5">
              <Image src={cancelImg} alt="" className="w-6 h-6" />
              <p className="text-hero-text-1 text-hero-3 font-Helvetica font-light">Any other services not specified above.</p>
            </div>
          </div>
        </div>
      </section>

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
          <Image src={image} alt="" className="sm:h-33.25 h-56 sm:w-50 w-full rounded-lang" />
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
    title: "Journey To Mirissa",
    locations: [
      "1 Location", "Beachside Journey"
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
    title: "Journey To Watch Whales",
    locations: [
      "3 Location", "Whale Watching"
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
      "9 Location", "City Tour"
    ],
    title: "Journey Around The City",
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

export default TravelPackageWhale
