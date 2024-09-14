import React from 'react'

interface titleProps {
    top: string,
    bottom:string
}

function WhiteTitleBar({top,bottom}:titleProps) {
  return (
    <div className="flex flex-col text-[36px] lg:text-[48px] !leading-tight w-full lg:mb-0 pt-0 md:pt-[12px] ">
          <div className="font-thin flex w-full gap-4 mb-4 h-[36px] items-center">
            <div className="flex-shrink-0  text-transparent text-white uppercase">
              {top}{" "}
            </div>
            <div className=" invisible md:visible h-full flex-grow bg-white">
              &nbsp;
            </div>
          </div>
          <div className="font-bold flex w-full gap-4 mb-4 h-[36px] items-center uppercase">
            <div className="titletext text-transparent text-white">
              {bottom}
            </div>{" "}
            <div className="invisible md:visible  h-full flex-grow bg-white">
              &nbsp;
            </div>
          </div>
        </div>
  )
}

export default WhiteTitleBar