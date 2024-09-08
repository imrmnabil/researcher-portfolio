'use client'
import React, { useEffect, useState } from "react";
import { skills } from "../constants/homeData";
import ExpertiseCard from "./expertise-card";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

function ExpertiseTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const activeTabClass = "w-full text-left text-[13px] block font-normal bg-primary-darker1 text-white pl-6 py-5 border-b border-primary-darker1  hover:bg-primary-darker1"
  const inactiveTabClass = "w-full text-left text-[13px] block font-normal bg-primary-darker3 text-white pl-6 py-5 border-b border-primary-darker1  hover:bg-primary-darker1"

  const handleClick = (x:number) => {
    if(x !== activeTab) {
    gsap.to("#wrapper",{opacity:0,duration:0.1, onComplete: ()=>{setActiveTab(x)}})
    }
  }

  const getCurrentTab = (i:number) => {
    return(
      <ExpertiseCard skill = {skills[i]}/>
    )
  }

  useGSAP(()=>{
    gsap.to("#wrapper",{opacity:1})
  },[activeTab])

  return (
    <div className="flex">
      <ul
        className="tabs clearfix w-[300px] bg-primary-darker3"
        data-tabgroup="skills-tab-group"
      >
        {skills.map((item,i)=>(
            <li className="w-auto float-left contents" key={i} >
            <button id={`option-${i}`} onClick={()=>{handleClick(i)}}
              className={(i === activeTab)?activeTabClass:inactiveTabClass}
            >
              <span className=" uppercase text-ellipsis pr-4">{item.skill}</span>
            </button>
          </li>
        ))}
        
        
      </ul>
      <div className="w-full ">
      <div className=" hidden bg-primary-darker1"></div>
        <div id="wrapper" className="w-full h-full bg-primary-darker2 p-8">
          {getCurrentTab(activeTab)}
          </div>
      </div>
    </div>
  );
}

export default ExpertiseTabs;
