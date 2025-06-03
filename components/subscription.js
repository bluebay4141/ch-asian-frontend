import Image from "next/image"

import subscribeMobile from "../public/img/subscribe-mobile.png"
import subscribeImg from "../public/img/turtle_hatchery.webp"

function Subscription() {
  return (
      <section className="mt-14 px-0 sm:px-17.5 relative">
        <div className="hidden sm:block">
          <Image src={subscribeImg} alt="" className="w-full max-h-92.5 h-full rounded-2xl" />
        </div>

        <div className="block sm:hidden">
          <Image src={subscribeMobile} alt="" className="w-full h-full rounded-t-lang" />
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2 left-5 right-5 sm:left-35 sm:right-35">
          <h4 className="font-Helvetica text-mobile-subscription sm:text-subscription text-white font-medium w-full text-center leading-10 sm:leading-12">
            Subscribe to receive information, latest news and other enticing <span className="font-semibold">offers</span> from Asian travels.
          </h4>

          <div className="mt-9 sm:mt-8 grid grid-cols-1 sm:flex items-center gap-1.5 sm:gap-2.5 justify-center">
            <input type="email" className="h-13 p-5 rounded-lang text-base text-hero-3 font-light max-w-96 w-full" placeholder="Your Email Address" />
            <button className="py-4 px-5 bg-hero-1 rounded-lang font-Helvetica text-sm text-white font-bold">Subscribe</button>
          </div>
        </div>
      </section>
  )
}

export default Subscription
