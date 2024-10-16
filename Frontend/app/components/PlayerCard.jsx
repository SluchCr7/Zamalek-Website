import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PlayerCard = ({name , nameLink ,index , age , Number , img , position , country , id , Birthday , Foot , Height , Value , Club , Contact_expired , Last_Clubs }) => {
  return (
    <Link href={`/Player/${nameLink}`} className='relative w-full'>
        <Image src={img} alt='img_player' width={500} height={500} className='w-[100%] img_player'/>
        <div className='flex cont_details absolute bottom-[40%] -right-1/2 -left-1/2 flex-col items-center gap-1'>
            <span className={`text-lg text-${"MODE1"}-primary font-extrabold`}>{`#${Number}`}</span>
            <span className={`text-2xl text-${"MODE1"}-secondary dark:text-MODE2-secondary`}>{name}</span>
            <span className={`text-sm text-${"MODE1"}-secondary dark:text-MODE2-secondary`}>{position} | {country}</span>
        </div>
    </Link>
  )
}

export default PlayerCard