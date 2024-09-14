import { BookOpen, Close, Download } from "@icon-park/react";
import React, {
  Component,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { ProjectData } from "../constants/homeData";
import Image from "next/image";
import { ResearchArticle } from "../constants/publicationData";
import researchImg from '@/public/res/image/research.jpg'

interface stateType {
  isPaneOpenLeft: boolean;
}

export interface modalFuncType {
  slideOpen: () => void;
  slideClose: () => void;
}

interface ArticleProps {
  article: ResearchArticle;
}

const PublicationModal = forwardRef<modalFuncType, ArticleProps>(
  ({ article }, ref) => {
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, []);
    const [state, setState] = useState<stateType>({
      isPaneOpenLeft: false,
    });

    const slideOpen = () => {
      console.log("State open Requested");
      setState((prevState) => ({ ...prevState, isPaneOpenLeft: true }));
    };
    const slideClose = () =>
      setState((prevState) => ({ ...prevState, isPaneOpenLeft: false }));

    useImperativeHandle(ref, () => ({
      slideOpen,
      slideClose,
    }));

    useEffect(() => {
      console.log(renderCount);
    }, [renderCount]);

    return (
      <div className=" w-full  h-full bg-green-700">
        <SlidingPane
          closeIcon={<div>Some div containing custom close icon.</div>}
          isOpen={state.isPaneOpenLeft}
          title="Hey, it is optional pane title.  I can be React component too."
          from="right"
          overlayClassName="w-full p-0 m-0 relative"
          className="!w-full min-[1024px]:!w-[1024px]"
          hideHeader={true}
          width="100%"
          onRequestClose={() =>
            setState((prevState) => ({ ...prevState, isPaneOpenLeft: false }))
          }
        >
          <div className=" w-full flex">
            <button
              onClick={slideClose}
              className="absolute z-20 top-0 left-0 p-2 w-9 h-9 sm:top-8 sm:left-8 sm:w-12 sm:h-12 bg-primary flex items-center justify-center"
            >
              <Close theme="outline" size="32" fill="#ffffff" strokeWidth={2} />
            </button>
            <div className="absolute top-0 left-0 w-full h-full flex z-10 overflow-hidden">
            <div className=" overflow-hidden relative basis-0 md:basis-[25%] lg:basis-[35%]  h-full">
                <Image
                  src={researchImg}
                  alt="alt"
                  fill
                  style={{objectFit:"cover",
                    objectPosition:"center"}}
                />
              </div>
              <div className="relative p-12 w-full overflow-y-auto">
                <div className="bg-primary-darker3 mb-[25px]">
                  <div className="divide-y divide-white divide-opacity-30">
                    <h4 className="font-normal text-[20px] text-white text-opacity-80 p-4 flex items-center uppercase">
                      {article.Name}
                    </h4>
                    <h6 className="text-[11px] uppercase text-white text-opacity-80 px-4 h-[50px] flex items-center">
                      {article.ConferenceOrJournalName}
                    </h6>
                    <div className="text-[11px] uppercase text-white text-opacity-80 px-4 h-[50px] flex items-center">
                     Authors:&nbsp;{article.AuthorName.map((item, index) => (
                        <span key={item}>
                          {item}
                          {index !== article.AuthorName.length - 1 ? "," : ""}
                          &nbsp;
                        </span>
                      ))}
                    </div>
                    <div className="text-[11px] uppercase text-white text-opacity-80 px-4 h-[50px] flex items-center">
                      Date : {article.Date.getFullYear().toString()}
                    </div>
                  </div>
                </div>
                <div className="leading-loose font-light text-[16px] md:text-[17px] project-content text-secondary">
                    {article.Abstract}
                </div>
                <div className="flex gap-2 py-4">
                    <button className="bg-primary-brighter3 flex items-center px-2 py-1 gap-2 text-lg text-secondary hover:bg-primary-brighter1"><BookOpen theme="outline" size="20" strokeWidth={3}/> Read</button>
                    <button className="bg-primary flex items-center px-2 py-1 gap-2 text-lg text-white hover:bg-primary-darker2"><Download theme="outline" size="20" strokeWidth={3}/> Download</button>
                </div>
              </div>
            </div>
          </div>
        </SlidingPane>
      </div>
    );
  }
);

PublicationModal.displayName = "PublicationModal";

export default PublicationModal;
