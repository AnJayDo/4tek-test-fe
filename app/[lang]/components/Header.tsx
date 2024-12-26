"use client";

import { Locale } from "@/i18n-config";
import Link from "next/link";
import { Logo } from "./Logo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import CheckIcon from "./icons/CheckIcon";
import { cn } from "@/lib/utils";

export default function Header({
  content,
  lang,
}: {
  content: {
    navigations: any;
    languages: { english: string; vietnamese: string };
  };
  lang: Locale;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [isOpenMobileLang, setIsOpenMobileLang] = useState(false);

  const navigationLinks = [
    {
      href: "#about-us",
      label: content.navigations.about_us,
    },
    {
      href: "#games",
      label: content.navigations.games,
    },
    {
      href: "#partners",
      label: content.navigations.partners,
    },
    {
      href: "#contact",
      label: content.navigations.contact,
    },
  ];
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonMobileRef = useRef<HTMLButtonElement>(null);

  useClickOutside(buttonRef, () => setIsOpen(false));
  useClickOutside(buttonMobileRef, () => setIsOpenMobileLang(false));

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <div className="absolute w-full top-0 left-0 flex justify-center items-center z-20">
      <div className="max-w-[1920px] w-full mx-auto px-4 py-12 lg:px-20 flex items-center h-[104px] lg:py-5">
        <Link href={"/"} className="ml-0 mr-auto">
          <Logo className="w-[109px] h-[64px]" />
        </Link>
        <div className="w-full max-w-[710px] justify-between hidden lg:flex">
          {navigationLinks.map((link) => (
            <Link
              className="font-montserrat text-[14px] font-bold uppercase flex items-center"
              key={link.href.replace("#", "header-link-")}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex gap-1 items-center"
          >
            {lang === "en" ? (
              <Image
                className="h-[33px] w-[33px]"
                src={"/images/flags/us.png"}
                height={50}
                width={50}
                alt="US flag"
              />
            ) : (
              <Image
                className="h-[33px] w-[33px]"
                src={"/images/flags/vi.png"}
                height={50}
                width={50}
                alt="VI flag"
              />
            )}
            <svg
              className={cn(isOpen ? "rotate-180" : "")}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_0_1816)">
                <path d="M7 10L12 15L17 10H7Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_0_1816">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {isOpen && (
              <div className="flex flex-col min-w-[156px] w-max rounded-lg bg-white absolute bottom-0 right-0 text-black font-bold font-montserrat text-[10px] translate-y-full">
                <div
                  onClick={() => changeLanguage("vi")}
                  className="flex gap-2 items-center hover:bg-[#C4C4C4]/20 px-2 rounded-lg"
                >
                  <div className="w-6">{lang === "vi" && <CheckIcon />}</div>
                  <div className="flex h-10 justify-start items-center gap-2">
                    <Image
                      className="h-[33px] w-[33px]"
                      src={"/images/flags/vi.png"}
                      height={50}
                      width={50}
                      alt="VI flag"
                    />
                    <div>{content.languages.vietnamese}</div>
                  </div>
                </div>
                <hr className="border border-[#C4C4C4] mx-2"></hr>
                <div
                  onClick={() => changeLanguage("en")}
                  className="flex gap-2 items-center hover:bg-[#C4C4C4]/20 px-2 rounded-lg"
                >
                  <div className="w-6">{lang === "en" && <CheckIcon />}</div>
                  <div className="flex h-10 justify-start items-center gap-2">
                    <Image
                      className="h-[33px] w-[33px]"
                      src={"/images/flags/us.png"}
                      height={50}
                      width={50}
                      alt="US flag"
                    />
                    <div>{content.languages.english}</div>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
        <button
          onClick={() => setIsOpenMobileNav(true)}
          className="bg-transparent flex justify-center items-center lg:hidden"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 12.9167H5C4.31667 12.9167 3.75 12.3501 3.75 11.6667C3.75 10.9834 4.31667 10.4167 5 10.4167H35C35.6833 10.4167 36.25 10.9834 36.25 11.6667C36.25 12.3501 35.6833 12.9167 35 12.9167Z"
              fill="white"
            />
            <path
              d="M35 21.25H5C4.31667 21.25 3.75 20.6833 3.75 20C3.75 19.3167 4.31667 18.75 5 18.75H35C35.6833 18.75 36.25 19.3167 36.25 20C36.25 20.6833 35.6833 21.25 35 21.25Z"
              fill="white"
            />
            <path
              d="M35 29.5833H5C4.31667 29.5833 3.75 29.0166 3.75 28.3333C3.75 27.6499 4.31667 27.0833 5 27.0833H35C35.6833 27.0833 36.25 27.6499 36.25 28.3333C36.25 29.0166 35.6833 29.5833 35 29.5833Z"
              fill="white"
            />
          </svg>
        </button>
        <div
          className={cn(
            "fixed top-0 left-0 transition-all duration-300 bg-white text-black w-screen h-screen translate-x-full px-4 lg:hidden flex flex-col",
            isOpenMobileNav ? "translate-x-0" : ""
          )}
        >
          <div className="flex px-4 py-12 lg:px-20 justify-between">
            <button
              ref={buttonMobileRef}
              onClick={() => setIsOpenMobileLang(!isOpen)}
              className="relative flex gap-1 h-[40px] rounded-lg border border-[#AFAFAF] hover:brightness-90 justify-center items-center w-[80px]"
            >
              {lang === "en" ? (
                <Image
                  className="h-[27px] w-[27px]"
                  src={"/images/flags/us.png"}
                  height={50}
                  width={50}
                  alt="US flag"
                />
              ) : (
                <Image
                  className="h-[27px] w-[27px]"
                  src={"/images/flags/vi.png"}
                  height={50}
                  width={50}
                  alt="VI flag"
                />
              )}
              <svg
                className={cn(isOpen ? "rotate-180" : "")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_1816)">
                  <path d="M7 10L12 15L17 10H7Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_0_1816">
                    <rect width="24" height="24" fill="black" />
                  </clipPath>
                </defs>
              </svg>
              {isOpenMobileLang && (
                <div className="flex flex-col min-w-[156px] w-max rounded-lg bg-white absolute -bottom-2 left-0 border border-[#AFAFAF] text-black font-bold font-montserrat text-[10px] translate-y-full">
                  <div
                    onClick={() => changeLanguage("vi")}
                    className="flex gap-2 items-center hover:bg-[#C4C4C4]/20 px-2 rounded-lg"
                  >
                    <div className="w-6">{lang === "vi" && <CheckIcon />}</div>
                    <div className="flex h-10 justify-start items-center gap-2">
                      <Image
                        className="h-[33px] w-[33px]"
                        src={"/images/flags/vi.png"}
                        height={50}
                        width={50}
                        alt="VI flag"
                      />
                      <div>{content.languages.vietnamese}</div>
                    </div>
                  </div>
                  <hr className="border border-[#C4C4C4] mx-2"></hr>
                  <div
                    onClick={() => changeLanguage("en")}
                    className="flex gap-2 items-center hover:bg-[#C4C4C4]/20 px-2 rounded-lg"
                  >
                    <div className="w-6">{lang === "en" && <CheckIcon />}</div>
                    <div className="flex h-10 justify-start items-center gap-2">
                      <Image
                        className="h-[33px] w-[33px]"
                        src={"/images/flags/us.png"}
                        height={50}
                        width={50}
                        alt="US flag"
                      />
                      <div>{content.languages.english}</div>
                    </div>
                  </div>
                </div>
              )}
            </button>

            <button
              onClick={() => setIsOpenMobileNav(false)}
              className="bg-transparent flex justify-center items-center lg:hidden"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7484 15.0002L29.4298 3.31823C30.1901 2.55836 30.1901 1.32976 29.4298 0.569899C28.67 -0.189966 27.4414 -0.189966 26.6816 0.569899L14.9998 12.2519L3.31842 0.569899C2.55822 -0.189966 1.33 -0.189966 0.570154 0.569899C-0.190051 1.32976 -0.190051 2.55836 0.570154 3.31823L12.2516 15.0002L0.570154 26.6822C-0.190051 27.4421 -0.190051 28.6707 0.570154 29.4305C0.948833 29.8096 1.44674 30 1.94429 30C2.44184 30 2.93939 29.8096 3.31842 29.4305L14.9998 17.7486L26.6816 29.4305C27.0606 29.8096 27.5582 30 28.0557 30C28.5533 30 29.0508 29.8096 29.4298 29.4305C30.1901 28.6707 30.1901 27.4421 29.4298 26.6822L17.7484 15.0002Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          {navigationLinks.map((link, idx) => (
            <Link
              className={cn(
                "font-montserrat text-[14px] font-bold uppercase flex items-center justify-center py-6 w-full text-center",
                idx + 1 < navigationLinks.length
                  ? "border-b border-b-[#EEEEEE]"
                  : ""
              )}
              key={link.href.replace("#", "header-link-mobile-")}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
