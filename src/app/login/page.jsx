
import React from 'react'
import styles from './login.module.css'
import Link from 'next/link'
import { FaLock } from "react-icons/fa6";

export default function Login() {
  return (
    <div className='bg-slate-900 w-full flex flex-col gap-8 items-center justify-center h-[89vh] overflow-y-hidden text-white'>
      <div className='text-white flex gap-5 items-center'>
      <FaLock size={60}/>
      </div>
        <form className={` sm:w-[400px] w-[300px] flex flex-col gap-6 rounded-2xl shadow-sm items-center justify-center px-5 py-5 bg-slate-900 ${styles.container} shadow-slate-950`}>
        <h1 className='text-2xl my-4 font-bold text-white'> Login</h1>

        <input name=" email" type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs bg-transparent shadow-lg  border-slate-700 text-white font-bold " />
        <input name="password" type="password"  placeholder="Password" className="input input-bordered w-full max-w-xs bg-transparent shadow-lg border border-slate-700  text-white font-bold" />
       <Link href="/dashboard"> <button className="btn btn-primary w-[120px] fonr-bold text-lg">Login</button></Link>
       <Link href="/register">Dont have An Account?, Create One</Link>
        </form>
    </div>
  )
}
