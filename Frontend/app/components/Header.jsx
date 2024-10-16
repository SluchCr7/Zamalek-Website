'use client'
import React, { useEffect , useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import Allsposrts from './Allsposrts';
import {useSelector} from 'react-redux'
import { Social } from '../Players';
import MenuProfile from './MenuProfile';
const Header = ({profile , setProfile}) => {
  const [header, setHeader] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [menu, setMenu] = useState(false)
  const [menuProfile, setMenuProfile] = useState(false)
  const { user } = useSelector(state => state.auth)
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/Login") { 
      setHeader(true)
    }
  }, [])
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") setDarkMode(true)
  }, [])
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])
  useEffect(() => {
    console.log(user)
  },[user])
  return (
    <div className={`${header ? "hidden" : "flex"} sticky z-[999] bg-MODE1-primary dark:bg-MODE2-primary  top-0 flex-col items-center justify-center w-full p-3 shadow-lg dark:shadow-sm dark:shadow-MODE2-third `}>
      <>
        <div className='Links relative flex items-center gap-5 w-full justify-center text-MODE1-third dark:text-MODE2-third font-black text-xl'>
            <Link href={"/Players"}>اللاعبون</Link>
            <Link href={"/News"}>الاخبار</Link>
            <Link href={"/Table"}>الترتيب</Link>
            <Link href={"/History"}>تاريخ</Link>
            <Link href={"/"} className='Logo'>
                <Image src={darkMode?"/Logos/images.png" : "/ZSC.Cl.png"} alt={"logo"}
                    width={100} height={100} className={"w-[60px] h-[60px]"}
                />
            </Link>
            <Link href={"/Fixtures"}>النتائج</Link>
            <Link href={"/Manage"}>الادارة</Link>
            <div className="relative">
              <span className="cursor-pointer" onClick={() => setMenu(!menu)}>العاب الصالات</span>
              <Allsposrts menu={menu} />
            </div>
            <div className='flex items-center absolute left-5 gap-3'>
            <span
              onClick={() => setDarkMode(!darkMode)}
              className='text-3xl text-MODE1-third dark:text-MODE2-third'>
              {darkMode ? <CiLight /> : <CiDark />}
            </span>
            </div>
            <div className='flex items-center absolute right-5 gap-3'>
            {
              user
                ?
                <div className='relative'>
                  <Image src={user.profilePhoto.url} onClick={() => setMenuProfile(!menuProfile)} alt={user.name} width={40} height={40} className={"rounded-full"} /> 
                  <MenuProfile profile={profile} setProfile={setProfile} menuProfile={menuProfile} setMenuProfile={setMenuProfile} />
                </div>
              
                : <button className='text-base border-[1px] border-MODE1-third dark:border-MODE2-third rounded-sm p-2 text-MODE1-third dark:text-MODE2-third'><Link href={'/Login'}>تسجيل دخول</Link></button>
              }
            </div>
        </div>
        </>
    </div>
  )
}

export default Header