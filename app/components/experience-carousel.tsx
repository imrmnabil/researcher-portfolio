"use client";

import React, { useState, useEffect, useRef } from "react";
import { academicRecords } from "../constants/homeData";
import ExperienceCard from "./experience-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

function CustomPrev(props: any) {
  const { className, style, onClick } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      className="-left-24  -bottom-8 absolute bg-[#096F5C] hover:bg-[#0F6352] transition ease-in-out w-[50px] lg:w-[64px] h-[50px] lg:h-[64px] !hidden lg:!flex justify-center items-center border-none rounded-none"
      style={{ display: "inline-block" }}
    >
      <ArrowLeftIcon width={30} height={30} className="text-white" />
    </button>
  );
}

function CustomNext(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className="-right-8 -top-8 lg:-bottom-8 lg:top-auto absolute bg-[#096F5C] hover:bg-[#0F6352] transition ease-in-out w-[50px] lg:w-[64px] h-[50px] lg:h-[64px] !flex justify-center items-center border-none rounded-none"
      style={{ display: "inline-block" }}
    >
      <ArrowRightIcon width={30} height={30} className="text-white" />
    </button>
  );
}

function ExperienceCarousel() {
  const [nav1, setNav1] = useState<React.MutableRefObject<null> | null>(null);
  const [nav2, setNav2] = useState<React.MutableRefObject<null> | null>(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
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
        <div>
          <div>
            <div>
              <section className="bg-[#0d5748] text-white absolute bottom-0 w-[calc(100%-30px)] md:w-[calc(100%-50px)] lg:w-[calc(100%-64px)] right-0 h-auto flex items-center p-8">
                <div className="h-[80px] lg:h-full w-full">
                  <Slider
                    {...settings}
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2 = slider)}
                  >
                    {academicRecords.map((item, i) => (
                      <ExperienceCard academicRecord={item} key={i} />
                    ))}
                  </Slider>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit transition-all duration-200 overflow-hidden">
        <section className="slider-nav-timeline p-8 ml-[30px] md:ml-[50px] lg:ml-[64px]  h-fit bg-[#DCECE9]">
        <Slider
          asNavFor={nav2}
          useTransform={true}
          arrows={false}
          adaptiveHeight={true}
          ref={(slider) => (sliderRef1 = slider)}
        >
            {academicRecords.map((item,i)=>(
                <div className=" leading-loose font-light text-[16px] lg:text-[17px] " key={i}>
                <p>
                    {item.description}
                </p>
                </div>
            ))}
        </Slider>

        </section>
      </div>
    </div>
  );
}

export default ExperienceCarousel;
