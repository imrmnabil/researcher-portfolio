"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import LatestProjectCard from "./latest-project-card";
import { latestProjects } from "../constants/homeData";
import LatestProjectNextCard from "./latest-project-next-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LatestProjectsCarousel() {
  const [nav1, setNav1] = useState<Slider>();
  const [nav2, setNav2] = useState<Slider>();
  let sliderRef1 = useRef<Slider>(null);
  let sliderRef2 = useRef<Slider>(null);

  const next = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
    }
  };
  
  const previous = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
    }
  };

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);
  return (
    <div>
      <div className="pr-0 lg:pr-20 w-full">
        <div className="slider-container h-full relative z-20">
          <Slider asNavFor={nav2} ref={sliderRef1} arrows={false}>
            {latestProjects.map((item) => (
              <LatestProjectCard project={item} key={item.name} />
            ))}
          </Slider>
        </div>

        <div className="float-right -mt-16 lg:-mt-32  w-96 h-16 lg:h-32 bg-blue-400 z-30">
          <section className=" hidden lg:block w-80 h-32 float-left z-30 relative bg-gray-50">
            <div className="slider-container">
              <Slider asNavFor={nav1} ref={sliderRef2} arrows={false}>
                {latestProjects.map((item,i) => (
                  <LatestProjectNextCard project={latestProjects[(i+1)%latestProjects.length]} key={(i+1)%latestProjects.length} />
                ))}
              </Slider>
            </div>
          </section>
          <div className="relative w-16 h-16 lg:h-32 float-right lg:float-left z-30 bg-[#087A67] hover:bg-[#0f6352]">
            <button
              type="button"
              className="w-16 h-16 lg:h-32 flex items-center justify-center bg-inherit transition ease-in-out border-none rounded-none "
              onClick={next}
            >
              <ArrowRightIcon width={30} height={30} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProjectsCarousel;
