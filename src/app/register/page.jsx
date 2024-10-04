import React from 'react'
import { FaDoorOpen  } from "react-icons/fa6";
import styles from './register.module.css'
import Link from 'next/link';


export default function Register() {
  return (
    <div className='bg-slate-900 w-full flex flex-col gap-8 items-center justify-center   text-white'>
    <div className='text-white flex gap-5 items-center'>
    <FaDoorOpen size={60}/>
    </div>
      <form className={` sm:w-[400px] w-[300px] flex flex-col mb-4 gap-6 rounded-2xl shadow-sm items-center justify-center px-5 py-5 bg-slate-900 ${styles.container} shadow-slate-950`}>
    <h1 className='text-3xl font-bold text-white my-4'>Register</h1>

      <input name="fullname" type="text" placeholder="Fullname" className="input input-bordered w-full max-w-xs bg-transparent shadow-lg  border-slate-700 text-white font-bold " />
      <input name="username" type="text" placeholder="username" className="input input-bordered w-full max-w-xs bg-transparent shadow-lg  border-slate-700 text-white font-bold " />
      <input name=" email" type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs bg-transparent shadow-lg  border-slate-700 text-white font-bold " />
      <input name="password" type="password"  placeholder="Password" className="input input-bordered w-full max-w-xs bg-transparent shadow-lg border border-slate-700  text-white font-bold" />
     <Link href="/dashboard"> <button className="btn btn-primary w-[120px] fonr-bold text-lg">Register</button></Link>
     <Link href="/login"> Already have an Account?, Login Now</Link>
      </form>
  </div>
  )
}
