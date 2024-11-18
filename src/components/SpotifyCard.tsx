import { useState } from "react";
import { IoIosPlay, IoIosPause } from "react-icons/io";

type spotifyCarProps = {
  title: string;
  by: string;
  img: string;
};

export const SpotifyCard = ({ title, by, img }: spotifyCarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      className="w-[250px] min-h-[330px] hover:cursor-pointer rounded-md transition-all hover:bg-[#1f1f1f] p-3 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img className="rounded-md shadow-lg" src={img} alt="Card Image" />

        <button
          onClick={handlePlayPause}
          className={`absolute bottom-2 right-2 w-14 h-14 rounded-full bg-green-500 text-black flex items-center justify-center  ${
            isHovered || isPlaying ? "opacity-100" : "opacity-0"
          } `}
        >
          {isPlaying ? <IoIosPause size={30} /> : <IoIosPlay size={30} />}
        </button>
      </div>

      <div className="flex flex-col mt-1 items-start gap-1">
        <p className="text-white text-base hover:underline hover:cursor-pointer font-varela">
          {title}
        </p>
        <p className="text-[#b2b2b2] text-xs font-varela">{by}</p>
      </div>
    </div>
  );
};
