import React from 'react'
import { Social } from '../Players'
const SocialIcons = () => {
  return (
    <div className='flex items-center gap-7'>
        {
            Social.map((social , index) => {
                return (
                    <a className="text-MODE1-third flex items-center justify-center bg-MODE1-primary rounded-full p-2 w-[30px] h-[30px]" href={social.link} target="_blank" key={index} rel="noreferrer">
                        <span className=''>{social.icon}</span>
                    </a>
                )
            })
        }
    </div>
  )
}

export default SocialIcons