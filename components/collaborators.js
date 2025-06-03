import Image from "next/image"

import logoSetIcon from "../public/img/logo-set.svg"
import sponsor from "../public/img/sponsor.png"

import Marquee from "react-fast-marquee";

function Collaborators() {
  return (
    <section className="sm:mt-21 flex flex-col items-center sm:pt-0">
      <h4 className="font-Helvetica text-2xl sm:text-testimonials text-hero-2 font-normal leading-7 sm:leading-8 text-center sm:text-start px-5 sm:px-0">
        Our Collaborators In Crafting Unforgettable Journeys
      </h4>

      <div className="sm:hidden">
        <Marquee direction="right" speed={100}>
          <Image src={logoSetIcon} alt="" />
        </Marquee>
      </div>
      
      <Image src={logoSetIcon} alt="" className="hidden sm:block" />
      {/* <Image src={sponsor} alt="" className="w-full sm:hidden" /> */}
  </section>
  )
}

export default Collaborators
