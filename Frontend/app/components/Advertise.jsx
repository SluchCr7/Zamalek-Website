import Image from 'next/image'
import React from 'react'

const Advertise = () => {
  return (
    <div className='w-[75%] p-5 flex items-center mx-auto justify-center bg-MODE1-third dark:bg-[#2c2c2c] rounded-lg'>
        <Image src={'/Logos/Zamalek-SC.webp'} alt='advertise' width={80} quality={100} height={100} className='rounded-lg'/>
        <hr className='border-[1px] border-MODE1-secondary w-[2px] h-[80px] ml-4' />
          <Image src={'/Partners/zat-removebg-preview.png'} alt='advertise' quality={100} width={100} height={100} className='rounded-lg' />
    </div>
  )
}

export default Advertise