import React from 'react'
import { MdSportsHandball } from "react-icons/md";
import { TbPlayBasketball } from "react-icons/tb";
import { TbPlayVolleyball } from "react-icons/tb";
import { IoIosWoman } from "react-icons/io";

const Allsposrts = ({menu}) => {
    const MenuIconsAllSports = [
        {
            icon: <MdSportsHandball />,
            Text : "كرة اليد",
        },
        {
            icon: <TbPlayBasketball />,
            Text : "كرة السلة",
        },
        {
            icon: <TbPlayVolleyball />,
            Text : "الكرة الطائرة",
        },
        {
            icon: <IoIosWoman />,
            Text : "الفرق النسائية",
        }
    ]
  return(
      <div className={`${menu ? "flex" : "hidden"} fixed top-[80px] p-1 flex-col items-center rounded-lg w-[250px] shadow-lg bg-MODE1-primary dark:bg-MODE2-primary z-[1000]`}>
        <div className='flex items-center justify-between w-full hover:bg-[#f0f0f0] dark:hover:bg-[#585858] p-3'>
            <span><MdSportsHandball /></span>
            <span className='text-MODE1-third dark:text-MODE1-primary text-lg font-semibold'>كرة اليد</span>
        </div>
        <div className='flex items-center justify-between w-full hover:bg-[#f0f0f0] dark:hover:bg-[#585858] p-3'>
            <span><TbPlayBasketball /></span>
            <span className='text-MODE1-third dark:text-MODE1-primary text-lg font-semibold'>كرة السلة</span>
        </div>
        <div className='flex items-center p-3 justify-between w-full hover:bg-[#f0f0f0] dark:hover:bg-[#585858]'>
            <span><TbPlayVolleyball /></span>
            <span className='text-MODE1-third dark:text-MODE1-primary text-lg font-semibold'>الكرة الطائرة</span>
        </div>
        <div className='flex items-center p-3 justify-between w-full hover:bg-[#f0f0f0] dark:hover:bg-[#585858]'>
            <span><IoIosWoman /></span>
            <span className='text-MODE1-third dark:text-MODE1-primary text-lg font-semibold'>الفرق النسائية</span>
        </div>
    </div>
  )
}


        // {
        //     MenuIconsAllSports.map((cell) => {
        //         <div className='flex items-center justify-between w-full hover:bg-[#f0f0f0] dark:hover:bg-[#585858] p-3'>
        //             <span><TbPlayBasketball/></span>
        //             <span className='text-MODE1-third dark:text-MODE1-primary text-sm font-semibold'>{cell.Text}</span>
        //         </div>
        //     })
        // }
export default Allsposrts