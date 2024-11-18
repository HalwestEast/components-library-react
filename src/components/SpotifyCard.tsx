import { useState } from "react";
import flowerButterfly from "../assets/flower-butterfly.jpg";
import { IoIosPlay, IoIosPause } from "react-icons/io";

export const SpotifyCard = () => {
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
        <img
          className="rounded-md shadow-lg"
          src={flowerButterfly}
          alt="Card Image"
        />

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
          For You
        </p>
        <p className="text-[#b2b2b2] text-xs font-varela">By Nobody</p>
      </div>
    </div>
  );
};
