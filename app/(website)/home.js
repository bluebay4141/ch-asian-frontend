"use client"
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/container";
import PostList from "@/components/postlist";

import heroImage from "../../public/img/hero-img.png"
import heroImageMobile from "../../public/img/hero-img.png"
import heroLion from "../../public/img/hero-lion.png"
import bookingImg from "../../public/img/booking.png"
import bookingMobileImg from "../../public/img/booking-mobile.png"
import birdImg from "../../public/img/bird.png"
import tripImg from "../../public/img/trip-advisor.png"
import hotelImg from "../../public/img/hotel.png"
import packagesImg from "../../public/img/packages.png"
import ticketsImg from "../../public/img/tickets.png"
import taxiImg from "../../public/img/taxi.png"
import servicesImg from "../../public/img/bg-services.png"
import subscribeImg from "../../public/img/subscribe.png"

import playBtn from "../../public/img/play-btn.png"
import document from "../../public/img/document.svg"
import calendarIcon from "../../public/img/calendar.svg"
import magicIcon from "../../public/img/magic.svg"
import travelIcon from "../../public/img/travel.svg"
import booknowBtn from "../../public/img/booknow-btn.svg"

import readmoreIcon from "../../public/img/read-more.svg"
import sendIcon from "../../public/img/send-icon.svg"
import arrowIcon from "../../public/img/arrow.JPG"
// import assetIcon from "../../public/img/Asset-2.svg"
import logoSetIcon from "../../public/img/logo-set.svg"
import forbesBgImg from "../../public/img/bg-forbes.svg"
import forbesLogo from "../../public/img/forbes-logo.svg"
import faqBg from "../../public/img/bg-faq.png"
import heroLine from "../../public/img/hero-line.png"
import sponsor from "../../public/img/sponsor.png"
import subscribeMobile from "../../public/img/subscribe-mobile.png"

import { useRef, useState, useEffect } from "react";
import Services from "@/components/services";
import Collaborators from "@/components/collaborators";
import Subscription from "@/components/subscription";
import Testimonials from "@/components/testimonials";

import sigiriyaImg from "../../public/img/sigiriya.webp"
import trincoImg from "../../public/img/trinco.webp"
import yapahuwaImg from "../../public/img/yapahuwa.webp"
import kalpitiyaImg from "../../public/img/kalpitiya.webp"
import vishnuImg from "../../public/img/vishnu.webp"

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { getAllPosts } from '../../lib/sanity/client'
import PostListCard from '../(website)/blog-show-card/postlistcard'
import Packages from "@/components/packages";
import { useSearchParams } from "next/navigation";


const serviceImage1 = "https://cdn.pixabay.com/photo/2021/12/27/08/37/package-6896557_640.jpg"

