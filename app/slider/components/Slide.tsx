"use client";
import Image from "next/image";

interface slideImage {
  slider: any;
  className?: string;
}
export default function Slide({ slider, className }: slideImage) {
  return (
    <div className="swiper-slide">
      <Image
        src={slider}
        width={1000}
        height={600}
        alt="image"
        loading="lazy"
        className={`object-cover h-full  rounded-2xl ${className}`}
      />
      {/* <div className="swiper-lazy-preloader"></div> */}
    </div>
  );
}
