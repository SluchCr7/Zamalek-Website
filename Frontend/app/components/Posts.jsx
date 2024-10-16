import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TwoRedLines from './TwoRedLines';
import { BsPinAngle } from "react-icons/bs";

const Posts = () => {
    const Post = [
        {
            img: "/Background/Photo2.jpg",
            alt : "Photo 1"
        },
        {
            img: "/Background/Photo3.jpg",
            alt : "Photo 1"
        },
        {
            img: "/Background/Photo4.jpg",
            alt : "Photo 1"
        }
    ]
    const meniPosts = [
        {
            img: "/news/461878300_1171046781329024_3642305359000513138_n.jpg",
            alt: "Photo 1",
            desc : "يد الزمالك تختتم بطولة كأس العالم للأندية بالفوز على توباتي البرازيلي"
            ,time : "3 Oct 2024"
        },
        {
            img: "/news/461878300_1171046781329024_3642305359000513138_n.jpg",
            alt: "Photo 1",
            desc : "يد الزمالك تختتم بطولة كأس العالم للأندية بالفوز على توباتي البرازيلي"
            ,time : "3 Oct 2024"
        },
        {
            img: "/news/461878300_1171046781329024_3642305359000513138_n.jpg",
            alt: "Photo 1",
            desc : "يد الزمالك تختتم بطولة كأس العالم للأندية بالفوز على توباتي البرازيلي"
            ,time : "3 Oct 2024"
        }
    ]
  return (
    <div className='flex items-center flex-col w-full py-6'>
        <div className='w-[80%] rounded-lg relative h-[400px] bg-MODE2-primary dark:bg-MODE1-primary flex flex-row items-center gap-5'>
            <div className='w-[100%] h-full relative'>
                <Carousel
                    showThumbs={true}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={4000}
                >
                    {Post.map((ele) => (
                        <Image
                            src={ele.img}
                            alt={ele.alt}
                            width={2000}
                            height={2000}
                            key={ele.alt}
                            className='w-full h-[400px] rounded-l-lg object-cover'
                        />
                    ))}
                </Carousel>
            </div>
            <div className='w-[40%] p-4 text-MODE1-primary flex flex-col gap-7 items-start dark:text-MODE2-primary left'>
                <span className='text-2xl text-MODE1-secondary dark:text-MODE2-secondary font-bold'>الزمالك بطلا للسوبر الافريقي</span>
                <p>توج الزمالك المصري بلقب كاس السوبر الاقريقي علي حساب غريمه ومنافسه التقليدي الاهلي بركلات الترجيح 4-3 بعد انتهاء المبارة بنتيجة 1-1</p>
            </div>
            <span className='absolute text-MODE1-secondary dark:text-MODE2-secondary right-[-10px] text-2xl top-[-10px]'><BsPinAngle/></span>
        </div>
        <div className='flex items-start flex-col gap-4 mt-4 left w-full'>
            {/* <span className='text-2xl text-MODE1-secondary dark:text-MODE2-secondary font-bold'>اخر الاخبار</span> */}
            <div className='grid grid-cols-3 gap-2'>
                {
                    meniPosts.map((ele , index) => (
                        <div key={index} className='flex flex-col items-start gap-1'>
                            <Image src={ele.img} alt='league' width={400} height={300} className='rounded-lg'/>
                            <span className='text-sm text-MODE1-secondary dark:text-MODE2-secondary'>{ele.time}</span>
                            <p className='text-MODE1-add dark:text-MODE2-add font-bold'>{ele.desc}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Posts