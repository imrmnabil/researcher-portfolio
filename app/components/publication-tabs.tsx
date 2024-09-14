'use client'
import React, { useEffect, useState } from "react";
import { skills } from "../constants/homeData";
import PublicationCard from "./publication-card";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { conferences,journals,articles } from "../constants/publicationData";

function PublicationTabs() {
  const tabNames = ["Conference", "Journal", "Articles"]
  const [activeTab, setActiveTab] = useState(0)
  const activeTabClass = "w-full  text-left text-[13px] block font-normal bg-primary-darker1 text-white pl-6 py-5 border-b border-primary-darker1  hover:bg-primary-darker1"
  const inactiveTabClass = "w-full  text-left text-[13px] block font-normal bg-primary-darker3 text-white pl-6 py-5 border-b border-primary-darker1  hover:bg-primary-darker1"

  const handleClick = (x:number) => {
    if(x !== activeTab) {
    gsap.to("#wrapper",{opacity:0,duration:0.1, onComplete: ()=>{setActiveTab(x)}})
    }
  }

  
  const ConferenceTab = () => {
    return (
      <div className="flex flex-col gap-2 bg-secondary">
        {conferences.map((item,index)=>(
          <PublicationCard article={item} key={index}/>
        ))}
      </div>
    )
  }

  const JournalTab = () => {
    return (
      <div className="flex flex-col gap-2 bg-secondary">
        {journals.map((item,index)=>(
          <PublicationCard article={item} key={index}/>
        ))}
      </div>
    )
  }

  const ArticleTab = () => {
    return (
      <div className="flex flex-col gap-2 bg-secondary">
        {articles.map((item,index)=>(
          <PublicationCard article={item} key={index}/>
        ))}
      </div>
    )
  }

  const getCurrentTab = (i:number) => {
    if(i === 0) {
      return(
        <ConferenceTab/>
      )
    }
    else if( i === 1) {
      return (
        <JournalTab/>
      )
    }

    return (
      <ArticleTab/>
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
        {tabNames.map((item,i)=>(
            <li className="w-auto float-left contents" key={i} >
            <button id={`option-${i}`} onClick={()=>{handleClick(i)}}
              className={(i === activeTab)?activeTabClass:inactiveTabClass}
            >
              <span className=" uppercase text-ellipsis pr-4">{item}</span>
            </button>
          </li>
        ))}
        
        
      </ul>
      <div className="w-full ">
      <div className=" hidden "></div>
        <div id="wrapper" className="w-full h-full">
          {getCurrentTab(activeTab)}
          </div>
      </div>
    </div>
  );
}

export default PublicationTabs;