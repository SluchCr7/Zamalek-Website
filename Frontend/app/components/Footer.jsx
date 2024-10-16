import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import SocialIcons from './Social';
import Image from 'next/image';
import { Links } from '../Players';
import { VscArrowUp } from "react-icons/vsc";
import Link from 'next/link';
const Footer = () => {
  return (  //bg-[url("/ZamalekFooter.png")]
    <div className='flex items-start h-fit border-MODE1-add border-t-2 dark:border-MODE2-add py-12 flex-col gap-2 bg-black w-full bg-cover bg-no-repeat'>
      <div className='flex w-full left items-center gap-7 justify-around'>
        <Image src={"/Logos/Zamalek-SC.webp"} alt="logo" width={170} height={200} className={"w-[120px] h-[150px]"} />
        <div className="flex items-center flex-col gap-5">
          <div className="flex items-center gap-4">
            <SocialIcons />
          </div>
          <div className="flex items-center gap-7 text-xl text-MODE1-primary dark:text-MODE2-secondary font-bold">
            <span>تاريخ</span>
            <span>سياسة الخصوصية</span>
            <span>الشروط و الاحكام</span>
            <span>تواصل معنا</span>
            <span>الجمهور</span>
            <span>الادارة</span>
          </div>
        </div>
        <button className="text-xl border-[1px] p-3 border-MODE1-primary dark:border-MODE2-secondary text-MODE1-primary dark:text-MODE2-secondary font-bold tracking-[2px]">
          <span>احجز الان</span>
        </button>
      </div>
      <div className="flex items-center justify-center w-full">
        <span className="text-sm text-MODE1-secondary dark:text-MODE2-secondary text_stroke">جميع الحقوق محفوظة لنادي الزمالك للالعاب الرياضية @2024</span>
      </div>
    </div>
  )
}


{/* <div className='container mx-auto max-w-[80%] left'>
            <div className='flex flex-col items-center gap-2'>
              <div className='flex items-start gap-20'>
                  <div className='flex items-start flex-col gap-2'>
                      <span className='text-xl text-MODE1-primary font-bold'>نادي الزمالك للالعاب الرياضية</span>
                      <SocialIcons />
                      <Image src={"/Logos/Zamalek-SC.webp"} alt={"logo"} width={100} height={100} className={"w-[120px] h-[150px]"} />
                  </div>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-11'>
                    <div className='flex flex-row items-start gap-2'> }
                      {
                        Links.map((link, index) => (
                          <div key={index} className='flex flex-col items-start gap-5'>
                            <span className={`text-xl text-${"MODE1"}-secondary font-semibold`}>{link.tag}</span>
                            <ul className='flex flex-col items-start gap-4'>
                              {
                                link.LinksTags.map((link, index) => (
                                  <Link href={link} key={index} className='text-MODE1-primary'>{link}</Link>
                                ))
                              }
                            </ul>
                          </div>
                        ))
                      }
                    </div> 
                  </div>
              </div>
              <hr className={`border-[1px] border-${"MODE1"}-primary w-full my-3`} />
              <div className='flex items-center justify-between w-full'>
                <span className={`text-xl text-${"MODE1"}-primary font-semibold`}>جميع الحقوق محفوظة لصالح نادي الزمالك للالعاب الرياضية © 2022</span>
                <span className='text-base text-MODE1-primary font-semibold'>Design By : <span className={`text-${"MODE1"}-secondary font-bold`}>Sluch</span></span>
              </div>
            </div>
        </div> */}

export default Footer