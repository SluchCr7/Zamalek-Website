'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';// Login API Call
import {useDispatch , useSelector} from 'react-redux'
import { login , logout } from '../../redux/apiCall/authCall';
const page = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const HandleLogin = (e) => {
        e.preventDefault()
        if(email === '' || password === '') {
            toast.error('Please fill all the fields')
        }
        else {
            dispatch(login({email , password}))
        }
    }
    return (
    <>
        <ToastContainer/>
        <div className='flex items-center flex-col py-7 bg-MODE1-primary dark:bg-MODE2-primary'>
            <Image src={'/Logos/Zamalek-SC.webp'} alt='logo' width={100} height={100} className={"w-[120px] h-[150px]"} />
            <h1 className='text-3xl text-MODE1-add dark:text-MODE2-add font-bold capitalize pt-3'>welcome to ZSC</h1>
            <span className='text-lg text-MODE1-add dark:text-MODE2-add font-semibold tracking-wider'>Go to in your account and enjoy</span>
            <form onSubmit={(e) => HandleLogin(e)} action="" className='flex flex-col items-start gap-5 pt-5'>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className='border-2 border-[#EDEFF2] bg-[#EDEFF2] p-5 rounded-lg w-[400px]' type="text" placeholder='Enter Your Email' />
                <div className='relative'>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border-2 border-[#EDEFF2] bg-[#EDEFF2]  p-5 rounded-lg w-[400px]' type={show ? "text" : "password"} placeholder='Enter Your Password' />
                    <span onClick={() => setShow(!show)} className='absolute top-[35%] text-2xl right-3'>
                        {show ?<BiHide /> :  <BiShow /> }
                    </span>
                </div>
                <button className='bg-MODE1-third text-MODE1-primary dark:text-MODE2-primary dark:bg-MODE2-add p-3 rounded-lg w-[400px]' type='submit'>Login</button>
            </form>
            <span className='text-lg text-MODE1-add dark:text-MODE2-add font-semibold py-3'>Don't have an account? <Link href={'/Register'} className='text-MODE1-add dark:text-MODE2-add font-semibold'>Register</Link></span>
            <div className='flex items-center gap-3 pt-5'>
                <hr className='w-[150px] border-[1px] border-MODE1-secondary' />
                <span className='text-MODE1-add dark:text-MODE2-add text-2xl uppercase'>or</span>
                <hr className='w-[150px] border-[1px] border-MODE1-secondary'/>
            </div>
            <div className='flex items-center justify-center text-center gap-4 mt-2 bg-[#EDEFF2] p-3 rounded-lg w-[400px]'>
                <FaGoogle />
                <span className='text-MODE1-add dark:text-MODE2-add text-sm font-semibold'>Sign in with Google</span>
            </div>
        </div>
      </>
  )
}

export default page