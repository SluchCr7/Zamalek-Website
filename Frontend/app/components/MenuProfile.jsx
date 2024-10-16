import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/apiCall/authCall';
const MenuProfile = ({ menuProfile, setMenuProfile , profile , setProfile }) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
  return (
    <div className={`${menuProfile ? "flex" : "hidden"} fixed top-[80px] p-1 right-6 time flex-col items-start rounded-lg w-[250px] shadow-md shadow-gray-700 bg-MODE1-primary dark:bg-MODE2-primary  z-[2000]`}>
        <div onClick={()=> setProfile(!profile)} className='flex items-center gap-3 p-3 cursor-pointer'>
            <span className='text-MODE1-secondary dark:text-MODE2-secondary'><FaUser /></span>
            <span className='text-MODE1-third dark:text-MODE1-primary text-lg font-semibold'>Profile</span>
        </div>
        <div onClick={handleLogout} className='flex items-center gap-3 p-3 cursor-pointer'>
            <span className='text-MODE1-secondary dark:text-MODE2-secondary'><IoIosLogOut /></span>
            <span className='text-MODE1-third dark:text-MODE1-primary text-lg font-semibold'>Logout</span>
        </div>
    </div>
  )
}

export default MenuProfile