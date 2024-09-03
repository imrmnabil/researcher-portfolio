'use client'
import Image from "next/image";
import HomePage from "./components/home";
import Navbar from "./components/navbar";

import { MutableRefObject, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import AcademicPage from "./components/academic";
import useStateModified from "./functions/useStateModified";
import AnimatedCursor from "react-animated-cursor";

gsap.registerPlugin(ScrollToPlugin);

const print = (x: any) => { 
  console.log(x);
};

const currentEL = (i:Number) => {
    switch (i) {
      case 0:
        return (<HomePage/>)
      case 1:
        return (<AcademicPage/>)
      default:
        return (<HomePage/>)
    }
}

export default function Home() {

  const pageRef = useRef<HTMLDivElement | null>(null);
  const [pageNum, setPageNum] = useState<Number>(0);
  let divHeight = 0;

  if (pageRef.current) {
    divHeight = pageRef.current?.clientHeight/4;
  }
  
  useGSAP(()=>{
    if(pageNum !== null){
      const y = divHeight*-pageNum;
      gsap.to(pageRef.current,{y:y})
      gsap.to(".el",{scrollTo: {y: 0}})
    }
  },[pageNum])

  const handlePageNum = (i:Number)=> {
    console.log("Handled")
    setPageNum(i);
  }
  return (
    <div className=" select-none">
      {/* <AnimatedCursor  outerSize={35} outerScale={2} innerScale={.7} outerAlpha={1} innerStyle={{backgroundColor:"#08ad8f"}} outerStyle={{ backgroundColor:"transparent" , borderWidth:"1px", borderColor:"#08ad8f"}}/> */}
      <div className="fixed w-fit h-fit">
        <Navbar setPageNum={handlePageNum}/>
      </div>
      <div ref={pageRef}  className="fixed lg:w-[calc(100%-64px)] lg:ml-[64px] w-[calc(100%-48px)] ml-[48px] bg-[#F9FBFD]">
          <div id="home" className="el w-full h-lvh min-h-fit z-10 bg-inherit" style={{overflowY:"scroll"}}>{currentEL(0)}</div>
          <div id="academic" className="el w-full h-lvh min-h-fit z-10 bg-inherit" style={{overflowY:"scroll"}}>{currentEL(1)}</div>
          <div id="blog" className="el w-full h-lvh min-h-fit z-10 bg-inherit" style={{overflowY:"scroll"}}>{currentEL(2)}</div>
          <div id="contact" className="el w-full h-lvh min-h-fit z-10 bg-inherit" style={{overflowY:"scroll"}}>{currentEL(3)}</div>
      </div>
    </div>
  );
}
