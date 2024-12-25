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

  useClickOutside(buttonRef, () => setIsOpen(false));

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <div className="absolute w-full top-0 left-0 flex justify-center items-center z-20">
      <div className="max-w-[1920px] w-full mx-auto px-20 flex items-center h-[104px] py-5">
        <Link href={"/"} className="ml-0 mr-auto">
          <Logo className="w-[109px] h-[64px]" />
        </Link>
        <div className="w-full max-w-[710px] justify-between flex">
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
      </div>
    </div>
  );
}
