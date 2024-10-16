import React from 'react'
import { PlayersTeam } from '@/app/Players'
import Image from 'next/image'
const page = ({ params }) => {
    const name = params.name
    const player = PlayersTeam.find((player) => player.nameLink === name)
    const Data = [
        {
            name : "Name",
            value : player.Name
        },
        {
            name : "Country",
            value : player.Country
        },
        {
            name : "Position",
            value : player.Position
        },
        {
            name : "Number",
            value : "#" + player.Number
        },
        {
            name : "Value",
            value : player.Value
        },
        {
            name : "Contact_expired",
            value : player.Contact_expired
        },
        {
            name : "Age",
            value : new Date().getFullYear() - new Date(player.Birthday).getFullYear()
        },
        {
            name : "Height",
            value : player.Height
        },
        {
            name : "Foot",
            value : player.Foot
        },
        {
            name : "Birthday",
            value : player.Birthday
        },
        {
            name : "Club",
            value : player.Club
        },
    ]
  return (
    <div>
        {
            <div className='flex items-center justify-center gap-10 w-full px-8 py-5'>
                <div className='w-[30%]'>
                    <Image src={player.Image} alt={player.Name} width={500} height={500} className='w-[100%] img_player rounded-lg' />
                </div>
                <div className='grid grid-cols-2 gap-2 w-[60%]'>
                    {   
                        Data.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-1 items-start'>
                                    <span className='text-sm text-MODE1-add uppercase'>{data.name}</span>
                                    <span className='text-lg text-MODE1-third font-bold capitalize'>{data.value}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        }
    </div>
  )
}

export default page