"use client";
import { MouseEvent } from "react";
import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  ArrowLeftIcon,
  ArrowLeftStartOnRectangleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import LatestProjectCard from "./latest-project-card";
import { latestProjects } from "../constants/homeData";
import LatestProjectNextCard from "./latest-project-next-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useMouse from "@react-hook/mouse-position";
import AnimatedCursor from "react-animated-cursor";
import SampleModal, { modalFuncType } from "./sample-modal";

export interface LatestProjectsCarouselHandles {
  next: () => void;
  previous: () => void;
}

interface LatestProjectsCarouselProps {
  currInd : number,
  setCurrentIndex: (x: Number) => void;
  pauseAnimation: () => void;
  playAnimation: () => void;
}

const LatestProjectsCarousel = forwardRef<
  LatestProjectsCarouselHandles,
  LatestProjectsCarouselProps
>(
  (
    {
      currInd,
      setCurrentIndex = () => {},
      pauseAnimation = () => {},
      playAnimation = () => {},
    },
    ref
  ) => {
    const [nav1, setNav1] = useState<Slider>();
    const [nav2, setNav2] = useState<Slider>();
    let sliderRef1 = useRef<Slider>(null);
    let sliderRef2 = useRef<Slider>(null);
    let parentRef = useRef<HTMLDivElement>(null);
    const mouse = useMouse(parentRef, {
      enterDelay: 100,
      leaveDelay: 100,
    });

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

    const pause = () => {
      if (sliderRef1.current) {
        sliderRef1.current.slickPause();
      }
    };

    const play = () => {
      if (sliderRef1.current) {
        sliderRef1.current.slickPlay();
        console.log(sliderRef1.current.innerSlider);
      }
    };

    useEffect(() => {
      if (parentRef.current) {
        var currentRef = parentRef.current;
        currentRef.addEventListener("mouseenter", pauseAnimation);
        currentRef.addEventListener("mouseleave", playAnimation);
      }

      return () => {
        if (currentRef) {
          currentRef.addEventListener("mouseenter", pauseAnimation);
          currentRef.addEventListener("mouseleave", playAnimation);
        }
      };
    });

    useEffect(() => {
      if (sliderRef1.current && sliderRef2.current) {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
      }
    }, []);

    useGSAP(() => {
      if (mouse.x && mouse.y) {
        gsap.to("#cursor", {
          x: mouse.x,
          y: mouse.y,
          opacity: 1,
          duration: 0.2,
        });
      } else {
        gsap.to("#cursor", { opacity: 0 });
      }
    }, [mouse]);

    useGSAP(() => {
      gsap.to(".pulse-ring", {
        scale: 1.75,
        opacity: 0,
        duration: 2,
        stagger: {
          each: 0.5,
          repeat: -1,
        },
      });
    }, []);

    useImperativeHandle(ref, () => ({
      next,
      previous,
    }));

    const modalRefs = useRef<(modalFuncType| null)[]>([]);

    if (modalRefs.current.length !== latestProjects.length) {
      modalRefs.current = Array(latestProjects.length).fill(null);
    }
    return (
      <div className="">
        <div
          className="slider-container h-full relative z-20 cursor-none overflow-hidden"
          ref={parentRef}
        >
          {modalRefs.current.map((ref,index)=>(
            <SampleModal project={latestProjects[index]} key={index} ref={(el: any) => (modalRefs.current[index] = el)}/>
          ))}
          <div
            className="bg-[#087A67] absolute -top-8 -left-8 z-50 w-16 h-16 rounded-full flex items-center justify-center"
            onClick={() => {
              if(modalRefs.current) {
                modalRefs.current[currInd]?.slideOpen()
              }
            }}
            id="cursor"
          >
            <div className="text-white z-20 animate-pulse">
              <ArrowLeftStartOnRectangleIcon width={30} height={30} />
            </div>
            <div className="pulse-ring absolute w-full h-full rounded-full bg-inherit opacity-80"></div>
            <div className="pulse-ring absolute w-full h-full rounded-full bg-inherit opacity-80"></div>
            <div className="pulse-ring absolute w-full h-full rounded-full bg-inherit opacity-80"></div>
          </div>
          <div>
            <Slider
              beforeChange={(prev, next) => {
                setCurrentIndex(next);
              }}
              asNavFor={nav2}
              ref={sliderRef1}
              arrows={false}
            >
              {latestProjects.map((item) => (
                <LatestProjectCard project={item} key={item.name} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="float-right -mt-16 lg:-mt-32  w-96 h-16 lg:h-32 z-30">
          <section className=" hidden lg:block w-80 h-32 float-left z-30 relative bg-gray-50">
            <div className="slider-container">
              <Slider asNavFor={nav1} ref={sliderRef2} arrows={false}>
                {latestProjects.map((item, i) => (
                  <LatestProjectNextCard
                    project={latestProjects[(i + 1) % latestProjects.length]}
                    key={(i + 1) % latestProjects.length}
                  />
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
    );
  }
);

LatestProjectsCarousel.displayName = "LatestProjectsCarousel";

export default LatestProjectsCarousel;
