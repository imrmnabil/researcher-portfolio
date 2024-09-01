import React from "react";
import LatestProjectsCarousel from "./latest-projects-carousel";

function LatestProjectsSec() {
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
            These are my latest projects, where I&apos;ve applied my expertise to deliver cutting-edge digital solutions.</div>
          </div>
          <div className="w-full lg:w-2/3"> 
            <LatestProjectsCarousel/>
            <div className="hidden lg:block bg-pulse-color-darker3 h-80 ml-0 lg:ml-20 -mt-60 relative bg-[#085748]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProjectsSec;
