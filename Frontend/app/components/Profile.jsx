import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
const Profile = ({profile , setProfile}) => {
  const {user} = useSelector(state => state.auth)
  return (
    <div className={`${profile ? "flex" : "hidden"} updated_menu`}>
      <div className='flex flex-col items-center gap-5 w-[500] p-10 bg-MODE1-primary dark:bg-MODE2-primary rounded-lg'>
        <div className="flex items-center flex-col gap-3">
          <input className="hidden" type="file" name="" id="file" />
          <label htmlFor="file">
            <Image src={user.profilePhoto.url} alt="profilePhoto" width={70} height={70} className="rounded-full" />
          </label>
          <span className='text-MODE1-third dark:text-MODE2-third cursor-pointer'>Upload</span>
        </div>
        <span className='text-sm text-MODE1-secondary dark:text-MODE2-secondary font-bold'>{user.name}</span>
      </div>
    </div>
  )
}

export default Profile