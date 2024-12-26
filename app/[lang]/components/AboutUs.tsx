import Image from "next/image";
import CalendarClockIcon from "./icons/CalendarClockIcon";
import DesignIcon from "./icons/DesignIcon";
import TeamIcon from "./icons/TeamIcon";

export default function AboutUs({
  content,
}: {
  content: {
    about: {
      about_us: string;
      description: string;
      players: string;
      games: string;
      features: { id: string; title: string; description: string }[];
    };
  };
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-[128px] gap-[128px]">
      <div className="grid grid-cols-2 gap-10 w-full max-w-[1160px]">
        <div className="flex flex-col w-full gap-10">
          <h1 className="text-[60px] font-black font-playfair text-black">
            {content.about.about_us}
          </h1>
          <p className="w-full max-w-[860px] font-montserrat text-[14px] text-[#757575]">
            {content.about.description}
          </p>
          <div className="flex flex-col gap-0 mt-auto mb-0">
            <div className="text-[80px] font-bold font-montserrat text-[#079BEE]">
              600<span className="text-[40px]">M</span>+
            </div>
            <p className="text-black font-montserrat font-bold text-2xl">
              {content.about.players}
            </p>
          </div>
          <div className="flex flex-col gap-0">
            <div className="text-[80px] font-bold font-montserrat text-[#079BEE]">
              135+
            </div>
            <p className="text-black font-montserrat font-bold text-2xl">
              {content.about.games}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10 px-[75px] py-[113px] bg-[#EEEEEE]">
          {content.about.features.map((feature) => (
            <div className="flex w-full gap-6" key={feature.id}>
              <div className="h-[50px] min-w-[50px] rounded-full bg-[#E3FCFF] flex justify-center items-center">
                {feature.id === "design" ? (
                  <DesignIcon />
                ) : feature.id === "team" ? (
                  <TeamIcon />
                ) : (
                  <CalendarClockIcon />
                )}
              </div>
              <div className="w-full flex flex-col gap-2">
                <h2 className="font-bold text-2xl text-black">
                  {feature.title}
                </h2>
                <p className="text-[14px] text-[#757575]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-end items-center relative w-full max-w-[1160px]">
        <Image
          className="z-10 animate-fly"
          width={533}
          height={437}
          src={"/images/witch.png"}
          alt="Witch image"
        />
        <Image
          className="w-full -mt-[100px] z-0"
          width={1160}
          height={428}
          src={"/images/pin-map.png"}
          alt="Pin map image"
        />
      </div>
    </div>
  );
}
