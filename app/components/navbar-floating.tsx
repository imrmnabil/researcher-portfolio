'use client'
import React from 'react'


interface dataFormProps{
    setPageNum: (x:Number)=>void
  }
  
function NavbarFloating() {
  return (
    <div className='md:hidden fixed top-3 left-3 z-10'>
        <button className='flex flex-shrink-0 items-center justify-center w-12 h-12 pb-1 bg-white opacity-65 text-[#116F5C] rounded-full '>
                <svg stroke='#116F5C' width="32" height="32" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.375 8.125C19.375 10.5412 17.4162 12.5 15 12.5C12.5838 12.5 10.625 10.5412 10.625 8.125C10.625 5.70875 12.5838 3.75 15 3.75C17.4162 3.75 19.375 5.70875 19.375 8.125Z" strokeWidth="1.5"></path>
                    <path d="M27.5 21.875C27.5 24.2912 25.5412 26.25 23.125 26.25C20.7088 26.25 18.75 24.2912 18.75 21.875C18.75 19.4588 20.7088 17.5 23.125 17.5C25.5412 17.5 27.5 19.4588 27.5 21.875Z"  strokeWidth="1.5"></path>
                    <path d="M11.25 21.875C11.25 24.2912 9.29125 26.25 6.875 26.25C4.45875 26.25 2.5 24.2912 2.5 21.875C2.5 19.4588 4.45875 17.5 6.875 17.5C9.29125 17.5 11.25 19.4588 11.25 21.875Z" strokeWidth="1.5"></path>
                </svg>
        </button>
    </div>
  )
}

export default NavbarFloating