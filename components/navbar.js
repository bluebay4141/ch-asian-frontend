"use client";

import { Fragment, useState } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";

import langBtn from "../public/img/lang-btn.png"
import menuBtn from "../public/img/menu-mobile.png"
import headerLogoMobile from "../public/img/header-logo-mobile.png"

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact-us"
    }
  ];

  const rightmenu = [
    {
      label: "Blog",
      href: "/blog"
    },

  ];

  const mobilemenu = [...leftmenu,...rightmenu];

  const [showMenu, setShowMenu] = useState(false)

  return (
    <Container>
      <nav className="flex items-center justify-between mx-5 sm:mx-17.5 mt-6.5 z-50 sm:sticky sm:py-2.5 pl-5.5 sm:px-7.5 rounded-full absolute inset-x-0" 
      style={{border: "0.5px solid rgba(78, 84, 102, 0.18)", background: "rgba(255, 255, 255, 0.44)", boxShadow: "3px 4px 36px 0px rgba(0, 0, 0, 0.05)", backdropFilter: "blur(2.5px)"}}>
        <Link href="/" className="relative">
          <Image src={headerLogoMobile} alt="" className="max-w-36 w-full max-h-14.5 h-full hidden sm:block" />
          <Image src={headerLogoMobile} alt="" className="w-25 h-10 sm:hidden" />
        </Link>

        <button className="h-15 px-7 flex items-center justify-center bg-hero-1 rounded-full sm:hidden" onClick={() => setShowMenu(cur => !cur)}>
          <Image src={menuBtn} alt="" />
        </button>

        <div className="items-center gap-10 hidden sm:flex">
          <a href="#services" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal">Services</a>
          <a href="#destinations" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal">Destinations</a>
          <Link href="/about" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal">About Us</Link>
          <Link href="/contact-us" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal">Contact Us</Link>
          <Link href="/blog" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal">Blog</Link>
          {/* <Link href="" className="p-2.5 border border-black rounded-en flex items-center gap-1.5">
            <span className="font-Helvetica text-sm text-black font-medium">EN</span>
            <Image src={langBtn} alt="" className="w-3 h-3" />
          </Link> */}
        </div>
      </nav>

      {showMenu && (
        <div className="fixed top-0 bottom-0 -right-full w-full inset-0 h-[100dvh] bg-white p-10 overflow-y-hidden" style={{zIndex: "5000000"}}>
          <div className="flex items-center justify-between">
            <Link href="/" className="relative" onClick={() => setShowMenu(false)}>
              <Image src={headerLogoMobile} alt="" className="w-25 h-10 sm:hidden" />
            </Link>
            <button className="text-2xl text-black" onClick={() => setShowMenu(false)}>
              X
            </button>
          </div>

          <div className="flex items-start flex-col gap-10 mt-25">
            <Link href="" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal" onClick={() => setShowMenu(false)}>Services</Link>
            <Link href="" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal" onClick={() => setShowMenu(false)}>Destinations</Link>
            <Link href="/about" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal" onClick={() => setShowMenu(false)}>About Us</Link>
            <Link href="/contact-us" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal" onClick={() => setShowMenu(false)}>Contact Us</Link>
            <Link href="/blog" className="font-Helvetica text-nav-link text-nav-link-bg leading-normal font-normal" onClick={() => setShowMenu(false)}>Blog</Link>
            {/* <Link href="" className="p-2.5 border border-black rounded-en flex items-center gap-1.5">
              <span className="font-Helvetica text-sm text-black font-medium">EN</span>
              <Image src={langBtn} alt="" className="w-3 h-3" />
            </Link> */}
          </div>
        </div>
      )}
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