export default function Post() {
  const [curOpen, setCurOpen] = useState(0);
  const packagesRef= useRef()
  const serviceRef = useRef()

  function handleServiceClick() {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const [blog, setBlog] = useState([]);


  useEffect(() => {
    const revalidateData = async () => {
      const postsData = await getAllPosts();
      setBlog(postsData);
    };
  
    revalidateData(); // Initial data fetch
  
    const interval = setInterval(revalidateData, 60000); // Revalidate every 60 seconds
  
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []); 

  function handleBackClick() {
    packagesRef.current.scrollIntoView({ behavior: 'smooth' })
  }

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
        mobilenumber : formData.mobilenumber,
        message: formData.message,
        page : 'Home',
        traveldate : '',
        travelercount : ''
      }),
    }).then(() => {
      // Toast notification
      toast.success('Your email message has been sent successfully');
    });

    reset();
  }

  const searchParams = useSearchParams();
  const packageId = searchParams.get('packageId');

  console.log(packageId)

  return (
    <Container>
      <section className="relative sm:px-17.5">
        <figure className="flex items-start h-220 sm:h-178">
          <div className="px-5 sm:px-0 w-full mt-0 sm:mt-25 absolute left-1/2 sm:left-0 transform -translate-x-1/2 sm:-translate-x-0 bottom-[120px] sm:bottom-0 z-50 sm:sticky sm:z-0 sm:w-2/5 text-center sm:text-start">
            <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-normal sm:mb-7.5 mb-6 leading-6">Explore two jewels in the Indian Ocean</h4>
            <div className="relative w-full">
              <h1 className="font-Calistoga text-5xl sm:text-hero-big text-hero-2 font-normal leading-tight mb-7.5 max-w-full sm:max-w-md w-full z-50 sticky">Travel, Enjoy, and Experience the Culture</h1> 
              <Image src={heroLine} alt="" className="absolute top-11 sm:right-0 z-0 right-8" />
            </div>
            <h4 className="font-Helvetica text-hero-text-1 text-hero-3 font-normal w-full mb-6 sm:mb-10 hidden sm:block">
              Tailored travel packages for South Indians exploring Sri {`Lanka's`} rich culture. Unforgettable adventures await.
            </h4>

            <div className="flex flex-col items-center gap-2.5 sm:gap-4 sm:flex-row">
              <button onClick={handleBackClick} className="h-10 px-10 sm:px-5 bg-hero-1 rounded-full font-Helvetica text-sm text-white font-bold uppercase border border-transparent">Find out more</button>
              <button className="flex items-center gap-1 h-10 px-10 sm:px-5 border border-hero-1 rounded-full">
                <Image src={playBtn} alt="" className="w-8 h-6" />
                <span className="font-Helvetica text-sm text-hero-1 font-bold">Play Trailer</span>
              </button>
            </div>
          </div>
          <div className="absolute right-0 z-10 h-200 -top-24 sm:-top-32 sm:bottom-9.5 hidden sm:block">
            <Image src={heroImage} alt="" className="sm:max-w-135 w-full h-full" />
          </div>
          <div className="absolute right-0 z-10 h-200 -top-24 sm:-top-32 sm:bottom-9.5 sm:hidden">
            <Image src={heroImageMobile} alt="" className="sm:max-w-135 w-full h-full" />
          </div>
          <div className="absolute right-72 bottom-28 z-50 hidden sm:block">
            <Image src={heroLion} alt="" className="max-w-110 w-full" />
          </div>
          <div className="absolute bottom-36 right-8 z-50 hidden sm:block">
            <Image src={tripImg} alt="" />
          </div>
          {/* <div className="">
            <Image src={assetIcon} alt="" />
          </div> */}
        </figure>
      </section>

      <section id="services" className="px-5 sm:px-33.25 sm:pt-17.5 sm:mb-18 relative">
        <div className="text-center mb-5 sm:mb-16">
          <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-light mb-4">Our Services</h4>
          <h4 className="font-Helvetica text-mobile-vision sm:text-5xl leading-[44px] sm:leading-[54px] font-medium text-lang-border">
            Your Journey, Our Expertise
          </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 z-50 relative sm:sticky bg-transparent">
          <div className="flex flex-col items-center">
            <div className="h-24 flex items-center justify-center mb-2">
              <Image src={packagesImg} alt="" className="w-[70%]" />
            </div>

            <div className="flex flex-col items-center justify-between sm:h-54 z-50">
              <h4 className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-bold uppercase leading-6 text-center sm:text-start">Tour packages</h4>
              <p className="font-Helvetica text-sm sm:text-hero-text-1 text-hero-3 font-light leading-5 max-w-40 w-full text-center sm:max-w-full my-6 sm:my-0">
                Dive into curated adventures with our bespoke tour packages, crafted to immerse you in the heart of Sri {`Lanka's`} cultural wonders.
              </p>
              <button onClick={handleBackClick} className="py-2.5 bg-black rounded-full font-Helvetica text-sm font-bold text-white w-2/3 sm:w-2/4 cursor-pointer">View All</button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 flex items-center justify-center mb-2">
              <Image src={ticketsImg} alt="" className="w-[70%]" />
            </div>

            <div className="flex flex-col items-center justify-between sm:h-54 grow sm:grow-0">
              <h4 className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-bold uppercase leading-6 text-center sm:text-start">Air Tickets</h4>
              <p className="font-Helvetica text-sm sm:text-hero-text-1 text-hero-3 font-light leading-5 max-w-40 w-full text-center sm:max-w-full my-6 sm:my-0">
                Elevate your journey with seamless air ticket bookings, ensuring smooth transitions from home to the captivating landscapes of Sri Lanka.
              </p>
              <Link href="/contact-us" className="py-2.5 bg-black rounded-full font-Helvetica text-sm font-bold text-center text-white w-2/3 sm:w-2/4">See Fares</Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 flex items-center justify-center mb-2">
              <Image src={hotelImg} alt="" className="w-[70%]" />
            </div>
            <div className="flex flex-col items-center justify-between sm:h-54">
              <h4 className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-bold uppercase leading-6 text-center sm:text-start">Hotel Reservasions</h4>
              <p className="font-Helvetica text-sm sm:text-hero-text-1 text-hero-3 font-light leading-5 max-w-40 w-full text-center sm:max-w-full my-6 sm:my-0">
                Experience comfort and luxury with our handpicked accommodations, offering a retreat after each {`day's`} exploration of {`Sri Lanka's`} enchanting destinations.
              </p>
              <Link href="/contact-us" className="py-2.5 bg-black rounded-full font-Helvetica text-center text-sm font-bold text-white w-2/3 sm:w-2/4">Reservasions</Link>
            </div>
            <div className="border-[0.5px] w-27.5 rotate-90 absolute left-1/2 transform -translate-x-1/2 bottom-1/4 sm:hidden"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-24 flex items-center justify-center mb-2">
              <Image src={taxiImg} alt="" className="w-[70%]" />
            </div>
            <div className="flex flex-col items-center justify-between sm:h-54 grow">
              <h4 className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-bold uppercase leading-6 text-center sm:text-start">Taxi Bookings</h4>
              <p className="font-Helvetica text-sm sm:text-hero-text-1 text-hero-3 font-light leading-5 max-w-40 w-full text-center sm:max-w-full">
                Navigate Sri Lanka with ease through our reliable taxi services, ensuring convenience and flexibility as you traverse the {`island's`} scenic routes.
              </p>
              <Link href="/contact-us" className="py-2.5 bg-black rounded-full font-Helvetica text-sm text-center font-bold text-white w-2/3 sm:w-2/4">See Vehicles</Link>
            </div>
            <div className="border-[0.5px] w-27.5 rotate-90 absolute left-1/2 transform -translate-x-1/2 bottom-3/4 sm:hidden"></div>
          </div>
        </div>

        <Image src={servicesImg} alt="" className="absolute -top-[170px] -left-30 z-50 h-[1430px] hidden sm:block" style={{zIndex: "-1"}} />
      </section>

      <section id="destinations" className="px-5 sm:px-17.5 mb-16 sm:mb-28.75 z-50 sticky pt-25 sm:pt-18" ref={packagesRef}>
        <div className="flex flex-col items-center mb-6 sm:mb-13 text-center sm:text-start">
          <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-light mb-4">Explore Your Next Adventure</h4>
          <h4 className="font-Helvetica text-mobile-vision sm:text-5xl leading-[44px] sm:leading-[54px] font-medium text-lang-border sm:mb-7.5">
            Unveil Our Curated Travel Packages
          </h4>
          <p className="font-Helvetica text-hero-text-1 text-hero-3 font-normal text-center max-w-2xl w-full hidden sm:block">
            Embark on a journey of discovery with our meticulously crafted travel packages, designed to unlock the hidden gems of Sri Lanka. From cultural escapades to breathtaking landscapes, each itinerary promises an unforgettable adventure tailored to your preferences.
          </p>
        </div>

      <Packages />

      </section>

      <Services />

      <section className="relative sm:overflow-y-hidden">
        <div className="hidden sm:block">
          <Image src={bookingImg} alt="" className="w-full max-h-220 sm:max-h-180 h-full" />
        </div>

        <div className="block sm:hidden">
          <Image src={bookingMobileImg} alt="" className="w-full max-h-full sm:max-h-180 h-full" />
        </div>

        <Image src={birdImg} className="absolute bottom-0 right-0 w-90 h-full hidden sm:block" alt="" />

        <div className="absolute top-17 sm:top-1/2 left-5 right-5 sm:left-17.5 sm:transform sm:-translate-y-1/2 grid grid-cols-1 sm:grid-cols-[1fr_370px] inset-x-0 gap-7.5 items-center sm:mr-82.5">
          <div>
            <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-light mb-4 w-full">Easy And Fast</h4>
            <h4 className="font-Helvetica text-mobile-vision sm:text-5xl font-medium leading-[44px] sm:leading-[54px] text-hero-2 mb-11.25 sm:mb-18 max-w-full sm:max-w-135 w-full">
              Book Your Trip In 3 Easy Steps
            </h4>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-5">
              <div className="w-24">   
                <Image src={travelIcon} alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="font-Helvetica text-hero-text-1 text-hero-3 font-bold leading-normal uppercase">Select Your Tour package</h4>
                <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-light leading-5 max-w-full sm:max-w-113 w-full">
                  Choose your favorite destination from our diverse range of offerings, spanning the globe.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-5 my-10">
              <div className="w-24">
                <Image src={calendarIcon} alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="font-Helvetica text-hero-text-1 text-hero-3 font-bold leading-normal uppercase">Select Travelling Dates</h4>
                <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-light leading-5 max-w-full sm:max-w-113 w-full">
                  After selecting your ideal spot, complete your payment to secure your booking and prepare for your adventure.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-5">
              <div className="w-24">
                <Image src={magicIcon} alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="font-Helvetica text-hero-text-1 text-hero-3 font-bold leading-normal uppercase">Wait for magic</h4>
                <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-light leading-5 max-w-full sm:max-w-113 w-full">
                  Sit back and relax as our exceptional team crafts a tailor-made itinerary for you, complete with exclusive offers and deals.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden flex-col items-center rounded-packages bg-packages sm:flex" style={{boxShadow: "0px 4px 8.3px 1px rgba(0, 0, 0, 0.09)"}}>
            <Image src={vishnuImg} alt="" className="mb-2 rounded-packages" />
            <div className="w-full pl-5 pr-4 pt-5 pb-7.5">
              <h4 className="font-Helvetica text-collaborators leading-7 text-hero-3 font-medium w-full mb-5">
              Ramayana Trail (Trincomalee, Kandy, Nuwara Eliya, Colombo)
              </h4>

              <h4 className="font-Helvetica text-hero-text-1 text-trip font-light w-full">
              6 Days Trip
              </h4>

              <div className="flex items-center justify-between sm:mt-7.5">
                <p className="font-Helvetica text-hero-text-1 sm:text-collaborators font-medium text-hero-1 leading-normal">$235.00 Per Pax</p>
                <Link href="/ramayanaya-trail-sri-lanka-tour" className="hidden sm:block">
                  <Image src={booknowBtn} alt="" />
                </Link>
              </div>
              <Link href="/ramayanaya-trail-sri-lanka-tour" className="sm:hidden mt-5">
                <Image src={booknowBtn} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-17.5 pt-19 sm:pt-16 pb-12.5 sm:pb-21 relative sm:overflow-x-hidden">
        <div className="flex flex-col items-center mb-10 sm:mb-14">
          <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-light mb-4">Frequently Asked Questions</h4>
          <h4 className="font-Helvetica text-mobile-vision sm:text-5xl leading-[44px] sm:leading-[54px] font-medium text-hero-2 text-center sm:text-start">
            Our Team Awaits To Help You
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14">
          <div>
            {faqs.map((item, index, faqsArray) => (
              <AccordionItem
                key={item.title}
                num={index}
                title={item.title}
                curOpen={curOpen}
                onOpen={setCurOpen}
                lastIndex={faqsArray.length - 1}
              >
                {item.text}
              </AccordionItem>
            ))}
          </div>

          <div>
            <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-normal mb-10 sm:mb-7.5">
              From visa inquiries to packing tips, empower your journey with clarity and confidence. Your adventure awaits, one question at a time.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>  
              <input type="text" id="name" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full " placeholder="Your Name" 
               {...register('name',{required: true, maxLength: 50 , minLength: 2})}/>
             
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-5 mt-2.5 sm:mt-4">
                <input type="email" id="email" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 " placeholder="Email Address" 
                 {...register('email',{required: true, pattern: /^\S+@\S+$/i})}/>
                
                <input type="tel" id="mobilenumber" className="h-13 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 " placeholder="Phone Number" 
                 {...register('mobilenumber',{required: true, minLength: 6, maxLength: 12})}/>
                
              </div>

              <textarea type="text" id="message" className="h-45 sm:h-35 border-[0.5px] p-5 rounded-xl border-question text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5 sm:mt-4 " placeholder="Your Message"  {...register('message',{required: true, minLength: 6})}/>
             

              <div className="flex items-center justify-end">
                <button type="submit" className="py-4 bg-hero-1 rounded-full sm:rounded-lang font-Helvetica text-sm uppercase font-bold text-white w-2/4 sm:w-1/4 mt-4">Send</button>
              </div>
            </form>
          </div>
        </div>
            {/*sm:block*/}
        <Image src={faqBg} alt="" className="absolute -right-42.5 bottom-0 hidden sm:block -z-10" />
      </section>

      <section className="relative overflow-y-hidden hidden sm:block">
        <div className="max-h-180 h-full">
          <Image src={forbesBgImg} alt="" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-17.5 right-17.5 transform -translate-y-1/2 inset-x-0 overflow-x-hidden">
          <div className="items-end pt-27.5 pb-21 pl-10 pr-7.5 rounded-packages" style={{background: "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)", backdropFilter: "blur(2.5px)"}}>
            <div className="mb-6 grid grid-cols-[35%_1fr] gap-20">
              <div>
                <Image src={forbesLogo} alt="" className="bg-transparent mb-10" />
                <h4 className="font-Helvetica text-5xl font-bold text-white" style={{textShadow: "2px 4px 13px rgba(0, 0, 0, 0.25)"}}>
                  Ranks Sri Lanka The 4th Most Popular Destination For Solo Travelers In 2024
                </h4>
              </div>

              <div className="flex flex-col gap-8 items-end">
                <p className="font-Helvetica text-hero-text-1 text-hero-3 font-light text-end">gives visitors a chance to experience a major travel trend: slow travel by train. Thompson, of Flash Pack, said: “After a tumultuous few years, Sri Lanka has made a big comeback, and its iconic upcountry train routes are a major part of its appeal.</p>
                <p className="font-Helvetica text-hero-text-1 text-hero-3 font-light text-end">With more U.S. travelers adding to an uptick in interest from U.K. customers this year, 2024 will be the moment when it all comes together and Sri Lanka once again rules the travel charts for slow, immersive adventure.”</p>
                <button className="font-Helvetica text-hero-text-1 text-hero-3 font-bold underline underline-offset-2">Forbes Magazine</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Collaborators />

      <section className="mt-14 sm:mt-6 px-5 sm:px-17.5">
        <div className="flex flex-col items-center mb-7.5 sm:mb-13">
          <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-light mb-4">More Interesting Readings</h4>
          <h4 className="font-Helvetica text-5xl font-medium text-hero-2 mb-7.5 text-center sm:text-start">
            Explore Our Latest Travel Stories
          </h4>
          <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-normal text-center sm:max-w-2xl w-full">
            Embark on a journey through our latest travel stories, where every page unveils new adventures and hidden gems waiting to be discovered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {blog.slice(0, 3).map((blog, index) => (
            <PostListCard blog={blog} key={index}/>
          ))}
        </div>

        <Link href="/all-post" className="flex items-center justify-center mt-8 sm:hidden">
          <button className="font-Helvetica text-more text-xs py-2.5 px-5 border border-more rounded-full">View More Stories</button>
        </Link>
      </section>

      <Subscription />
    </Container> 
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children, lastIndex }) {
  const isOpen = num === curOpen;

  function handleOpen() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`border-[0.5px] p-5 rounded-lang border-question flex items-center sm:items-start gap-6 ${num === lastIndex ? "" : "mb-2.5 sm:mb-6"}`} onClick={handleOpen}>
      <div className="w-[calc(100%_-_40px)]">
        <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-medium">{title}</p>
        {isOpen && <p className="font-Helvetica text-navigation text-answer font-light leading-5 mt-5 max-w-60 sm:max-w-full w-full">{children}</p>}
      </div>
      {isOpen ? polygonFaqUp : polygonFaqDown}
    </div>
  );
}

