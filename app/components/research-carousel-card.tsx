import React from 'react'
import { ResearchArticle } from '../constants/publicationData'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { LinkOne } from '@icon-park/react';
interface ArticleProps {
    article : ResearchArticle,
    prev: ()=>void,
    next: ()=> void,
  }



function ResearchCarouselCard({article,prev,next}: ArticleProps) {

    function CustomPrev(props: any) {
        const { className, style, onClick } = props;
      
        return (
          <button
            onClick={prev}
            type="button"
            className="z-50 left-0  bottom-0 absolute bg-primary-darker2 hover:bg-primary-darker3 transition ease-in-out w-[50px] h-[50px] !flex justify-center items-center border-none rounded-none"
            style={{ display: "inline-block" }}
          >
            <ArrowLeftIcon width={30} height={30} className="text-white" />
          </button>
        );
      }
      
      function CustomNext(props: any) {
        const { className, style, onClick } = props;
        return (
          <button
            onClick={next}
            type="button"
            className="z-50 right-0 top-0 absolute bg-primary-darker2 hover:bg-primary-darker3  transition ease-in-out w-[50px] h-[50px] !flex justify-center items-center border-none rounded-none"
            style={{ display: "inline-block" }}
          >
            <ArrowRightIcon width={30} height={30} className="text-white" />
          </button>
        );
      }
  return (
    <div className='w-full bg-primary-darker3 text-white relative'>
        <div className='w-full h-[50px] bg-primary-darker1 flex items-center font-medium'>
            <h1 className='px-10'>{article.Date.toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"}).toUpperCase()}</h1>
        </div>
        <div className='pb-[50px] h-auto transition-all'>
            <h1 className='text-xl font-medium px-10 pt-8'>{article.Name}</h1>
            <div className='text-lg font-light px-10 py-4'>
                <span className=''>
                {article.Abstract}
                </span>
            </div>
        </div>
        <button className=' absolute w-[50px] h-[50px] right-0 bottom-0 bg-primary-darker2 hover:bg-primary-darker3 flex items-center justify-center'>
        <LinkOne theme="outline" size="24" fill="white" strokeWidth={3}/> 
        </button>
        <CustomPrev/>
        <CustomNext/>
    </div>
  )
}

export default ResearchCarouselCard