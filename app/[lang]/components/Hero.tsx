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
        <div className="z-10 flex w-auto px-10 pb-7 bg-white rounded-[21px] text-black gap-[52px] justify-center items-center font-playfair text-[60px] font-black drop-shadow-xl">
          <div className="flex flex-col justify-center items-center text-center">
            <div>{days}</div>
            <div className="font-montserrat font-bold text-base">
              {content.clock.days}
            </div>
          </div>
          <div className="text-[65px] font-normal flex items-center">:</div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>{hours}</div>
            <div className="font-montserrat font-bold text-base">
              {content.clock.hours}
            </div>
          </div>
          <div>:</div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>{minutes}</div>
            <div className="font-montserrat font-bold text-base">
              {content.clock.minutes}
            </div>
          </div>
          <div>:</div>
          <div className="flex flex-col justify-center items-center text-center">
            <div>{seconds}</div>
            <div className="font-montserrat font-bold text-base">
              {content.clock.seconds}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full bg-[url(/images/hero-bg.png)] bg-cover min-h-screen bg-bottom flex flex-col relative justify-center items-center">
      <div className="w-full max-w-[1460px] flex flex-col justify-center items-center relative mx-auto gap-4 h-screen">
        <h1 className="font-playfair text-[80px] font-black text-white leading-normal z-10">
          {content?.hero?.title}
        </h1>
        <Countdown date={Date.now() + 2658011000} renderer={renderer} />
        <p className="text-center w-full max-w-[560px] z-10 mt-20 font-montserrat text-[18px]">
          {content.hero.description}
        </p>
        <div className="mt-4 w-full max-w-[560px] z-10">
          <SubscribeEmailInput
            placeholder={content.hero.email_placeholder}
            theme={"white"}
          />
        </div>
        <Image
          className="absolute left-1/2 top-1/2 w-2/3 h-auto blur-md -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm fill-[#210544] z-[1]"
          height={1000}
          width={1000}
          src={"/images/bg-blur.png"}
          alt={"Background blur"}
        />

        <Image
          className="absolute left-0 bottom-0 w-[900px] -translate-x-40"
          height={1000}
          width={1000}
          src={"/images/ong-tien-1.png"}
          alt={"Ong tien"}
        />
      </div>
    </div>
  );
}
