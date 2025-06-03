"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


import Image from "next/image";
import Link from "next/link";

import aboutHero from "../../../public/img/about-hero.png"
import lineIcon from "../../../public/img/hero-line.png"
import phoneIcon from "../../../public/img/phone-contact.png"
import emailIcon from "../../../public/img/email-contact.png"
import placeIcon from "../../../public/img/place-contact.png"
import facebookIcon from "../../../public/img/facebook-contact.png"
import instagramIcon from "../../../public/img/instagram-contact.png"
import pinterestIcon from "../../../public/img/pinterest-contact.png"
import twitterIcon from "../../../public/img/twitter-contact.png"
import linkdinIcon from "../../../public/img/linkedIn-contact.png"

import Collaborators from "@/components/collaborators";
import Services from "@/components/services";
import Subscription from "@/components/subscription";

export default function Contact({ settings }) {
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
        page : 'Contact Us',
        traveldate : '',
        travelercount : ''
      }),
    }).then(() => {
      // Toast notification
      toast.success('Your email message has been sent successfully');
    });

    reset();
  }

  return (
    <Container>
      <section className="h-92.5">
        <Image src={aboutHero} alt="" className="w-full h-120 max-w-[1536px] absolute top-0 z-0 hidden sm:block" />
        <Image src={aboutHero} alt="" className="w-full h-120 absolute top-0 z-0 sm:hidden" />
      </section>

      <section className="relative">
        <div className="flex flex-col items-center justify-center absolute -top-14 sm:-top-50 left-1/2 transform -translate-x-1/2 w-full">
          <p className="text-hero-text-1 font-normal font-Helvetica text-hero-1 z-50 static opacity-0">Home {`>`} Contact Us</p>
          <div className="mt-5 relative flex flex-col items-center justify-center">
            <h4 className="font-Calistoga text-5xl sm:text-[58px] font-normal text-lang-border leading-[65px] z-50 static">Contact Us</h4>
            <Image src={lineIcon} alt="" className="-mt-7 w-57 sm:w-auto" />
          </div>
        </div>

        <div className="mx-5 sm:mx-54 text-base sm:text-hero-text-1 font-normal leading-6 font-Helvetica text-hero-3 text-center pt-20">
          <p>
            Have questions, suggestions, or simply want to say hello? {`We'd`} love to hear from you! Feel free to reach out to us using the contact form below or connect with us on social media. Our dedicated team is here to assist you in any way we can.
          </p>
        </div>
      </section>
      
      <section className="sm:mx-23.75 flex flex-col sm:flex-row items-center gap-17 mt-11">
        <div className="basis-[45%] px-5 sm:px-0 order-2 sm:order-none">
          <div className="space-y-7.5">
            <div className="flex items-center gap-7.5">
              <Image src={phoneIcon} alt="" />
              <p className="text-contact text-lg sm:text-xl font-medium">+94 77 697 3331</p>
            </div>
            <div className="flex items-center gap-7.5">
              <Image src={emailIcon} alt="" />
              <p className="text-contact text-lg sm:text-xl font-medium">chasianholidays@gmail.com</p>
            </div>
            <div className="flex items-center gap-7.5">
              <Image src={emailIcon} alt="" />
              <p className="text-contact text-lg sm:text-xl font-medium">hello@chasianholidays.com</p>
            </div>
            <div className="flex items-center gap-7.5">
              <Image src={placeIcon} alt="" />
              <p className="text-contact text-lg sm:text-xl font-medium">No : 125, Ward City Shopping Complex, Queens Marry Road, Gampaha.</p>
            </div>
          </div>

          <div className="sm:mt-23.75 mt-13.75 flex flex-col items-center sm:block">
            <p className="text-lg font-bold text-contact">Follow Us on Social Media</p>

            <div className="flex items-center gap-5 mt-2.5">
              <Image src={facebookIcon} alt="" />
              <Image src={twitterIcon} alt="" />
              <Image src={instagramIcon} alt="" />
              <Image src={linkdinIcon} alt="" />
              <Image src={pinterestIcon} alt="" />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-hero-1 basis-full sm:basis-[55%] py-13.75 px-7.5 sm:rounded-[20px] w-full">
          <p className="font-Helvetica text-base text-white font-normal mb-10 sm:mb-7.5 hidden sm:block">
            {`Let's`} start a conversation and make your travel dreams a reality.
          </p>

          <input type="text" id="name" className="h-13 p-5 rounded-xl text-sm sm:text-base leading-normal font-light text-hero-3 w-full" placeholder="Your Name"  
          {...register('name',{required: true, maxLength: 50 , minLength: 2})}/>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-5 mt-2.5 sm:mt-4">
            <input type="email" id="email" className="h-13 p-5 rounded-xl text-sm sm:text-base leading-normal font-light text-hero-3" placeholder="Email Address" 
            {...register('email',{required: true, pattern: /^\S+@\S+$/i})}/>

            <input type="tel" id="mobilenumber" className="h-13 p-5 rounded-xl text-sm sm:text-base leading-normal font-light text-hero-3" placeholder="Phone Number" 
            {...register('mobilenumber',{required: true, minLength: 6, maxLength: 12})}/>
          </div>

          <textarea type="text" id="message" className="h-45 sm:h-35 p-5 rounded-xl text-sm sm:text-base leading-normal font-light text-hero-3 w-full mt-2.5 sm:mt-4" placeholder="Your Message" {...register('message',{required: true, minLength: 6})}/>

          <div className="flex items-center justify-end">
            <button type="submit" className="py-4 bg-white rounded-full sm:rounded-lang font-Helvetica text-sm uppercase font-bold text-hero-1 w-2/4 sm:w-1/4 mt-4">Send</button>
          </div>
        </form>
      </section>

      <Subscription />

      {/* <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact ivovle Global
          </h2>
          <p className="max-w-sm mt-5">
            Have something to say? We are here to help. Fill up the
            form or send email or call phone.
          </p>

          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <MapPinIcon className="w-4 h-4" />
              <span>Colombo, Sri Lanka</span> 
            </div>
            {settings?.email && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("message", {
                  required: "Enter your Message"
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
              {message || "Success. Message sent successfully"}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
              {message || "Something went wrong. Please try later."}
            </div>
          )}
        </div>
      </div> */}
    </Container>
  );
}