const faqs = [
  {
    title: "How can I customize my travel itinerary?",
    text:
      "To customize your travel itinerary, simply reach out to our dedicated team of travel experts. We understand that every traveler is unique, with distinct interests and preferences. Whether you're seeking adventure, cultural immersion, relaxation, or a mix of everything, we're here to tailor your itinerary to suit your needs. Just let us know your desired destinations, activities, accommodation preferences, and any special requirements, and we'll work closely with you to create a personalized travel experience that exceeds your expectations. Your journey starts with us, and we're committed to turning your travel dreams into unforgettable memories."
  },
  {
    title: "What destinations do you offer packages for?",
    text:
      "We offer packages for a wide range of destinations across Sri Lanka. From the pristine beaches of the south coast to the lush greenery of the central highlands, and from the ancient cultural sites in the Cultural Triangle to the wildlife-rich national parks, we have something for every type of traveler. Whether you're dreaming of exploring historic cities, embarking on thrilling adventures, or simply relaxing in idyllic surroundings, we've got you covered. Let us know your preferences, and we'll tailor a package that perfectly suits your interests and desires."
  },
  {
    title: "Any special deals or discounts available?",
    text:
      "Yes, we can offer discounts, but availability may vary. Travelers should contact us directly for more information."
  },
  {
    title: "What is your cancellation and refund policy?",
    text:
      "Our cancellation policy applies to any reduction of rooms after the release period. If canceled 14 days or less before arrival, there's a 100% cancellation charge. As for visas, please visit http://www.eta.gov.lk/slvisa/ and enter your details."
  },
  {
    title: "How can I contact customer support during my trip?",
    text:
      "You can reach our customer support team anytime during your trip by calling our dedicated hotline at +94 77 697 3331 or by sending an email to hello@chasianholidays.com. We're available 24/7 to assist you with any queries or concerns you may have."
  }
];

