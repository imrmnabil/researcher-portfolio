"use client";
import React from "react";
import { Skill } from "../constants/homeData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  skill: Skill;
};

function ExpertiseCard({ skill }: Props) {
  useGSAP(() => {
    gsap.fromTo(
      "#progress-bar",
      { width: "0%" },
      { width: `${skill.exp_percentage}%`, ease: "circ.out" }
    );
    gsap.fromTo(
      "#progress-bar2",
      { width: "0%" },
      { width: `${skill.exp_percentage}%`, ease: "circ.out", delay:0.3}
    );
  }, [skill]);
  return (
    <div className="w-full lg:h-[380px] xl:h-[320px]">
      <div className="flex bg-primary-darker1 p-3 md:flex-nowrap flex-wrap gap-2">
        <div className="flex w-full md:w-fit items-center gap-2">
          <div className="w-14 aspect-square flex justify-center items-center text-[19px] font-normal text-white bg-primary-darker3">
            {`${skill.exp_percentage}%`}
          </div>
          <div className="bg-blue-500 h-1 w-full md:hidden">
            <div className="bg-primary-darker3 h-1 w-full">
              <div
                id="progress-bar2"
                className="h-full bg-white w-0 "
              ></div>
            </div>
          </div>
        </div>
        <div className="md:ml-3 flex flex-col justify-between w-full flex-1">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="inline-block mr-4 items-center w-full md:w-auto">
              <span className="text-white text-[10px] relative flex  justify-between items-center md:items-center gap-2">
                <span className="bg-primary-darker1 z-10 pl-0 md:pr-2 ">
                  LEVEL
                </span>
                <div className="inline-block w-full md:w-[6px] h-[1px] bg-primary-brighter2">
                  &nbsp;
                </div>
                <span className="bg-primary-darker1 z-10 pl-0 md:pl-2 uppercase">
                  {skill.exp_level}
                </span>
              </span>
            </div>
            <div className="inline-block items-center w-full md:w-auto">
              <span className="text-white text-[10px] relative flex justify-between items-center gap-2">
                <span className="bg-primary-darker1 z-10 sm:pr-2">
                  EXPERIENCE
                </span>
                <div className=" inline-block w-full md:w-[6px] h-[1px] bg-primary-brighter2">
                  &nbsp;
                </div>
                <span className="bg-primary-darker1 z-10  pl-1 sm:pl-2 uppercase text-nowrap">
                  {skill.experience}
                </span>
              </span>
            </div>
          </div>
          <div className="bg-primary-darker3 h-1 w-full invisible md:visible">
            <div id="progress-bar" className="h-full bg-white w-0 "></div>
          </div>
          <div className="skills-tag flex">
            {skill.subskills.map((item, i) => {
              if (i > 3) return;

              return (
                <span
                  className="bg-primary-darker3 text-[9px] py-[0.1rem] px-2 mr-2 text-white"
                  key={i}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-white mt-6 leading-loose font-extralight text-[16px] lg:text-[17px]">
        <p>{skill.description}</p>
      </div>
    </div>
  );
}

export default ExpertiseCard;
