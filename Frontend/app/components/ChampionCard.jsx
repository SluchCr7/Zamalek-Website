'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const ChampionCard = ({ url, name, x, index }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`${open ? "flex" : "hidden"} menu_updated fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}>
        <div className='flex flex-col items-center gap-5 bg-MODE1-primary dark:bg-MODE2-primary p-5 rounded-lg'>
          <Image src={url} alt='league' width={300} height={300} />
          <div className='flex flex-col items-center gap-3'>
            <span className='capitalize font-bold text-xl text-MODE1-third dark:text-MODE2-third'>{name}</span>
            <span className='capitalize font-bold text-xl text-MODE1-third dark:text-MODE2-third'>{x}</span>
          </div>
        </div>
      </div>
      <div onClick={() => setOpen(!open)} key={index} className='flex flex-col items-start gap-2 hover:bg-[#EDEFF2] dark:hover:bg-[#585858] duration-700 p-2 rounded-lg'>
          <div className='flex items-center'>
              <Image src={url} alt='league'
                  width={50} height={50} />
              <span className='text-red-500 text-3xl'>{x}</span>
          </div>
          <span className='capitalize font-bold text-base text-MODE1-third dark:text-MODE2-third'>{name}</span>
      </div>
    </>
  )
}

export default ChampionCard