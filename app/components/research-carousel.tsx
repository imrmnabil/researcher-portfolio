"use client";

import React, { useState, useEffect, useRef, SetStateAction } from "react";
import { academicRecords } from "../constants/homeData";
import ExperienceCard from "./experience-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import WhiteTitleBar from "./atomic/titlebar-white";
import { articles } from "../constants/publicationData";
import ResearchCarouselCard from "./research-carousel-card";






function ResearchCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false
      };
      const carouselRef = useRef<Slider>(null);

      const prev = ()=>{
        carouselRef.current?.slickPrev()
      }
      const next = ()=>{
        carouselRef.current?.slickNext()
      }
      return (
        <div className="slider-container h-auto bg-primary-darker3 transition-all">
          <Slider ref={carouselRef} {...settings}>
            {articles.map((item,index)=>(
                <ResearchCarouselCard article={item} prev={prev} next={next} key={index}/>
            ))}
          </Slider>
        </div>
      );
}

export default ResearchCarousel