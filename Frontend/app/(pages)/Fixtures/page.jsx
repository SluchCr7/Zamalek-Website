'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { GiWhistle } from "react-icons/gi";
import { MdOutlineStadium } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const page = () => {
    const [fixtures, setFixtures] = useState([])
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState("الدوري المصري")
    useEffect(()=>{
        axios.get
            (`https://v3.football.api-sports.io/fixtures?season=2022&team=1040&league=${value == "الدوري المصري" ? "233" : value == "دوري الابطال" ? "12" : "714"}`, {
        headers: {
            // "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "37df1a748199b2c70309ba22216f0e30"
        }
        }).then((res) => {
        console.log(res.data)
            setFixtures(res.data.response)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err)
        })
    },[value])
  return (
    <div className="w-full flex flex-col bg-MODE1-primary dark:bg-MODE2-primary items-center gap-3 py-5">
        <span className="text-MODE1-add tracking-[5px] dark:text-MODE2-add font-bold text-3xl"> جدول مباريات الفريق موسم 2022</span>
        <select value={value} onChange={(e) => setValue(e.target.value)} name="" id="" className="w-[40%] p-3 border-2 border-MODE1-secondary dark:border-MODE2-secondary rounded-lg text-MODE1-secondary dark:text-MODE2-secondary bg-MODE1-primary dark:bg-MODE2-primary font-bold">
            <option value="الدوري المصري">الدوري المصري</option>
            <option value="دوري الابطال">دوري الابطال</option>
            <option value="كاس مصر">كاس مصر</option>
        </select>
        {
            loading ?
            fixtures.map((match) => {
            return (
                <div className="w-[60%] p-6 container mx-auto flex items-center justify-between gap-3">
                    <div className="flex items-start gap-3 flex-col">
                        <div className="flex items-center gap-3">
                            <span className="text-MODE1-secondary dark:text-MODE2-secondary font-bold text-xl"><IoTime /></span>
                            <span className="text-MODE1-secondary dark:text-MODE2-secondary font-bold text-lg">{new Date(match.fixture.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-MODE1-secondary dark:text-MODE2-secondary font-bold text-xl"><MdOutlineStadium /></span>
                            <span className="text-MODE1-secondary dark:text-MODE2-secondary font-bold text-lg">{match.fixture.venue.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-MODE1-secondary dark:text-MODE2-secondary font-bold text-xl"><GiWhistle /></span>
                            <span className="text-MODE1-secondary dark:text-MODE2-secondary font-bold text-lg">{match.fixture.referee}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            <Image src={match.teams.home.logo} alt="logo" width={50} height={50} className="" />
                            <span className="text-MODE1-primary dark:text-MODE2-primary bg-MODE1-third dark:bg-MODE2-third text-xl font-bold p-2 rounded-md">{match.goals.home}</span>
                        </div>
                        <Image src={match.league.logo} alt="logo" width={50} height={50} className="" />
                        <div className="flex items-center gap-3">
                            <span className="text-MODE1-primary dark:text-MODE2-primary bg-MODE1-third dark:bg-MODE2-third text-xl font-bold p-2 rounded-md">{match.goals.away}</span>
                            <Image src={match.teams.away.logo} alt="logo" width={50} height={50} className="" />
                        </div>
                    </div>
                    {/* <span className="text-MODE1-secondary dark:text-MODE2-secondary font-bold text-xl">{}</span> */}
                </div>
                )
            })
                :
                <div className='flex items-center justify-center w-[100%]'>
                    <div className='w-[80px] itemanimate flex items-center justify-center h-[80px] border-[2px] border-primary rounded-full'></div>
                </div> 
        }
    </div>
  )
}

export default page