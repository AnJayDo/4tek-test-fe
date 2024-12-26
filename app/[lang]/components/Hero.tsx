"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";
import Image from "next/image";
import SubscribeEmailInput from "./SubscribeEmailInput";

// Random component
const Completionist = () => <span>You are good to go!</span>;

export default function Hero({
  content,
}: {
  content: {
    hero?: any;
    navigations?: any;
    clock: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
}) {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="z-10 flex w-auto px-10 pt-4 pb-8 lg:pt-0 lg:pb-7 bg-white rounded-[21px] text-black gap-1 lg:gap-[52px] justify-center items-center font-playfair text-[36px] lg:text-[60px] font-black drop-shadow-xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div>{days}</div>
            <div className="font-montserrat font-bold text-[12px] lg:text-base">
              {content.clock.days}
            </div>
          </div>
          <div className="text-[40px] lg:text-[65px] font-normal flex items-center min-w-[16px]">
            :
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>{hours}</div>
            <div className="font-montserrat font-bold text-[12px] lg:text-base">
              {content.clock.hours}
            </div>
          </div>
          <div className="text-[40px] lg:text-[65px] font-normal flex items-center min-w-[16px]">
            :
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>{minutes}</div>
            <div className="font-montserrat font-bold text-[12px] lg:text-base">
              {content.clock.minutes}
            </div>
          </div>
          <div className="text-[40px] lg:text-[65px] font-normal flex items-center min-w-[16px]">
            :
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>{seconds}</div>
            <div className="font-montserrat font-bold text-[12px] lg:text-base">
              {content.clock.seconds}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full bg-[url(/images/mobile-hero-bg.png)] lg:bg-[url(/images/hero-bg.png)] bg-cover min-h-screen bg-bottom flex flex-col relative justify-center items-center">
      <div className="w-full max-w-[1460px] px-4 lg:px-0 flex flex-col justify-center items-center relative mx-auto gap-4 lg:min-h-screen">
        <h1 className="mt-[172px] lg:mt-0 font-playfair text-[40px] lg:text-[80px] font-black text-white leading-normal z-10 text-center">
          {content?.hero?.title}
        </h1>
        <Countdown date={Date.now() + 2658011000} renderer={renderer} />
        <p className="text-center w-full max-w-[560px] z-10 mt-10 lg:mt-20 font-montserrat text-[18px]">
          {content.hero.description}
        </p>
        <div className="mt-4 w-full max-w-[560px] z-10">
          <SubscribeEmailInput
            placeholder={content.hero.email_placeholder}
            theme={"white"}
          />
        </div>
        <Image
          className="hidden lg:flex absolute left-1/2 top-1/2 w-2/3 h-auto blur-lg -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm fill-[#210544] z-[1]"
          height={1000}
          width={1000}
          src={"/images/bg-blur.png"}
          alt={"Background blur"}
        />

        <Image
          className="flex lg:absolute left-0 bottom-0 w-full scale-100 -translate-y-10 translate-x-14 lg:scale-100 lg:w-[900px] lg:-translate-x-40"
          height={1000}
          width={1000}
          src={"/images/ong-tien-1.png"}
          alt={"Ong tien"}
        />
      </div>
    </div>
  );
}
