'use client'
import Image from 'next/image'
import React from 'react'
import {ChampionsZsc} from '../Players'
import ChampionCard from './ChampionCard'
import { useEffect, useState } from 'react'
const Champions = () => {
    const [open , setOpen] = useState(false)
    return (
    <>      
        <div className='flex flex-col lg:flex-row items-center gap-8 justify-center w-full'>
            <div className='w-[100%] lg:w-[50%]'>
                <Image src={'/images/Champions Musium.jpg'} alt='musiem'
                    width={500} height={500} className='rounded-lg w-[100%]'/>
            </div>
            <div className='grid grid-cols-2 gap-4 w-[100%] lg:w-[50%]'>
                {
                    ChampionsZsc.map((player, index) => (
                        <ChampionCard key={index} url={player.url} name={player.name} x={player.x} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Champions