import React from "react";
import GradientTitleBar from "./atomic/titlebar-gradient";
import ExpertiseTabs from "./expertise-tabs";
import PublicationTabs from "./publication-tabs";
import PublicationExpandable from "./publication-expandable";
import ResearchContainer from "./research-container";
import ResearchTeamCard from "./research-team-card";
import P1 from '@/public/res/image/team/1.jpg'
import P2 from '@/public/res/image/team/2.jpg'
import P3 from '@/public/res/image/team/3.jpg'

function AcademicPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-20">
      <div>
        <div className=" px-[32px] md:px-[50px] lg:px-[64px] w-full flex flex-col justify-center items-center">
          <div className="relative w-full max-w-[1140px]">
            <div className="flex gap-3 w-full items-center h-12 lg:h-16 text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right mr-[6px] text-pulse-secondary-color"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <div className="flex items-center">
                <h1 className=" text-[14px] lg:text-[13px] tracking-[2px] text-pulse-secondary-color text-nowrap">
                  ACADEMIC LIFE
                </h1>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-primary-brighter3 to-transparent">&nbsp;</div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-primary-brighter3">&nbsp;</div>
      </div>
      <div className=" px-[32px] md:px-[50px] lg:px-[64px] w-full flex flex-col justify-center items-center">
        <div className="relative w-full max-w-[1140px]">
          <div className="pb-10 lg:pb-20">
          <GradientTitleBar top="MY" bottom="PUBLICATIONS"/>
          </div>
          <div>
            <div className=" lg:block hidden"><PublicationTabs/></div>
            <div className=" lg:hidden"><PublicationExpandable/></div>
          </div>
        </div>
        
      </div>
      <div className="w-full bg-primary">
        <ResearchContainer/>
      </div>
      <div className=" px-[32px] md:px-[50px] lg:px-[64px] w-full flex flex-col justify-center items-center pb-20">
        <div className="relative w-full max-w-[1140px]">
          <div className="pb-10 lg:pb-20">
          <GradientTitleBar top="LABORATORY" bottom="TEAM"/>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <ResearchTeamCard image={P1}/>
            <ResearchTeamCard image={P2}/>
            <ResearchTeamCard image={P3}/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AcademicPage;
