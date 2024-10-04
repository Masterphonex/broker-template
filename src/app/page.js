import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-[100vw] h-[100vh] flex flex-col gap-8 items-center justify-center bg-slate-900 text-white font-bold">
        <h1>Welcome to this Broker Webpage</h1>
        <p>Please Proceed to Login Page</p>
        <Link href="/login">
          <button className="btn btn-primary text-lg">Login</button>
        </Link>
      </div>
    </>
  );
}
