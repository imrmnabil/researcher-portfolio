import React, { useRef } from "react";
import { ResearchArticle } from "../constants/publicationData";
import { Notes } from "@icon-park/react";
import PublicationModal from "./publication-modal";
import { modalFuncType } from "./sample-modal";

interface ArticleProps {
  article : ResearchArticle
}

function PublicationCard({article} : ArticleProps) {
  const ref = useRef<modalFuncType>(null)
  return (
    <div className="bg-primary-brighter3 text-secondary">
      <div className="p-8">
        <h3 className="font-normal text-lg lg:text-[20px] mb-2">
          {article.Name}
        </h3>
        <h4 className="font-normal text-xs text-primary mb-4 uppercase">
          {article.ConferenceLocation}
        </h4>
        <div className="leading-loose text-base lg:text-lg font-light line-clamp-3">
          {article.Abstract}
        </div>
      </div>
      <div className="bg-black bg-opacity-10 w-full h-[45px] flex justify-between">
        <div className="flex justify-between items-center px-4 md:px-8 w-[95%]">
          <div className="max-w-[200px] min-w-[200px] flex items-center">
            <span className="bg-primary-darker1 text-[8px] py-1 px-2 mr-2 text-white uppercase">
              {article.Type}
            </span>
            <span className="bg-black text-[8px] py-1 px-2 mr-2 text-white uppercase" style={article.Selected? {visibility:"visible"}:{visibility:"hidden"}}>
              Selected
            </span>
          </div>
          <div className="text-[12px] text-primary font-semibold hidden md:block">
            {article.Date.toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"}).toUpperCase() }
          </div>
          <div className="text-[12px] hidden md:block">
            {article.AuthorName.map((item,index)=>(
              <span key={item}>
                {item}{(index !== article.AuthorName.length - 1)? ",":""}&nbsp;
              </span>
            ))}
          </div>
        </div>
        <button onClick={()=>{ref.current?.slideOpen()}}
          className="!h-[45px] !w-[45px] bg-primary hover:bg-primary-darker2 flex justify-center items-center cursor-pointer"
        >
          <Notes theme="outline" size="24" fill="#ffffff"/>
        </button>
      </div>
      <PublicationModal ref={ref} article={article}/>
    </div>
  );
}

export default PublicationCard;
