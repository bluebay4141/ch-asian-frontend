import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";

import footerLogo from "../public/img/footer-logo.png"
import tripLogo from "../public/img/trip.png"
import advisorLogo from "../public/img/advisor.png"
import phoneLogo from "../public/img/phone.png"
import messageLogo from "../public/img/message.png"
import locationLogo from "../public/img/location.png"
import footerBg from "../public/img/footer-bg.png"
import footerBgMobile from "../public/img/bg-services-mobile.png"

import facebook from "../public/img/Facebook.png"
import instagram from "../public/img/Instagram.png"
import pinterest from "../public/img/Pinterest.png"
import youtube from "../public/img/YouTube.png"
import Link from "next/link";

export default function Footer(props) {
  return (
    <Container>
      {/* <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} ivovle Global. All
        rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          
          <a
          href="https://ivovle.global"
            rel="noopener"
            target="_blank">
            ivovle Global
          </a>
        </span>
     
      </div>
      <div className="mt-5 flex items-center justify-between  text-center lg:flex-row flex-col">
        <div className="my-auto lg:order-none order-2">
          <a
            href="https://ivovle.global"
            target="_blank"
            rel="noopener"
            className="relative block w-auto">
            Made with ❤️ in Colombo, Sri Lanka
          </a>
        </div>
        <div className="lg:order-none order-1 lg:mb-0 mb-3">
        <ThemeSwitch />
        </div>
      </div> */}
      <footer className="px-5 sm:px-17.5 pt-13 sm:pt-22.5 pb-20 sm:pb-13 sm:mt-14 bg-hero-1 relative overflow-hidden">
        <div className="sm:flex items-start">
          <nav className="w-full sm:w-1/4 flex flex-col items-center sm:block">
            <button>
              <Image src={footerLogo} alt="" />
            </button>
            <p className="font-Helvetica text-base text-white font-light leading-6 mb-8 sm:mb-0 mt-7.5 text-center sm:text-start">
              We are passionate about exploring tropical and cultural experiences in a unique way.
            </p>
            <div className="flex items-center mt-6">
              <Image src={tripLogo} alt="" />
              <Image src={advisorLogo} alt="" />
            </div>
          </nav>

          <nav className="w-1/5 mt-6 pl-20 hidden sm:block">
            <p className="font-Helvetica text-hero-text-1 text-white font-bold leading-7 tracking-[1px] mb-7.5">Company</p>

            <ul className="space-y-5">
              <li>
                <Link href="/about" className="font-Helvetica text-base leading-6 font-normal text-white">About Us</Link>
              </li>
              <li>
                <a href="#" className="font-Helvetica text-base leading-6 font-normal text-white">Packages</a>
              </li>
              <li>
                <a href="#" className="font-Helvetica text-base leading-6 font-normal text-white">Agents Login</a>
              </li>
            </ul>
          </nav>

          <nav className="w-1/5 mt-6 hidden sm:block pl-20">
            <p className="font-Helvetica text-hero-text-1 text-white font-bold leading-7 tracking-[1px] mb-7.5">More</p>

            <ul className="space-y-5">
              <li>
                <Link href="/contact-us" className="font-Helvetica text-base leading-6 font-normal text-white">Visa Info</Link>
              </li>
              <li>
                <Link href="/contact-us" className="font-Helvetica text-base leading-6 font-normal text-white">Air Tickets</Link>
              </li>
              <li>
                <a href="/blog" className="font-Helvetica text-base leading-6 font-normal text-white">Blog</a>
              </li>
            </ul>
          </nav>

          <nav className="sm:space-y-1.5 sm:w-[35%] mt-2 sm:mt-6 sm:pl-20">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-12 sm:mb-7.5">
              <Image src={facebook} alt="" />
              <Image src={youtube} alt="" />
              <Image src={instagram} alt="" />
              <Image src={pinterest} alt="" />
            </div>

            <div className="flex items-center gap-3.5">
              <Image src={phoneLogo} alt="" />
              <p className="font-Helvetica text-base leading-6 font-normal text-white">+94 77 697 3331</p>
            </div>
            <div className="flex items-center gap-3.5 my-4 sm:my-4.5">
              <Image src={messageLogo} alt="" />
              <p className="font-Helvetica text-base leading-6 font-normal text-white">chasianholidays@gmail.com</p>
            </div>
            <div className="flex items-center gap-3.5 mb-4 sm:mb-4.5">
              <Image src={messageLogo} alt="" />
              <p className="font-Helvetica text-base leading-6 font-normal text-white">hello@chasianholidays.com</p>
            </div>
            <div className="flex items-center gap-3.5">
              <Image src={locationLogo} alt="" />
              <p className="font-Helvetica text-base leading-6 font-normal text-white">No : 125, Ward City Shopping Complex, Queens Marry Road, Gampaha. </p>
            </div>
          </nav>

          <div className="grid grid-cols-2 sm:hidden mt-14">
            <nav className="sm:hidden block">
              <p className="font-Helvetica text-hero-text-1 text-white font-bold leading-7 tracking-[1px] mb-7.5 text-center sm:text-start">Company</p>

              <ul className="space-y-5 text-center sm:text-start">
                <li>
                  <a href="#" className="font-Helvetica text-base leading-6 font-normal text-white">About</a>
                </li>
                <li>
                  <a href="#" className="font-Helvetica text-base leading-6 font-normal text-white">Packages</a>
                </li>
                <li>
                  <a href="#" className="font-Helvetica text-base leading-6 font-normal text-white">Agents</a>
                </li>
              </ul>
            </nav>

            <nav className="sm:hidden block">
              <p className="font-Helvetica text-hero-text-1 text-white font-bold leading-7 tracking-[1px] mb-7.5 text-center sm:text-start">More</p>

              <ul  l className="space-y-5 text-center sm:text-start">
                <li>
                  <Link href="/contact-us" className="font-Helvetica text-base leading-6 font-normal text-white">Visa Info</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="font-Helvetica text-base leading-6 font-normal text-white">Airline</Link>
                </li>
                <li>
                  <a href="#" className="font-Helvetica text-base leading-6 font-normal text-white">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Image src={footerBg} alt="" className="absolute right-0 top-12 pointer-events-none hidden sm:block" />
        <Image src={footerBgMobile} alt="" className="absolute bottom-0 pointer-events-none sm:hidden" />
      </footer>
      
    </Container>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
      target="_blank"
      rel="noopener"
      className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="30"
          height="29.5385"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span> Purchase Pro ↗</span>
    </a>
  );
};
