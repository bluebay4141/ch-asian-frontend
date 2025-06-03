import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function TravelSlider({ setShowGallery, images }) {
  const [mySwiper, setMySwiper] = useState({})

  function slideNext() {
    mySwiper.slideNext()
  }

  function slidePrev() {
    mySwiper.slidePrev()
  }

  return (
    <div className='fixed top-0 bottom-0 -right-full w-full inset-0 h-[100dvh] bg-transparent  p-14 overflow-y-hidden' style={{zIndex: "5000000", backdropFilter: "blur(8px)"}}>
      <button className='absolute top-4 right-4 h-6 w-6 rounded-full text-white bg-black text-xs' onClick={() => setShowGallery(false)}>X</button>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full rounded-[14px]"
        onSwiper={(swiper) => {
          setMySwiper(swiper)
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.image} alt="" className='w-full' />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='absolute top-1/2 transform -translate-y-1/2 left-3 h-8 w-8 flex items-center justify-center rounded-full text-white bg-black text-xs' onClick={slidePrev}>{leftIcon}</button>
      <button className='absolute top-1/2 transform -translate-y-1/2 right-3 h-8 w-8 flex items-center justify-center rounded-full text-white bg-black text-xs' onClick={slideNext}>{rightIcon}</button>
    </div>
  )
}

const leftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M12.666 8.88672L3.33268 8.88672" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13.5547L3.33333 8.88802L8 4.22135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

const rightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M3.33398 8.88672H12.6673" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 4.21875L12.6667 8.88542L8 13.5521" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

export default TravelSlider
