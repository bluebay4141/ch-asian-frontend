import Image from "next/image"

import testimonialsImg from "../public/img/bg-testimonials.png"
import { useState } from "react"

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
      <section className="relative overflow-y-hidden bg-review hidden sm:block">
        <div>
          <Image src={testimonialsImg} alt="" className="w-full h-84.5" />
        </div>
        
        <div className="grid grid-cols-2 gap-52 absolute top-1/2 left-17.5 right-25 transform -translate-y-1/2 inset-x-0">
          <div>
            <h4 className="font-Helvetica text-hero-text-1 text-white font-light mb-4">Testimonials</h4>
            <h2 className="font-Helvetica text-5xl font-medium text-hero-2 max-w-135 w-full">What People Say About Us</h2>
            <div className="flex items-center gap-2.5 mt-7">
              {testimonials.map((_, index) => <TestimonialsSlider key={index} index={index} currentTestimonial={currentTestimonial} setCurrentTestimonial={setCurrentTestimonial} />)}
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col items-center shadow-xl rounded-3xl bg-white z-50 sticky">
              <div className="w-full py-7.5 pl-10 pr-22.5">
                <p className="font-Helvetica text-base text-hero-3 font-light mb-4 leading-6" style={{color: "rgba(0, 0, 0, 0.69)"}}>
                  {testimonials.at(currentTestimonial).title}
                </p>

                <div className="flex items-center justify-between">
                  <p className="flex flex-col">
                    <span className="font-Helvetica text-hero-text-1 text-black font-medium">{testimonials.at(currentTestimonial).userName}</span>
                    <span className="font-Helvetica text-base text-black font-normal">{testimonials.at(currentTestimonial).job}</span>
                  </p>

                  <div className="flex items-center pr-10">
                    {starIcon} {starIcon} {starIcon} {starIcon} {starIcon}
                  </div>
                </div>
                
                <img src={testimonials.at(currentTestimonial).profile} alt="" className="rounded-full h-30 w-30 absolute z-50 -bottom-[40px] -right-[45px]" />
              </div>
            </div>

            <div className="flex flex-col items-center shadow-xl rounded-3xl bg-box absolute top-10 left-5 -right-4">
              <div className="w-full py-7.5 pl-10 pr-22.5 opacity-0">
                <p className="font-Helvetica text-base text-hero-3 font-light mb-4 leading-6" style={{color: "rgba(0, 0, 0, 0.69)"}}>
                  {`"CH`} Asian Holidays is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable
                </p>

                <div className="flex items-center justify-between">
                  <p className="flex flex-col">
                    <span className="font-Helvetica text-hero-text-1 text-black font-medium">Thomas Wagon</span>
                    {/* <span className="font-Helvetica text-base text-black font-normal">Solo traveler</span> */}
                  </p>

                  <div className="flex items-center pr-10">
                    {starIcon} {starIcon} {starIcon} {starIcon} {starIcon}
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

const testimonials = [
  {
    title: "“CH Asian Holidays is recognized as one of the finest travel agencies in the world. When it came to planning a trip, I found them to be dependable.”",
    userName: "Thomas Wagon",
    job: "Solo traveler",
    profile: "https://pics.craiyon.com/2023-10-22/99d3246491954754a58b767b247a94d3.webp"
  },
  {
    title: "“CH Asian Holidays is recognized as one of the finest travel agencies in the world. When it came to planning a trip, I found them to be dependable.”",
    userName: "David Johnson",
    job: "Solo traveler",
    profile: "https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
  },
  {
    title: "“CH Asian Holidays is recognized as one of the finest travel agencies in the world. When it came to planning a trip, I found them to be dependable.”",
    userName: "David Rock",
    job: "Solo traveler",
    profile: "https://pics.craiyon.com/2023-06-20/b8a4a5dc74ba46baace46751a0f843af.webp"
  }
]

const starIcon = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
<path d="M11.1338 0L13.6812 7.83986H21.9245L15.2555 12.6852L17.8028 20.525L11.1338 15.6797L4.46487 20.525L7.01219 12.6852L0.343213 7.83986H8.58652L11.1338 0Z" fill="#FFC907"/>
</svg>

export default Testimonials

function TestimonialsSlider({index, currentTestimonial, setCurrentTestimonial}) {
  return <div className={`w-5 h-5 rounded-full cursor-pointer ${currentTestimonial === index ? "bg-hero-2" : "bg-white"}`} onClick={() => setCurrentTestimonial(index)}></div>
}