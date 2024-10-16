import React from 'react'
import Image from 'next/image'
const Ads = () => {
    const partners = [
        "/Partners/Partner.png",
        "/Partners/Partner2.png",
        "/Partners/Partner3.png",
        "/Partners/Partner4.png",
        "/Partners/Partner5.png",
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full'>
        {
            partners.map((ele , index) => (
                <div className='w-[80%] h-[80%] relative' key={index}>
                    <Image src={ele} alt='partner' width={200} height={200} className='w-[100%] h-[100%] object-cover'/>
                </div>
            ))
        }
    </div>
  )
}

export default Ads