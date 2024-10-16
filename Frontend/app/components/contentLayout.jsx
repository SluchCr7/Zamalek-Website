'use client'
import React from 'react'
import { MdMusicNote } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Profile from './Profile';
import {useState} from "react"
import Image from 'next/image';
const ContentLayout = ({ children }) => {
  const [profile , setProfile] = useState(false)
    const handleMusic = () => {
        const audio = document.querySelector("audio");
        if (audio.paused) {
        audio.play();
        } else {
        audio.pause();
        }
    }
    return (
      <div className="relative">
        <Provider store={store}>
          <Header profile={profile} setProfile={setProfile}/>
          <span onClick={handleMusic} className="text-MODE1-primary dark:text-MODE2-primary z-[999] text-2xl fixed top-24 left-5 iconMatch bg-MODE1-third dark:bg-MODE2-third w-[30px] h-[30px] rounded-full flex items-center justify-center"><MdMusicNote  className="text-2xl"/></span>
          <audio className="hidden">
            <source 
              src="/Additions/الفانلة البيضا بخطين حمر انا هفضل أحبها طول العمر.mp3"
              type="audio/mpeg"
            />
          </audio>
          <Profile profile={profile} setProfile={setProfile} />
          {children}
          <Footer/>
        </Provider>
      </div>
  )
}

export default ContentLayout