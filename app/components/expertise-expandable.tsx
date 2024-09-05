"use client";
import React, { useEffect, useState } from "react";
import { skills } from "../constants/homeData";
import ExpertiseCard from "./expertise-card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function ExpertiseExpandable() {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (x: number) => {
    if (x !== activeTab) {
      gsap.to(`#button-${activeTab}`, {
        rotation: "0",
        ease: "none",
        duration: 0.2,
      });
      gsap.to(".skills-content", {
        height: 0,
        duration: 0.4,
        ease: "none",
        onComplete: () => {
          setActiveTab(x);
        },
      });
    }
  };

  useGSAP(() => {
    gsap.to(`#skill-${activeTab}`, {
      height: "auto",
      ease: "none",
      duration: 0.4,
    });
    gsap.to(`#button-${activeTab}`, {
      rotation: "+90",
      ease: "none",
      duration: 0.6,
    });
  }, [activeTab]);

  return (
    <div className="">
      <div className=" flex flex-col gap-2 relative mb-1">
        {skills.map((item, i) => {
          return (
            <div key={i} className=" bg-primary-darker2">
              <div className="flex bg-primary-darker3 p-4 cursor-pointer items-center">
                <button
                  onClick={() => {
                    handleClick(i);
                  }}
                >
                  <ChevronRightIcon
                    id={`button-${i}`}
                    width={20}
                    height={20}
                    color="white"
                  />
                </button>
                <span className="text-white text-[13px] font-normal pl-2 uppercase">
                  {item.skill}
                </span>
              </div>
              <div
                id={`skill-${i}`}
                className="skills-content p-0 overflow-hidden h-0"
              >
                <div className=" bg-primary-darker2 overflow-hidden p-8 text-[20px] font-light">
                  <ExpertiseCard skill={skills[activeTab]} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExpertiseExpandable;
