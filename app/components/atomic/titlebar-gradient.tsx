import React from 'react'

interface titleProps {
    top: string,
    bottom:string
}

function GradientTitleBar({top,bottom}:titleProps) {
  return (
    <div className="flex flex-col text-[36px] lg:text-[48px] !leading-tight w-full pt-0 md:pt-[12px] ">
          <div className="font-thin flex w-full gap-4 mb-4 h-[36px] items-center">
            <div className="flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {top}{" "}
            </div>
            <div className=" invisible md:visible h-full flex-grow bg-secondary">
              &nbsp;
            </div>
          </div>
          <div className="font-bold flex w-full gap-4 mb-4 h-[36px] items-center">
            <div className="titletext bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {bottom}
            </div>{" "}
            <div className="invisible md:visible  h-full flex-grow bg-secondary">
              &nbsp;
            </div>
          </div>
        </div>
  )
}

export default GradientTitleBar