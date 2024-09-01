import Image from "next/image";
import Hero from "./hero";
import HomeBG from "./home-bg";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import workspaceImg from "@/public/res/image/workspace.jpg";
import CarieerSec from "./carieer";
import ExperienceSec from "./experience";
import LatestProjectsSec from "./latest-projects";

function HomePage() {
  return (
    <div className="relative w-full">
      <div className=" absolute h-full w-full z-0">
        <HomeBG />
      </div>
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        <div className="container lg:h-[calc(100vh-64px)] h-lvh">
          <Hero />
        </div>
        <div className="container flex flex-col justify-center items-center w-full bg-white">
          <div className="w-full h-[64px] lg:flex hidden ">
            <div className="h-full w-full bg-white"></div>
            <div className="h-full aspect-square bg-blue-950 flex justify-center items-center p-4 text-white">
              <ArrowDownIcon />
            </div>
          </div>
          <div className="w-full">
            <CarieerSec />
          </div>
        </div>
        <div className="container flex flex-col justify-center items-center w-full">
          <div className="w-full">
            <ExperienceSec />
          </div>
        </div>
        <div className="w-full">
          <LatestProjectsSec />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
