"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

export default function DashNavbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="navbar bg-slate-900 flex justify-between px-[80px] max-sm:px-[40px] items-center">
      <div className=" w-[40px] h-[40px] rounded-full text-center bg-slate-900 shadow-inner shadow-slate-500 flex items-center justify-center hover:w-[44px] hover:h-[44px] transition-all ">
        <Link href="/dashboard/profile" className="btn btn-ghost text-xl">
          R
        </Link>
      </div>
      <div className="flex-none max-sm:hidden">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold hover:text-[1rem] transition-all">
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>

      <div className="sm:hidden cursor-pointer  " onClick={() => setNav((prev) => !prev)} >
        {!nav ? <HiMenuAlt3 size={35} /> : <HiX size={35} />}
      </div>
    </div>
  );
}
