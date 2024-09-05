import React from 'react'
import ExpertiseTabs from './expertise-tabs'
import ExpertiseExpandable from './expertise-expandable'

function ExpertiseSec() {
  return (
    <div className="my-12 lg:my-20 px-[32px] md:px-[50px] lg:px-[64px] w-full flex justify-center items-center">
      <div className="relative w-full max-w-[1140px]">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/3 pr-0 lg:pr-10 min-[1200px]:pr-20">
            <div className="text-3xl lg:text-5xl !leading-tight mb-8 lg:mb-14 overflow-hidden">
              <div className="font-thin flex w-full gap-4 mb-4 h-[36px] items-center">
                <div className="flex-shrink-0 text-white">
                  EXPERTISE{" "}
                </div>
                <div className=" invisible md:visible h-full flex-grow bg-white">
                  &nbsp;
                </div>
              </div>
              <div className="font-bold flex w-full gap-4 mb-4 h-[36px] items-center">
                <div className="titletext text-white">
                  &amp; SKILLS
                </div>{" "}
                <div className="invisible md:visible  h-full flex-grow bg-white">
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="text-[20px] lg:text-2xl font-light mb-[50px] lg:mb-6 text-white">
            I possess coding mastery, adept problem-solving, ideal for complex development challenges.
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className='hidden md:block w-full'>
              <ExpertiseTabs/>
            </div>
            <div className='md:hidden block w-full'>
              <ExpertiseExpandable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertiseSec