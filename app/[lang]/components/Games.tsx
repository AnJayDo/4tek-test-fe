import { cn } from "@/lib/utils";
// import Image from "next/image";

export default function Partners({ lang = "en" }) {
  console.log(lang);
  return (
    <section className="flex flex-col w-full h-auto font-montserrat">
      <div className={cn("w-full flex bg-[#F6F6F6]")}>
        <div className="max-w-[1460px] w-full flex flex-col gap-20 mx-auto py-[120px] z-10">
          <h1 className="text-[60px] font-black font-playfair text-black mx-auto">
            Our Partners
          </h1>
        </div>
      </div>
    </section>
  );
}
