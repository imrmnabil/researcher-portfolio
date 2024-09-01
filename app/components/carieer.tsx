"use client";
import React from "react";
import Image from "next/image";
import workspaceImg from "@/public/res/image/workspace.jpg";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import calcHeightWithMergin from "../functions/calcHeightWithMergin";
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

function CarieerSec() {
    const [currPos1, setCurrPos1] = useState(0);
    const [currPos2, setCurrPos2] = useState(0);
    const [currPos3, setCurrPos3] = useState(0);
  const moveTextRef = useRef<HTMLHeadingElement | null>(null);
  const pos1 = useRef<HTMLDivElement | null>(null);
  const pos2 = useRef<HTMLDivElement | null>(null);
  const pos3 = useRef<HTMLDivElement | null>(null);
  const [pos1h, setPos1h] = useState(0);
  const [pos2h, setPos2h] = useState(0);
  const [pos3h, setPos3h] = useState(0);

  useEffect(()=>{
    const handleResize=()=> {
      setPos1h(calcHeightWithMergin(pos1))
      setPos2h(calcHeightWithMergin(pos2))
      setPos3h(calcHeightWithMergin(pos3))
    }

    handleResize();
    window.addEventListener("resize",handleResize);

    return ()=>{
      window.addEventListener("resize",handleResize);
    }
  },[])

  useEffect(() => {
    let ob1Ref = null;
    let ob2Ref = null;
    let ob3Ref = null;
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio === 1) {
            setCurrPos1(1)
        }
        else{
            setCurrPos1(0)
        }
      },
      {
        threshold: [1], 
      }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio === 1) {
            setCurrPos2(1)
        }
        else{
            setCurrPos2(0)
        }
      },
      {
        threshold: [1],
      }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {

        if(entry.intersectionRatio === 1) {
            setCurrPos3(1)
        }
        else{
            setCurrPos3(0)
        }
      },
      {
        threshold: [1],
      }
    );

    if (pos1.current && pos2.current && pos3.current) {
      observer1.observe(pos1.current);
      ob1Ref = pos1.current;
      observer2.observe(pos2.current);
      ob2Ref = pos2.current;
      observer3.observe(pos3.current);
      ob3Ref = pos3.current;
    }

    return ()=> {
      if (ob1Ref && ob2Ref && ob3Ref) {
        observer1.unobserve(ob1Ref);
        observer2.unobserve(ob2Ref);
        observer3.unobserve(ob3Ref);
      }
    }
  }, []);


  useGSAP(()=>{

    if(pos1.current && pos2.current) {
      if((currPos2 === 0) && (currPos3 === 0) ) {
        const h = 0;
        gsap.to(moveTextRef.current,{y:h,text:"GREAT"});
      }
      else if((currPos2 === 1) && (currPos3 === 0)){
        const h = pos1h;
        gsap.to(moveTextRef.current,{y:h, text:"STRONG"});
      }
      else {
        const h = pos1h + pos2h
        gsap.to(moveTextRef.current,{y:h, text:"ACTIVE"});
      }
    }
  },[currPos1,currPos2,currPos3, pos1h,pos2h,pos3h])
  return (
    <>
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 px-[30px] md:px-[50px] lg:px-24 w-full">
        <div className="flex flex-col text-[36px] lg:text-[48px] !leading-tight w-full mt-10 lg:mt-0 lg:mb-0 pr-0 lg:pr-20 pt-0 md:pt-[12px] ">
          <div className="font-thin flex w-full gap-4 mb-4 h-[36px] items-center">
            <div className="flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-r from-[#127A66] to-[#1F3350]">
              ABOUT MY{" "}
            </div>
            <div className=" invisible md:visible h-full flex-grow bg-[#212A4D]">
              &nbsp;
            </div>
          </div>
          <div className="font-bold flex w-full gap-4 mb-4 h-[36px] items-center">
            <div className="titletext bg-clip-text text-transparent bg-gradient-to-r from-[#127A66] to-[#1F3350]">
              CAREER
            </div>{" "}
            <div className="invisible md:visible  h-full flex-grow bg-[#212A4D]">
              &nbsp;
            </div>
          </div>
        </div>
        <div className="leading-loose font-light text-[16px] lg:text-[17px] text-[#212A4D]">
          <p>
            I&apos;m a passionate developer driven by a relentless pursuit of
            digital solutions. With a love for coding and innovation, I thrive
            on transforming ideas into impactful software. My dedication to
            crafting cutting-edge technology fuels my ongoing journey in the
            world of development.
          </p>
        </div>
      </div>
      <div className="flex lg:grid grid-cols-2 gap-4 px-[30px] md:px-[50px] lg:px-24 pt-[30px] md:pt-[50px] lg:pt-10">
        <div className="hidden md:flex w-1/3 lg:w-full relative">
          <div className="w-2/3 hidden lg:block relative">
            <Image
              className="-ml-24 img-height-full object-cover h-img-full absolute"
              src={workspaceImg}
              alt=""
              fill
            />
          </div>
          <div className=" w-full lg:w-1/3 relative">
            <h1
              className="text-[#127A66] font-normal text-pulse-color transition-all duration-500 ease-out  moving-text absolute right-0 text-[25px] lg:text-[30px]  !leading-tight"
              ref={moveTextRef}
            >
              GREAT
            </h1>
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-full text-[#212A4D]">
          <div className="mb-[50px] lg:mb-16">
            <div className="mb-[24px] md:mb-10" ref={pos1}>
              <h2
                
                className="text-[25px] lg:text-[30px] !leading-tight mb-2"
              >
                EXPERIENCE
              </h2>
              <div className="leading-loose font-light text-[16px] lg:text-[17px] ">
                <p>
                  My extensive experience in the field is a testament to my
                  expertise and dedication, consistently delivering outstanding
                  results in the digital landscape. I&apos;m a seasoned professional
                  who excels in the world of development.
                </p>
              </div>
            </div>
            <div className="mb-[24px] md:mb-10" ref={pos2}>
              <h2
                
                className="text-[25px] lg:text-[30px] !leading-tight mb-2"
              >
                AUTONOMY
              </h2>
              <div className="leading-loose font-light text-[16px] lg:text-[17px] ">
                <p>
                  I excel in my work with a strong sense of autonomy, making me
                  a self-reliant and efficient developer. My ability to take
                  initiative and drive projects forward independently has
                  consistently proven to be a valuable asset in delivering
                  successful digital solutions.
                </p>
              </div>
            </div>
            <div className="mb-[24px] md:mb-10" ref={pos3}>
              <h2
                
                className="text-[25px] lg:text-[30px] !leading-tight mb-2"
              >
                INVOLVMENT
              </h2>
              <div className="leading-loose font-light text-[16px] lg:text-[17px] ">
                <p>
                  I actively engage in every aspect of the development process,
                  fostering collaboration and synergy within teams. My
                  dedication to active involvement ensures that I contribute
                  effectively to projects, creating seamless and innovative
                  digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarieerSec;