const blogs = [
  {
    image: trincoImg,
    title: "Trincomalee Treasures: Unveiling The Charms Of Sri Lanka's Coastal Gem",
    description: "Explore the coastal splendor of Trincomalee, Sri Lanka's hidden gem. Dive into azure waters, bask on pristine beaches, and discover ancient temples along this captivating coastline.",
    blogType: "Destinations"
  },
  {
    image: kalpitiyaImg,
    title: "Ride The Wind: Kite Surfing Adventures Await In Kalpitiya",
    description: "Experience the thrill of kitesurfing in Kalpitiya, Sri Lanka's premier kite surfing destination. Ride the wind, conquer the waves, and embark on an adrenaline-fueled adventure along the island's western coast.",
    blogType: "Adventures"
  },
  {
    image: yapahuwaImg,
    title: "Step Back In Time: Exploring The Ancient Marvels Of Yapahuwa Old City",
    description: "Journey through time and explore the ancient wonders of Yapahuwa Old City in Sri Lanka. Uncover majestic rock fortresses, sacred shrines, and architectural marvels that offer a glimpse into the island's rich history.",
    blogType: "Destinations"
  }
]

const polygonFaqUp = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
<path d="M8 0L15.7942 9L0.205771 9L8 0Z" fill="#464646"/>
</svg>

const polygonFaqDown = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
<path d="M8 9.5L0.205773 0.499999L15.7942 0.5L8 9.5Z" fill="#464646"/>
</svg>