import Image from 'next/image'
import React from 'react'

const page = () => {
    const AltManagers = [
        {
            name: "احمد سليمان",
            img : "/Manage/AltManager1.jpg",
        },
        {
            name: "حسين السيد",
            img : "/Manage/AltManager2.jpg",
        },
        {
            name: "هاني برزي",
            img : "/Manage/AltManager3.jpg",
        },
        {
            name: "هاني شكري",
            img : "/Manage/AltManager4.jpg",
        },
        {
            name: "عمرو ادهم",
            img : "/Manage/AltManager5.jpg",
        },
        {
            name: "محمد طارق",
            img : "/Manage/AltManager5.jpg",
        }
    ]
    const KeinAltmanages = [
        {
            name: "نيرة الاحمر",
            img : "/Manage/KeinAltManager1.jpg",
        },
        {
            name: "احمد خالد حسنين",
            img : "/Manage/KeinAltManager2.jpg",
        },
        {
            name: "رامي نصوحي",
            img : "/Manage/KeinAltManager3.jpg",
        },
    ]
  return (
    <div className="flex items-center py-5 justify-center w-full flex-col gap-8 bg-MODE1-primary dark:bg-MODE2-primary">
        <span className="text-2xl mb-2 text-MODE1-secondary dark:text-MODE2-secondary font-bold tracking-[7px]">مجلس ادارة نادي الزمالك</span>
        <div className="flex items-center flex-col gap-1">
            <span className="text-MODE1-third dark:text-MODE2-third uppercase tracking-widest">رئيس مجلس الادارة</span>
            <Image src={'/Manage/President.jpg'} width={300} alt="Logo_manage" height={300} className="rounded-lg" />
            <span className="text-MODE1-third dark:text-MODE2-third text-xl">حسين لبيب</span>
        </div>
        <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center flex-col gap-1">
                <span className="text-MODE1-third dark:text-MODE2-third uppercase tracking-widest">امين الصندوق</span>
                <div className="border-[1px] border-MODE1-secondary dark:border-MODE2-secondary p-3 rounded-lg w-[300px] h-[300px]">
                </div>
                <span className="text-MODE1-third dark:text-MODE2-third text-xl">حسام المندوه</span>
            </div>
            <div className="flex items-center flex-col gap-1">
                <span className="text-MODE1-third dark:text-MODE2-third uppercase tracking-widest">نائب الرئيس</span>
                <div className="border-[1px] border-MODE1-secondary dark:border-MODE2-secondary p-3 rounded-lg w-[300px] h-[300px]">
                </div>
                <span className="text-MODE1-third dark:text-MODE2-third text-xl">هشام نصر</span>
            </div>
        </div>
        <div className="flex flex-col items-center gap-3">
            <span className="text-MODE1-third dark:text-MODE2-third uppercase tracking-widest">اعضاء المجلس (فوق السن) </span>
            <div className="grid  grid-cols-2 lg:grid-cols-6 w-full gap-3">
                {
                    AltManagers.map((manager,index) => (
                        <div key={index} className="flex items-center flex-col gap-2">
                            <div className="border-[1px] border-MODE1-secondary dark:border-MODE2-secondary p-3 rounded-lg w-[220px] h-[220px]">
                            </div>
                            <span className="text-MODE1-third dark:text-MODE2-third">{manager.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="flex flex-col items-center gap-3">
            <span className="text-MODE1-third dark:text-MODE2-third uppercase tracking-widest">اعضاء المجلس (تحت السن) </span>
            <div className="grid  grid-cols-2 lg:grid-cols-3 w-full gap-3">
                {
                    KeinAltmanages.map((manager,index) => (
                        <div key={index} className="flex items-center flex-col gap-2">
                            <div className="border-[1px] border-MODE1-secondary dark:border-MODE2-secondary p-3 rounded-lg w-[220px] h-[220px]">
                            </div>
                            <span className="text-MODE1-third dark:text-MODE2-third">{manager.name}</span>
                        </div>
                    ))
                }
            </div>    
        </div>
    </div>
  )
}

export default page