import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { LinkIcon } from '@heroicons/react/24/solid';

interface Props {
    image: StaticImageData;
}

function ResearchTeamCard({image}:Props) {
  return (
    <div className=' relative w-full aspect-square'>
        <div className=' absolute overflow-hidden w-full h-full'>
            <Image src={image} alt="alt" fill />
        </div>
        <div className='relative text-white w-full h-full bg-[linear-gradient(15deg,_rgba(5,6,28,1)_0%,_rgba(5,6,28,0.6)_30%,_rgba(5,6,28,0)_100%);] flex-col justify-end items-start flex p-8'>
            <h1 className='text-xl'>JOHN DOE</h1>
            <h2 className='text-sm'>RESEARCH ASSISTANT</h2>
        </div>
        <button className='absolute top-0 right-0 w-12 h-12 bg-primary hover:bg-primary-darker1 flex justify-center items-center'>
            <LinkIcon fill='white' width={24} height={24}/>
        </button>
    </div>
  )
}

export default ResearchTeamCard