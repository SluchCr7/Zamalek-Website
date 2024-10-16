import Image from 'next/image'
import React from 'react'

const notFound = () => {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center flex-col">
          <Image src={'/Logos/Zamalek-SC.webp'} alt="logo" width={100} height={100} className="w-[120px] h-[150px]" />
          <span className="text-3xl text-MODE1-secondary dark:text-MODE2-secondary font-bold">Page Not Found</span>
          <p className="text-base text-MODE1-third dark:text-MODE2-third font-bold">We are sorry but the page you requested was not found , please try again or return to the home page</p>
    </div>
  )
}

export default notFound