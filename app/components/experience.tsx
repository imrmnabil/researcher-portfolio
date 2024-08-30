"use client";
import { useGSAP } from "@gsap/react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import ExperienceCard from "./experience-card";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

import { academicRecords, AcademicRecord } from "../constants/homeData";

function ExperienceSec() {
  const [slidePos, setSlidePos] = useState(1);
  const numOfSlide = academicRecords.length;
  const trackWidth = `${100 * numOfSlide}%`;
  const slideWidth = `${100 / numOfSlide}%`;
  const lgSlideWidth = `${50 / numOfSlide}%`;

  const trackRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    const next = (slidePos % numOfSlide) + 1;
    console.log("next")
    setSlidePos(next);
  };

  const prevSlide = () => {
    console.log("prev")
    let prev;
    if (slidePos <= 1) {
      prev = numOfSlide;
    } else {
      prev = slidePos - 1;
    }
    setSlidePos(prev);
  };

  useEffect(()=>{
    console.log(slidePos)
  },[slidePos])

  useGSAP(() => {
    if (trackRef.current) {
      const moveX = (100 / numOfSlide) * (slidePos - 1);
      gsap.to(trackRef.current, { xPercent: -1*moveX });
    }
  }, [slidePos]);

  return (
    <div>
      <div className="bg-[#087A67] p-[50px] !pl-[30px] md:!pl-[50px] lg:!pl-[64px] lg:p-20 relative min-h-[316px] md:min-h-[335px] lg:min-h-[456px]">
        <div className="flex flex-col text-[36px] lg:text-[48px] !leading-tight w-full lg:mb-0 pr-0  pt-0 md:pt-[12px] mb-[50px] md:mb-14 ">
          <div className="font-thin flex w-full gap-4 mb-4 h-[36px] items-center">
            <div className="flex-shrink-0 text-white">EXPERIENCE </div>
            <div className=" invisible md:visible h-full flex-grow bg-white">
              &nbsp;
            </div>
          </div>
          <div className="font-bold flex w-full gap-4 mb-4 h-[36px] items-center">
            <div className="text-white">&amp;&nbsp;STUDIES</div>{" "}
            <div className="invisible md:visible  h-full flex-grow bg-white">
              &nbsp;
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            prevSlide();
          }}
          type="button"
          className="left-0 bottom-0 absolute bg-[#096F5C] hover:bg-[#0F6352] transition ease-in-out w-[50px] lg:w-[64px] h-[50px] lg:h-[64px] !hidden md:!flex justify-center items-center border-none rounded-none"
          style={{ display: "inline-block" }}
        >
          <ArrowLeftIcon width={30} height={30} className="text-white" />
        </button>
        <section className="bg-[#0d5748] text-white absolute bottom-0 w-[calc(100%-30px)] md:w-[calc(100%-50px)] lg:w-[calc(100%-64px)] right-0 h-auto flex items-center p-8">
          <div className="h-[80px] lg:h-full w-full overflow-hidden">
            <div className={` w-[400%] lg:w-[200%] overflow-hidden flex`} ref={trackRef}>
              {academicRecords.map((item,i)=>(
                <div className={`w-[25%]`} key={i}>
                <ExperienceCard academicRecord = {item}/>
              </div>
              ))}
            </div>
          </div>
        </section>
        <button
          onClick={() => {
            nextSlide();
          }}
          type="button"
          className="right-0 bottom-[95px] md:bottom-0 absolute bg-[#096F5C] hover:bg-[#0F6352] transition ease-in-out h-[50px] lg:h-[64px] w-[50px] lg:w-[64px] flex justify-center items-center border-none rounded-none slick-arrow"
        >
          <ArrowRightIcon width={30} height={30} className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default ExperienceSec;
