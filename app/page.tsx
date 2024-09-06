"use client";
import Image from "next/image";
import HomePage from "./components/home";
import Navbar from "./components/navbar";

import { MutableRefObject, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import AcademicPage from "./components/academic";
import useStateModified from "./functions/useStateModified";
import AnimatedCursor from "react-animated-cursor";
import NavbarFloating from "./components/navbar-floating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollToPlugin);

const print = (x: any) => {
  console.log(x);
};

const currentEL = (i: Number) => {
  switch (i) {
    case 0:
      return <HomePage />;
    case 1:
      return <AcademicPage />;
    default:
      return <HomePage />;
  }
};

const createArrayInRange = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const pageDown = async (x: number, currentPage: number) => {
    const animations = createArrayInRange(x.valueOf(), currentPage - 1).map(
      (item: number) => {
        return new Promise<void>((resolve) => {
          gsap.to(`#page-${item}`, {
            y: 0,
            onComplete: () => {
              gsap.to(`#content-${currentPage}`, {
                scrollTo: { y: 0 },
                onComplete: resolve, // Resolve the promise after this animation
              });
            },
          });
        });
      }
    );

    // Wait for all animations to complete
    await Promise.all(animations);

    // Now set the current page
    setCurrentPage(x.valueOf());
  };

  const pageUp = async (x: number, currentPage: number) => {
    const animations = createArrayInRange(currentPage, x.valueOf() - 1).map(
      (item: number) => {
        return new Promise<void>((resolve) => {
          gsap.to(`#page-${item}`, {
            y: -1000,
            onComplete: () => {
              gsap.to(`#content-${currentPage}`, {
                scrollTo: { y: 0 },
                onComplete: resolve, // Resolve the promise after this animation completes
              });
            },
          });
        });
      }
    );

    // Wait for all animations to complete
    await Promise.all(animations);

    // Now set the current page
    setCurrentPage(x.valueOf());
  };

  const handlePageNum = (x: Number) => {
    if (x.valueOf() < currentPage) {
      pageDown(x.valueOf(), currentPage);
    }

    if (x.valueOf() > currentPage) {
      pageUp(x.valueOf(), currentPage)
    }
  };
  return (
    <div className=" select-none flex overflow-hidden fixed w-full  h-full top-0 left-0">
      <NavbarFloating />
      {/* <AnimatedCursor  outerSize={35} outerScale={2} innerScale={.7} outerAlpha={1} innerStyle={{backgroundColor:"#08ad8f"}} outerStyle={{ backgroundColor:"transparent" , borderWidth:"1px", borderColor:"#08ad8f"}}/> */}
      <div className="overflow-y-scroll overflow-x-hidden w-fit h-fit bg-[#0D5748] no-scrollbar flex-shrink-0">
        <Navbar setPageNum={handlePageNum} />
      </div>
      <div className="min-w-0 bg-[#F9FBFD] h-full flex-shrink flex-grow slider-container overflow-hidden relative">
        {[0, 1, 2].map((item) => (
          <div
            id={`page-${item}`}
            className=" absolute top-0 left-0 w-full h-full bg-white"
            key={item}
            style={{ zIndex: 5 - item }}
          >
            <div
              id={`content-${item}`}
              className="el w-full h-full bg-inherit"
              style={{ overflowY: "scroll" }}
            >
              {currentEL(item)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
