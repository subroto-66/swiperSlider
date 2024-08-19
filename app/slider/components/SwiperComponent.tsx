"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../style/SwiperSlider.css";
import Slide from "./Slide";

interface slider {
  sliders?: any;
}

const SwiperComponent = ({ sliders }: slider) => {
  return (
    <div className="relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        initialSlide={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,

          dynamicBullets: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 90,
          depth: 100,
          slideShadows: true,
        }}
        breakpoints={{
          0: {
            // Apply this for all screens
            slidesPerView: 2,
            coverflowEffect: { modifier: 1 },
          },
          640: {
            slidesPerView: 2,
            coverflowEffect: { modifier: 2 },
          },
          768: {
            slidesPerView: 2,
            coverflowEffect: { modifier: 3 },
          },
          1024: {
            slidesPerView: 2,
            coverflowEffect: { modifier: 3 },
          },
          1280: {
            slidesPerView: 3,
            coverflowEffect: { modifier: 4 },
          },
          1560: {
            slidesPerView: 3,
            coverflowEffect: { modifier: 4 },
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {sliders?.map((slider: any, index: number) => (
          <SwiperSlide key={index} className="w-7xl mx-auto">
            <Slide
              slider={slider}
              className="h-80 w-[32rem] mx-auto select-none"
            />
          </SwiperSlide>
        ))}
        {/* Bullet Pagination */}
        <div className="swiper-pagination absolute left-1/2 transform -translate-x-1/2 bottom-4"></div>
        {/* Custom Arrow Buttons */}
        <div className="w-full absolute bottom-[45%]">
          <div className="flex justify-between custom-arrow px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 2xl:px-80">
            <span className="swiper-button-prev z-10 border-[#F91E4E] border px-4 py-2 cursor-pointer">
              <FaChevronLeft className="text-2xl text-[#F91E4E]" />
            </span>
            <span className="swiper-button-next z-10 border border-[#F91E4E] px-4 py-2 cursor-pointer">
              <FaChevronRight className="text-2xl text-[#F91E4E]" />
            </span>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
