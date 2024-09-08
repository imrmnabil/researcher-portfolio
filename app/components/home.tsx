'use client'
import Image from "next/image";
import Hero from "./hero";
import HomeBG from "./home-bg";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import workspaceImg from "@/public/res/image/workspace.jpg";
import CarieerSec from "./carieer";
import ExperienceSec from "./experience";
import LatestProjectsSec from "./latest-projects";
import ExpertiseSec from "./expertise";
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useRef } from "react";
import ProjectPane from "./project-pane";
gsap.registerPlugin(ScrollToPlugin)


function HomePage() {

  const parentDivRef = useRef(null)
  const handleClick = ()=> {
    gsap.to(document.getElementById('content-0'),{scrollTo:"#scrollBtn", duration:1 ,onComplete:()=>{console.log("clicked")}})
  }
  return (
    <div id="home" ref={parentDivRef} className="relative w-full" >
      <div className=" absolute h-full w-full z-0">
        <HomeBG />
      </div>
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        <div className="container lg:h-[calc(100vh-64px)] h-svh ">
          <Hero />
        </div>
        <div className="container flex flex-col justify-center items-center w-full bg-white">
          <div className="w-full h-[64px] lg:flex hidden ">
            <div className="h-full w-full bg-white"></div>
            <button id="scrollBtn" onClick={handleClick} className="h-full aspect-square bg-secondary flex justify-center items-center p-4 text-white">
              <ArrowDownIcon />
            </button>
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
        <div className="w-full bg-primary">
          <ExpertiseSec/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
