import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import gallery1 from "../public/img/kalpitiya.webp"
import gallery2 from "../public/img/nuwara-eliya.webp"
import gallery3 from "../public/img/sigiriya.webp"
import gallery4 from "../public/img/trinco.webp"
import gallery5 from "../public/img/whale-watching.webp"
import gallery6 from "../public/img/yapahuwa.webp"
import gallery7 from "../public/img/bay.webp"
import gallery8 from "../public/img/bird_watching.webp"
import gallery9 from "../public/img/dambulla.webp"
import gallery10 from "../public/img/fishing.webp"
import gallery11 from "../public/img/kadadora.webp"
import gallery12 from "../public/img/Kandy.webp"
import gallery13 from "../public/img/lake.webp"
import gallery14 from "../public/img/nine_arch.webp"
import gallery15 from "../public/img/point.webp"
import gallery16 from "../public/img/road.webp"
import gallery17 from "../public/img/sigiriya_new.webp"
import gallery18 from "../public/img/sunset.webp"
import gallery19 from "../public/img/surf.webp"
import gallery20 from "../public/img/yala.webp"

import customer1 from "../public/img/hc-01-min.png"
import customer2 from "../public/img/hc-02-min.png"
import customer3 from "../public/img/hc-03-min.png"
import customer4 from "../public/img/hc-04-min.png"
import customer5 from "../public/img/hc-05-min.png"
import customer6 from "../public/img/hc-06-min.png"
import customer7 from "../public/img/hc-07-min.png"
import customer8 from "../public/img/hc-08-min.png"
import customer9 from "../public/img/hc-09-min.png"
import customer10 from "../public/img/hc-10-min.png"
import customer11 from "../public/img/hc-11-min.png"
import customer12 from "../public/img/hc-12-min.png"
import customer13 from "../public/img/hc-13-min.png"
import customer14 from "../public/img/hc-14-min.png"
import customer15 from "../public/img/hc-15-min.png"
import customer16 from "../public/img/hc-16-min.png"
import customer17 from "../public/img/hc-17-min.png"
import customer18 from "../public/img/hc-18-min.png"
import customer19 from "../public/img/hc-19-min.png"
import customer20 from "../public/img/hc-20-min.png"
import customer21 from "../public/img/hc-21-min.png"
import customer22 from "../public/img/hc-22-min.png"
import customer23 from "../public/img/hc-23-min.png"
import customer24 from "../public/img/hc-24-min.png"

// Import Swiper styles
import 'swiper/css';
import TravelSlider from './TravelSlider';

function Services({ showText = true }) {
  const [showGallery, setShowGallery] = useState(false)

  return (
    <>
      {showText && (
        <section className="px-5 sm:px-17.5 mb-8 sm:mb-13">
          <div className="mb-6 text-center sm:text-start">
            <h4 className="font-Helvetica text-hero-text-1 text-hero-1 font-light mb-4">A Beautiful Island Awaits</h4>
            <div className="flex items-start">
              <h4 className="font-Helvetica text-mobile-vision leading-[43px] sm:leading-none sm:text-5xl font-medium text-hero-2 w-full sm:w-1/2">
                Traveler’s Adventures Through The Lens
              </h4>
              <p className="font-Helvetica text-hero-text-1 text-hero-3 font-light leading-7 w-1/2 hidden sm:block">
                Indulge your wanderlust and immerse yourself in the breathtaking beauty of Sri Lanka. Discover the allure of Sri Lanka one frame at a time.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="mb-22.5 sm:mb-16">
        
      <div className='hidden sm:block'>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          direction={"horizontal"}
          mousewheel={false}
        >
          {showText && images.map((img, index) => (
            <SwiperSlide key={index} className={`${index === 0 ? "-ml-60" : ""} ${showText ? "cursor-pointer" : ""}`} onClick={() => {
              if(showText) setShowGallery(true)
            }}>
              <Image src={img.image} className="rounded-3xl h-auto" alt="" />
            </SwiperSlide>
          ))}

          {!showText && imagesCustomers.map((img, index) => (
            <SwiperSlide key={index} className={`${index === 0 ? "-ml-60" : ""} ${showText ? "cursor-pointer" : ""}`} onClick={() => { 
              if(showText) setShowGallery(true)
            }}>
              <Image src={img.image} className="rounded-3xl h-auto" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {showGallery && <TravelSlider setShowGallery={setShowGallery} images={!showText ? imagesCustomers : images} publicImage={false} />}

      <div className='sm:hidden'>
        <Swiper
          slidesPerView={2}
          spaceBetween={25}
          direction={"horizontal"}
          mousewheel={false}
        >
          {showText && images.map((img, index) => (
            <SwiperSlide key={index} className={`${index === 0 ? "-ml-30" : ""}`}>
              <Image src={img.image} className="rounded-3xl h-auto" alt="" />
            </SwiperSlide>
          ))}

          {!showText && imagesCustomers.map((img, index) => (
            <SwiperSlide key={index} className={`${index === 0 ? "-ml-30" : ""}`}>
              <Image src={img.image} className="rounded-3xl h-auto" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

        
        {showText && (
          <p className="font-Helvetica text-base sm:text-hero-text-1 text-hero-3 font-light leading-7 px-5 text-center mt-8 sm:hidden">
          Journey through the lens of our travelers and witness the world unfold in captivating snapshots. Journey through the lens of our travelers and witness the world unfold.
          </p>
        )}
        {/* <img src="https://www.tripsavvy.com/thmb/20TsznxhuzvNFmtIkffrdOeVQm4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aerial-view-of-sigiriya-rock-at-misty-morning--sri-lanka--drone-photo--1129567907-a6628ce7d636462f9a0e0361a3808178.jpg" className="rounded-3xl" /> */}
      </section>
    </>
  )
}

const images = [
  {image: gallery1},
  {image: gallery2},
  {image: gallery3},
  {image: gallery4},
  {image: gallery5},
  {image: gallery6},
  {image: gallery7},
  {image: gallery8},
  {image: gallery9},
  {image: gallery10},
  {image: gallery11},
  {image: gallery12},
  {image: gallery13},
  {image: gallery14},
  {image: gallery15},
  {image: gallery16},
  {image: gallery17},
  {image: gallery18},
  {image: gallery19},
  {image: gallery20},
]

const imagesCustomers = [
  {image: customer1},
  {image: customer2},
  {image: customer3},
  {image: customer4},
  {image: customer5},
  {image: customer6},
  {image: customer7},
  {image: customer8},
  {image: customer9},
  {image: customer10},
  {image: customer11},
  {image: customer12},
  {image: customer13},
  {image: customer14},
  {image: customer15},
  {image: customer16},
  {image: customer17},
  {image: customer18},
  {image: customer19},
  {image: customer20},
  {image: customer21},
  {image: customer22},
  {image: customer23},
  {image: customer24}
]

export default Services
