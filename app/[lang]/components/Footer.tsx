import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Logo } from "./Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LocationIcon from "./icons/LocationIcon";
import MobileIcon from "./icons/MobileIcon";
import SubscribeEmailInput from "./SubscribeEmailInput";

export default function Footer({ content }: { content: { footer: any } }) {
  const SocialMedia = [
    {
      id: "footer-x-sm-link",
      Icon: TwitterOutlined,
      href: "https://x.com/",
    },
    {
      id: "footer-fb-sm-link",
      Icon: FacebookFilled,
      href: "https://www.facebook.com/",
    },
    {
      id: "footer-ld-sm-link",
      Icon: LinkedinFilled,
      href: "https://www.linkedin.com/",
    },
  ];
  return (
    <footer className="flex flex-col w-full h-auto font-montserrat text-white">
      <div
        className={cn(
          "w-full flex flex-wrap bg-[url('/images/footer-bg.jpeg')] bg-cover bg-center bg-no-repeat min-h-[466px] relative",
          "before:flex before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0 before:bg-black/80",
          "after:flex after:absolute after:z-0 after:w-full after:h-full after:top-0 after:left-0 after:from-[#000AFF] after:to-black/0 after:bg-gradient-to-b after:to-[100%] after:opacity-50"
        )}
      >
        <div className="max-w-[1460px] w-full flex gap-10 mx-auto py-[104px] z-10">
          <div className="flex flex-col gap-10 mr-auto ml-0">
            <Logo />
            <div className="flex gap-10">
              {SocialMedia.map((sm) => (
                <Link
                  key={sm.id}
                  href={sm.href}
                  target="_blank"
                  className="h-10 w-10 flex justify-center items-center"
                >
                  <sm.Icon className="text-[31.25px]" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-[410px] flex flex-col gap-10">
            <div className="text-2xl">
              <strong>{content?.footer?.address}</strong>
            </div>
            <div className="flex gap-2 text-[14px]">
              <div className="h-10 w-10 flex justify-center items-center">
                <LocationIcon />
              </div>
              <div className="flex flex-col gap-3 w-full justify-center">
                <p>{content?.footer?.address_1}</p>
                <p>{content?.footer?.address_2}</p>
              </div>
            </div>

            <div className="flex gap-2 text-[14px]">
              <div className="h-10 w-10 flex justify-center items-center">
                <MobileIcon />
              </div>
              <div className="flex flex-col gap-3 w-full justify-center">
                <p>{content?.footer?.phone}</p>
              </div>
            </div>
          </div>
          <div className="w-[410px] flex flex-col gap-10">
            <div className="text-2xl">
              <strong>{content?.footer?.subscribe}</strong>
            </div>
            <div className="w-full flex flex-col gap-3 text-[14px]">
              <p>{content?.footer?.subscribe_copy}</p>
              <SubscribeEmailInput
                placeholder={content?.footer?.email_placeholder}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-white bg-black h-20 text-[18px] font-montserrat">
        2017 Copyright. Policy.
      </div>
    </footer>
  );
}
