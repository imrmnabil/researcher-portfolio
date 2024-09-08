"use client";
import {
  HomeModernIcon,
  HomeIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@udecode/cn";

interface dataFormProps {
  setPageNum: (x: Number) => void;
  pageNum: Number
}

function NavbarFloating({ setPageNum = (x) => {}, pageNum }: dataFormProps) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const modalBlockRef = useRef<HTMLDivElement>(null);

  const activeBtnClass = "text-white bg-primary flex flex-shrink-0 items-center justify-center w-12 h-12  bg-opacity-65  rounded-full ";
  const inactiveBtnClass = "text-primary bg-white flex flex-shrink-0 items-center justify-center w-12 h-12  bg-opacity-65  rounded-full ";

  const closeMenu = () => {
    if (modalBlockRef.current) {
      gsap.to(modalBlockRef.current, { scale: 0, opacity:0 });
    }
    gsap.to("#options-container", {
      height: 0,
      onComplete: () => {
        gsap.to("#menu-container", {
          backgroundColor: "rgba(255,255,255,0)",
          duration: 0.1,
          onComplete: () => {
            setIsMenuOpened(false);
          },
        });
      },
    });
  };

  const openMenu = () => {
    if (modalBlockRef.current) {
      gsap.to(modalBlockRef.current, { scale: 100, opacity:0.30 });
    }
    gsap.to("#menu-container", {
      backgroundColor: "rgb(235, 235, 235)",
      duration: 0.1,
      onComplete: () => {
        gsap.to("#options-container", {
          height: "auto",
          onComplete: () => {
            setIsMenuOpened(true);
          },
        });
      },
    });
  };

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY) {
        closeMenu();
      }
    });

    return () => {
      document.addEventListener("wheel", (event) => {
        if (event.deltaY) {
          closeMenu();
        }
      });
    };
  });

  const handleToggle = () => {
    if (isMenuOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleModal = () => {
    closeMenu();
  };

  return (
    <div className="absolute top-0 left-0 w-full  h-full md:hidden">
      <div
          id="modal-cover"
          onClick={handleModal}
          ref={modalBlockRef}
          className="absolute opacity-30 top-2.5 left-2.5 w-[50px] scale-0 aspect-square rounded-full z-10"
        ></div>
      <div
        id="menu-container"
        className=" relative w-fit top-1 left-1 p-1.5 rounded-full z-50"
      >
        <button
          onClick={handleToggle}
          className="flex flex-shrink-0 items-center justify-center w-12 h-12 pb-1 bg-white bg-opacity-75 text-primary rounded-full "
        >
          <svg
            stroke="#116F5C"
            width="32"
            height="32"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.375 8.125C19.375 10.5412 17.4162 12.5 15 12.5C12.5838 12.5 10.625 10.5412 10.625 8.125C10.625 5.70875 12.5838 3.75 15 3.75C17.4162 3.75 19.375 5.70875 19.375 8.125Z"
              strokeWidth="1.5"
            ></path>
            <path
              d="M27.5 21.875C27.5 24.2912 25.5412 26.25 23.125 26.25C20.7088 26.25 18.75 24.2912 18.75 21.875C18.75 19.4588 20.7088 17.5 23.125 17.5C25.5412 17.5 27.5 19.4588 27.5 21.875Z"
              strokeWidth="1.5"
            ></path>
            <path
              d="M11.25 21.875C11.25 24.2912 9.29125 26.25 6.875 26.25C4.45875 26.25 2.5 24.2912 2.5 21.875C2.5 19.4588 4.45875 17.5 6.875 17.5C9.29125 17.5 11.25 19.4588 11.25 21.875Z"
              strokeWidth="1.5"
            ></path>
          </svg>
        </button>
        <div id="options-container" className="h-0 overflow-hidden rounded-full">
          <div className="w-12 flex flex-col gap-2 pt-2 ">
            <button
              id="nav-opt-0"
              onClick={() => {
                closeMenu();
                setPageNum(0);
              }}
              className={cn((pageNum == 0) ?activeBtnClass:inactiveBtnClass)}
            >
              <HomeIcon width={32} height={32} />
            </button>
            <button
              id="nav-opt-1"
              onClick={() => {
                closeMenu();
                setPageNum(1);
              }}
              className={cn((pageNum == 1) ?activeBtnClass:inactiveBtnClass)}
            >
              <AcademicCapIcon width={32} height={32} />
            </button>
            <button
            id="nav-opt-2"
              onClick={() => {
                closeMenu();
                setPageNum(2);
              }}
              className={cn((pageNum == 2) ?activeBtnClass:inactiveBtnClass)}
            >
              <BookmarkSquareIcon width={32} height={32} />
            </button>
            <button 
            id="nav-opt-3"
            className="flex flex-shrink-0 items-center justify-center w-12 h-12  bg-white bg-opacity-65 text-primary rounded-full ">
              <PaperAirplaneIcon width={32} height={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarFloating;
