import Image from 'next/image'
import React from 'react'
import { IoIosClose } from "react-icons/io";
import TwoRedLines from './TwoRedLines';

const NextMatch = ({view , setView}) => {
  return (
      <div className={`updated_menu ${view ? "flex" : "hidden"}`}>
        <div className='flex flex-col items-center gap-3'>              
            <div className='bg-MODE1-primary rounded-xl flex flex-col items-center justify-center w-[400px] p-5 translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2 gap-3'>
                <span className='text-MODE1-third'>المبارة القادمة </span>
                <div className='flex items-center gap-5'>
                    <Image src={"/Zamalek-SC.webp"} alt={"logo"} width={100} height={100} className={"w-[50px] h-[60px]"} />
                    <span className='text-MODE1-third font-extrabold'>- : -</span>
                    <Image src={"/logo-2-150x150.webp"} alt={"logo"} width={100} height={100} className={"w-[50px] h-[50px]"} />
                </div>
                <div className='flex flex-col items-center text-MODE1-third'>
                    <span className='font-semibold'>كاس سوبر الاندية الابطال</span>
                    <span className='font-semibold'>20/10/2024 - 20:00</span>
                    <span className='font-semibold'>ستاد هزاع بن زايد بالعين</span>
                </div>
                <span className='absolute top-3 right-3' onClick={()=> setView(false)}><IoIosClose /></span>
                <span className='absolute z-[-1] w-full gap-4 top-1/2 left-1/2 right-1/2 translate-x-[-50%] translate-y-[-50%]'>
                    <TwoRedLines/>
                </span>
            </div>
        </div>
      </div>
  )
}

export default NextMatch