"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import LatestProjectsCarousel from "./latest-projects-carousel";
import { LatestProjectsCarouselHandles } from "./latest-projects-carousel";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { latestProjects } from "../constants/homeData";
import SampleModal from "./sample-modal";

gsap.registerPlugin(useGSAP);

function LatestProjectsSec() {
  const carouselRef = useRef<LatestProjectsCarouselHandles>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const pauseAreaRef = useRef<HTMLDivElement>(null);
  const [currInd, setCurrInd] = useState<Number>(0);
  const tl = useRef<GSAPTimeline>(gsap.timeline({ repeat: -1 }));

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const setCurrentIndex = (x: Number) => {
    setCurrInd(x);
  };

  const handleAnimationEnd = () => {
    // Trigger the function after the animation completes
    console.log("Animation completed!");
  };

  useGSAP(() => {
    tl.current.to(progressRef.current, {
      width: "100%",
      duration: 3,
      ease: "none",
      onComplete: handleNext,
    });
    console.log("initialize");
  }, [tl.current]);

  const pauseAnimation = () => {
    tl.current.pause();
  };

  const playAnimation = () => {
    tl.current.play();
  };

  return (
    <div className="my-12 lg:my-20 px-[32px] md:px-[50px] lg:px-[64px] w-full flex justify-center items-center">
      <div className="relative w-full max-w-[1140px]">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/3 pr-0 lg:pr-10 min-[1200px]:pr-20">
            <div className="text-3xl lg:text-5xl !leading-tight mb-8 lg:mb-14 overflow-hidden">
              <div className="font-thin flex w-full gap-4 mb-4 h-[36px] items-center">
                <div className="flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-r from-[#127A66] to-[#1F3350]">
                  LATEST{" "}
                </div>
                <div className=" invisible md:visible h-full flex-grow bg-[#212A4D]">
                  &nbsp;
                </div>
              </div>
              <div className="font-bold flex w-full gap-4 mb-4 h-[36px] items-center">
                <div className="titletext bg-clip-text text-transparent bg-gradient-to-r from-[#127A66] to-[#1F3350]">
                  PROJECTS
                </div>{" "}
                <div className="invisible md:visible  h-full flex-grow bg-[#212A4D]">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="text-[20px] lg:text-2xl font-light mb-[50px] lg:mb-6 text-[#212A4D]">
              These are my latest projects, where I&apos;ve applied my expertise
              to deliver cutting-edge digital solutions.
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="pr-0 lg:pr-20 w-full">
              <div ref={pauseAreaRef} className=" block relative overflow-hidden">
                <div className="absolute inset-0 z-10 opacity-0">
                </div>
                <LatestProjectsCarousel
                  ref={carouselRef}
                  currInd = {currInd.valueOf()}
                  setCurrentIndex={setCurrentIndex}
                  pauseAnimation={pauseAnimation}
                  playAnimation={playAnimation}
                />
              </div>
            </div>

            <div className="hidden lg:block bg-pulse-color-darker3 h-80 ml-0 lg:ml-20 -mt-60 relative bg-[#085748]">
              <div className="h-20 bottom-0 absolute w-full">
                <div className="float-left text-white h-20 w-10 flex items-center justify-center">
                  {(currInd.valueOf() % 3) + 1}
                </div>
                <div className="h-20 flex items-center float-left">
                  <div className="h-0.5 w-12 min-[1090px]:w-24 bg-[#0000002e] ">
                    <div
                      ref={progressRef}
                      className="progress w-0 h-0.5 bg-white"
                    ></div>
                  </div>
                </div>
                <div className="float-left text-white h-20 w-10 flex items-center justify-center">
                  3
                </div>
                <div className="text-xs mr-20 float-right total-slide-count text-white h-20 flex items-center">
                  <span className=" animate-pulse h-2 w-2 mr-2 rounded-full bg-green-500"></span>
                  <span className="tracking-[1px]">
                    NOW PROUDLY WORKING WITH <strong> GOOGLE</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProjectsSec;
