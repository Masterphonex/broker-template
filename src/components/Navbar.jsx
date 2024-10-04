import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="navbar bg-slate-900 text-white">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Broker Web
        </Link>
      </div>
      <div className="flex-none max-sm:hidden">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>

     <div className="sm:hidden">
     <DropdownMenu >
        <DropdownMenuTrigger>
          <HiMenuAlt2 size={35}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-4 py-3 bg-slate-900 text-white">
          <DropdownMenuItem>
            <Link href="/login"> Login</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/register"> Register</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
     </div>
    </div>
  );
}
