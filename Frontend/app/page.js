'use client'
import Link from "next/link";
import NextMatch from "./components/NextMatch";
import { IoFootball } from "react-icons/io5";
import { useState } from "react";
import Posts from "./components/Posts";
import PlayersList from "./components/PlayersList";
import TwoRedLines from "./components/TwoRedLines";
import Ads from "./components/Ads";
import { MdMusicNote } from "react-icons/md";
import Details from "./components/Details";
import Champions from "./components/Champions";
import Match from "./components/Match";
import Advertise from "./components/Advertise";
export default function Home() {
  const [view, setView] = useState(false)

  return (
    <div className="bg-MODE1-primary dark:bg-MODE2-primary">
      <div className="container mx-auto">
        {/* <NextMatch view={view} setView={setView} />
        <span className="text-MODE1-primary dark:text-MODE2-primary dark:bg-MODE2-third z-[999] text-3xl fixed top-24 right-5 iconMatch bg-MODE1-third w-[30px] h-[30px] rounded-full flex items-center justify-center"onClick={()=> setView(true)}><IoFootball  className="text-3xl"/></span> */}
        <Posts />
        <TwoRedLines />
        <Match/>
        <TwoRedLines/>
        <PlayersList />
        <TwoRedLines/>
        <Advertise  />
        <TwoRedLines/>
        <Details  />
        <TwoRedLines />
        <Champions  />
        <TwoRedLines />
        <Ads  />
      </div>
    </div>
  );
}
