import React from 'react'
import Image from 'next/image'
import { GiWhistle } from "react-icons/gi";
import { MdOutlineStadium } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const Match = () => {
  return (
    <div className='w-full flex flex-col items-start gap-3 left'>
      <span className='text-MODE1-secondary dark:text-MODE2-secondary font-bold text-2xl w-full '>المبارة القادمة</span>
      <div className="flex items-center justify-around w-full">
        <div className="flex items-start flex-col gap-3 pb-5">
          <div className="flex items-center gap-1">
            <span className="text-MODE1-third dark:text-MODE2-third font-bold text-lg"><IoTime /></span>
            <span className="text-MODE1-third dark:text-MODE2-third font-bold text-lg">20/10/2024 - 20:00</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-MODE1-third dark:text-MODE2-third font-bold text-lg"><MdOutlineStadium /></span>
            <span className="text-MODE1-third dark:text-MODE2-third font-bold text-lg">ملعب هزاع بن زايد بمدينه العين</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-MODE1-third dark:text-MODE2-third font-bold text-lg"><GiWhistle /></span>
            <span className="text-MODE1-third dark:text-MODE2-third font-bold text-lg">محمد معروف</span>
          </div>
        </div>
        <div className="flex items-center gap-3 pb-5">
          <Image src={'/Logos/Zamalek-SC.webp'} alt="logo" width={70} height={70} className="" />
          <span className="text-MODE1-third dark:text-MODE2-third font-bold text-3xl">0:0</span>
          <Image src={'/Logos/logo-2-150x150.webp'} alt="logo" width={80} height={80} className="" />
        </div>
      </div>
    </div>
  )
}

export default Match