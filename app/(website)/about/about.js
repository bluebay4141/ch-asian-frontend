"use client";

import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

import aboutHero from "../../../public/img/about-hero.png"
import aboutHeroMobile from "../../../public/img/about-hero-mobile.png"
import lineIcon from "../../../public/img/hero-line.png"
import aboutImage1 from "../../../public/img/balloon.webp"
import aboutImage2 from "../../../public/img/yapahuwa-2.webp"
import bgAbout from "../../../public/img/bg-about.png"

import Collaborators from "@/components/collaborators";
import Services from "@/components/services";
import Subscription from "@/components/subscription";

export default function About({ authors, settings }) {
  return (
    <Container>
      <section className="h-92.5">
        <Image src={aboutHero} alt="" className="w-full max-w-[1536px] h-120 absolute top-0 z-0 hidden sm:block" />
        <Image src={aboutHero} alt="" className="w-full h-120 absolute top-0 z-0 sm:hidden" />
      </section>

      <section className="relative">
        <div className="flex flex-col items-center justify-center absolute -top-14 sm:-top-50 left-1/2 transform -translate-x-1/2 w-full">
          <p className="text-hero-text-1 font-normal font-Helvetica text-hero-1 z-50 static opacity-0">Home {`>`} About Us</p>
          <div className="mt-5 relative flex flex-col items-center justify-center">
            <h4 className="font-Calistoga text-5xl sm:text-[58px] font-normal text-lang-border leading-[65px] z-50 static">About</h4>
            <Image src={lineIcon} alt="" className="-mt-7 w-57 sm:w-auto" />
          </div>
        </div>

        <div className="mx-5 sm:mx-54 text-base sm:text-hero-text-1 font-normal leading-6 font-Helvetica text-hero-3 text-center space-y-5 pt-20">
          <p className="hidden sm:block">
            At CH Asian Holidays, we are more than just a travel company—we are your companions on a journey to discover the wonders of Sri Lanka and beyond. Founded with a passion for exploration and a deep appreciation for cultural diversity, we are dedicated to curating exceptional travel experiences that leave a lasting impression. Our team of seasoned travel enthusiasts is committed to crafting personalized itineraries that immerse you in the rich tapestry of Sri {`Lanka's`} culture, history, and natural beauty.
          </p>
          <p>
          What sets CH Asian Holidays apart is our unwavering commitment to providing tailored adventures that exceed your expectations. Whether {`you're`} exploring the enchanting landscapes of Sri Lanka or embarking on a global odyssey, our meticulously curated tour packages offer a perfect blend of adventure, luxury, and cultural immersion. With expertly guided tours led by passionate professionals and luxurious accommodations that add a touch of indulgence to your travels, every moment with CH Asian Holidays is an opportunity to create cherished memories that will last a lifetime.
          </p>
        </div>
      </section>
      
      <section className="mx-5 sm:mx-28.75 grid grid-cols-2 sm:grid-cols-4 gap-5 mt-15 sm:mt-30 relative">
        <Image src={aboutImage2} alt="" className="max-h-60 sm:max-h-88 h-60 sm:h-full w-full rounded-lang" style={{boxShadow: "5px 5px 14px 0px rgba(0, 0, 0, 0.25)"}} />
        <div className="relative rounded-lang max-h-60 sm:max-h-88 h-60 sm:h-full sm:-mt-18 -mt-6 bg-hero-1" 
        style={{boxShadow: "5px 5px 14px 0px rgba(0, 0, 0, 0.25)"}}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h4 className="text-[32px] sm:text-5xl leading-9 sm:leading-[54px] font-bold font-Helvetica text-white ">1,300+</h4>
            <p className="text-xs sm:text-hero-text-1 font-normal leading-normal font-Helvetica text-white mt-2.5 sm:mt-4">Clients Worldwide</p>
          </div>
        </div>
        <Image src={aboutImage1} alt="" className="max-h-60 sm:max-h-88 h-60 sm:h-full w-full rounded-lang order-4 sm:order-none -mt-6 sm:-mt-0" style={{boxShadow: "5px 5px 14px 0px rgba(0, 0, 0, 0.25)"}} />
        <div className="relative rounded-lang max-h-60 sm:max-h-88 h-60 sm:h-full sm:-mt-18 bg-hero-1" 
        style={{boxShadow: "5px 5px 14px 0px rgba(0, 0, 0, 0.25)"}}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <h4 className="text-[32px] sm:text-5xl leading-9 sm:leading-[54px] font-bold font-Helvetica text-white ">150+</h4>
            <p className="text-xs sm:text-hero-text-1 font-normal leading-normal font-Helvetica text-white mt-2.5 sm:mt-4">Tours Completed</p>
          </div>
        </div>

        <Image src={bgAbout} alt="" className="absolute h-210 -left-28.75 hidden sm:block" />
      </section>

      <section className="mt-16 sm:mt-27.5">
        <div className="flex flex-col items-center mb-13 text-center sm:text-start mx-5 sm:mx-0">
          <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-light mb-4">About Us</h4>
          <h4 className="font-Helvetica text-mobile-vision leading-[43px] sm:text-5xl font-medium text-lang-border mb-7.5">
            Vision and Mission
          </h4>
          <p className="font-Helvetica text-hero-text-1 text-hero-3 font-normal text-center w-full">
            Dive into the essence of our purpose and aspirations guiding every step of our expedition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 sm:px-15">
          <div className="relative rounded-lang h-97 order-1 sm:order-none bg-hero-1" style={{boxShadow: "5px 5px 14px 0px rgba(0, 0, 0, 0.25)"}}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center px-7.5 sm:px-25">
              <h4 className="text-testimonials leading-[42px] font-bold font-Helvetica text-white">Vision</h4>
              <p className="text-hero-text-1 font-normal font-Helvetica text-vision mt-4">
                Our vision is to be the preferred travel partner for those seeking authentic and immersive experiences in Sri Lanka. We aim to redefine travel by creating tailor-made itineraries that reflect the unique interests and preferences of our clients. Whether you are a solo traveler, a couple on a romantic getaway, or a family seeking adventure, we strive to turn your travel dreams into reality.
              </p>
            </div>
          </div>

          <div className="relative rounded-lang h-97 bg-hero-1" style={{boxShadow: "5px 5px 14px 0px rgba(0, 0, 0, 0.25)"}}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center px-7.5 sm:px-25">
              <h4 className="text-testimonials leading-[42px] font-bold font-Helvetica text-white">Mission</h4>
              <p className="text-hero-text-1 leading-6 font-light font-Helvetica text-vision mt-4">
                At our core, we are dedicated to curating unforgettable journeys that capture the essence of Sri Lanka. Through personalized service and attention to detail, we aim to exceed expectations, fostering lasting memories and inspiring wanderlust in every traveler we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-25 sm:mt-0 mb-10">
        <Collaborators />
      </section>

      <Services />

      <Subscription />
    </Container>
  );
}
