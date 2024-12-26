import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Games({
  content,
}: {
  content: {
    games: {
      title: string;
      description: string;
    };
  };
}) {
  const gameList = [
    {
      id: 0,
      title: "E-Space",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-0.png",
    },
    {
      id: 1,
      title: "Pirates",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-1.png",
    },
    {
      id: 2,
      title: "Magic tree",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-2.png",
    },
    {
      id: 3,
      title: "Kingland",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-3.png",
    },
    {
      id: 4,
      title: "Witch Party",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-4.png",
    },
    {
      id: 5,
      title: "Aborigines",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-5.png",
    },
    {
      id: 6,
      title: "The Last Game",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-6.png",
    },
    {
      id: 7,
      title: "Rocky",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-7.png",
    },
    {
      id: 8,
      title: "Cinderella",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-8.png",
    },
    {
      id: 9,
      title: "G-Dragon",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-9.png",
    },
    {
      id: 10,
      title: "Blue Fire",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-10.png",
    },
    {
      id: 11,
      title: "Egypt Game",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      src: "/images/games/Card-games-11.png",
    },
  ];
  return (
    <section className="flex flex-col w-full h-auto font-montserratbg-[#F6F6F6] py-[128px]">
      <div className={cn("w-full flex")}>
        <div className="max-w-[1460px] w-full flex flex-col gap-4 mx-auto z-10 mb-16">
          <h1 className="text-[60px] font-black font-playfair text-black mx-auto">
            {content.games.title}
          </h1>
          <p className="mx-auto w-full max-w-[860px] text-center font-montserrat text-[14px] text-[#757575]">
            {content.games.description}
          </p>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-2 lg:grid-cols-4 pb-20 px-20">
        {[0, 1, 2, 3].map((col, idx) => (
          <div
            className={cn(
              "flex flex-col gap-8",
              idx % 2 === 1
                ? "lg:translate-y-20 row-start-2 lg:row-start-auto"
                : "lg:translate-y-0",
              idx === 2 || idx === 3 ? "translate-y-20" : ""
            )}
            key={"game-col-" + col}
          >
            {gameList.slice(col * 3, col * 3 + 3).map((game) => (
              <div
                key={"game-card-" + game.id}
                className={cn(
                  "relative w-full aspect-[41/56] flex justify-center items-center rounded-[10px] overflow-hidden drop-shadow-md"
                )}
              >
                <div
                  className={cn(
                    "z-10 w-full aspect-[41/56] top-0 left-0 absolute flex flex-col items-start justify-end px-8 py-8 font-montserrat text-white",
                    "bg-gradient-to-t from-[#0009E180] to-[#00000000] to-[50%]"
                  )}
                >
                  <h2 className="font-bold text-[48px] leading-[60px]">
                    {game.title}
                  </h2>
                  <p className="text-[14px] leading-[20px]">
                    {game.description}
                  </p>
                </div>
                <Image
                  height={560}
                  width={410}
                  className="object-fit w-full h-full z-0"
                  src={game.src}
                  alt={game.title + " image"}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
