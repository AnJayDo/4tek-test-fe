/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Slider, { Settings as SliderSettings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props: any) {
  return (
    <button
      {...props}
      className={cn(props.className, "before:hidden", "drop-shadow-xl")}
    >
      <svg
        className="-translate-y-6"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.9833 3.33325H13.0166C6.94998 3.33325 3.33331 6.94992 3.33331 13.0166V26.9666C3.33331 33.0499 6.94998 36.6666 13.0166 36.6666H26.9666C33.0333 36.6666 36.65 33.0499 36.65 26.9833V13.0166C36.6666 6.94992 33.05 3.33325 26.9833 3.33325ZM24.65 20.8833L18.7666 26.7666C18.5166 27.0166 18.2 27.1333 17.8833 27.1333C17.5666 27.1333 17.25 27.0166 17 26.7666C16.5166 26.2833 16.5166 25.4833 17 24.9999L22 19.9999L17 14.9999C16.5166 14.5166 16.5166 13.7166 17 13.2333C17.4833 12.7499 18.2833 12.7499 18.7666 13.2333L24.65 19.1166C25.15 19.5999 25.15 20.3999 24.65 20.8833Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

function PrevArrow(props: any) {
  return (
    <button
      {...props}
      className={cn(props.className, "before:hidden", "drop-shadow-xl")}
    >
      <svg
        className="-translate-y-6"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.9833 3.33325H13.0166C6.94998 3.33325 3.33331 6.94992 3.33331 13.0166V26.9666C3.33331 33.0499 6.94998 36.6666 13.0166 36.6666H26.9666C33.0333 36.6666 36.65 33.0499 36.65 26.9833V13.0166C36.6666 6.94992 33.05 3.33325 26.9833 3.33325ZM22.9833 24.9999C23.4666 25.4833 23.4666 26.2833 22.9833 26.7666C22.7333 27.0166 22.4166 27.1333 22.1 27.1333C21.7833 27.1333 21.4666 27.0166 21.2166 26.7666L15.3333 20.8833C14.85 20.3999 14.85 19.5999 15.3333 19.1166L21.2166 13.2333C21.7 12.7499 22.8 12.7499 22.9833 13.2333C23.4666 13.7166 23.4666 14.5166 22.9833 14.9999L17.9833 19.9999L22.9833 24.9999Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default function Partners({ content }: { content: { partners?: any } }) {
  const partnerList = [
    {
      id: 0,
      src: "/images/partners/logo-1.png",
    },
    {
      id: 1,
      src: "/images/partners/logo-2.png",
    },
    {
      id: 2,
      src: "/images/partners/logo-3.png",
    },
    {
      id: 3,
      src: "/images/partners/logo-4.png",
    },
    {
      id: 4,
      src: "/images/partners/logo-5.png",
    },
    {
      id: 8,
      src: "/images/partners/logo-6.png",
    },
    {
      id: 6,
      src: "/images/partners/logo-7.png",
    },
  ];
  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "0px",
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="flex flex-col w-full h-auto font-montserrat">
      <div className={cn("w-full flex bg-[#F6F6F6]")}>
        <div className="max-w-[1460px] w-full flex flex-col gap-20 mx-auto py-[120px] z-10">
          <h1 className="text-[60px] font-black font-playfair text-black mx-auto">
            {content?.partners}
          </h1>
          <Slider {...settings}>
            {partnerList.map((partner) => (
              <div
                key={partner.id}
                className="aspect-[26/10] lg:aspect-[32/10] xl:aspect-[34/10] px-1.5 lg:px-[20px] xl:px-[40px] flex justify-center items-center"
              >
                <Image
                  src={partner.src}
                  width={520}
                  height={200}
                  alt={"Partner image " + partner.id}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
