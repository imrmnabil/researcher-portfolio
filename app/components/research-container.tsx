import React from 'react'
import WhiteTitleBar from './atomic/titlebar-white'
import ResearchCarousel from './research-carousel'

function ResearchContainer() {
  return (
    <div className="py-12 lg:py-20 px-[32px] md:px-[50px] lg:px-[64px] w-full flex justify-center items-center">
      <div className="relative w-full max-w-[1140px]">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/3 pr-0 lg:pr-10 min-[1200px]:pr-20">
            <WhiteTitleBar top="Research" bottom='Papers'/>
            <div className="text-[20px] lg:text-2xl font-light mb-[50px] lg:mb-6 pt-6 text-white">
            Explore my reearch papers, where each entry reflects my dedication to in-depth research and a profound passion for knowledge
            </div>
          </div>
          <div className="w-full lg:w-2/3 h-auto">
            <ResearchCarousel/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchContainer