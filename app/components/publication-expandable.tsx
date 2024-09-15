"use client";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeftIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { conferences, journals, articles } from "../constants/publicationData";
import PublicationCard from "./publication-card";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function PublicationExpandable() {
  const [activeTab, setActiveTab] = useState(0);
  const tabNames = ["Conference", "Journal", "Articles"];

  const handleClick = (x: number) => {
    if (x !== activeTab) {
      gsap.to(`#button-${activeTab}`, {
        rotation: "0",
        ease: "none",
        duration: 0.1,
      });
      
      gsap.to(`#skill-${activeTab}`, {
        height: 0,
        duration: 0.2,
        ease:"circ.out",
        onComplete: () => {
          gsap.to(`#skill-${x}`, {
            height: "auto",
            ease: "circ.in",
            duration: 0.2,
            onComplete: () => {
              setActiveTab(x);
            },
          });
        },
      });
      gsap.to("#content-1", {
        scrollTo: {y:0},
        duration:0.4,
      });
    }
  };

  useGSAP(() => {
    gsap.to(`#button-${activeTab}`, {
      rotation: "+90",
      ease: "none",
      duration: 0.1,
    });
  }, [activeTab]);

  const ConferenceTab = () => {
    return (
      <div className="flex flex-col gap-2 bg-secondary">
        {conferences.map((item, index) => (
          <PublicationCard article={item} key={index} />
        ))}
      </div>
    );
  };

  const JournalTab = () => {
    return (
      <div className="flex flex-col gap-2 bg-secondary">
        {journals.map((item, index) => (
          <PublicationCard article={item} key={index} />
        ))}
      </div>
    );
  };

  const ArticleTab = () => {
    return (
      <div className="flex flex-col gap-2 bg-secondary">
        {articles.map((item, index) => (
          <PublicationCard article={item} key={index} />
        ))}
      </div>
    );
  };

  const getCurrentTab = (i: number) => {
    if (i === 0) {
      return <ConferenceTab />;
    } else if (i === 1) {
      return <JournalTab />;
    }

    return <ArticleTab />;
  };

  return (
    <div className="">
      <div className=" flex flex-col gap-2 relative mb-1">
        {tabNames.map((item, i) => {
          return (
            <div
              key={i}
              className=" bg-primary-darker2 cursor-pointer"
              onClick={() => {
                handleClick(i);
              }}
            >
              <div className="flex bg-primary-darker3 p-4 cursor-pointer items-center">
                <button>
                  <ChevronRightIcon
                    id={`button-${i}`}
                    width={20}
                    height={20}
                    color="white"
                  />
                </button>
                <span className="text-white text-[13px] font-normal pl-2 uppercase">
                  {item}
                </span>
              </div>
              <div
                id={`skill-${i}`}
                className="skills-content p-0 overflow-hidden h-0"
              >
                <div className=" bg-primary-darker2 overflow-hidden text-[20px] font-light">
                  {getCurrentTab(i)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PublicationExpandable;
