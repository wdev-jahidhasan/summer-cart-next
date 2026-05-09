"use client";
import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { authClient } from "@/lib/auth-client"
import Image from 'next/image';

const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user);


  // Active button related code
  const pathname = usePathname();
  const getActiveClass = (path) => {
    return pathname === path
      ? 'bg-yellow-300 text-slate-900 border-b-4 border-slate-900'
      : 'bg-yellow-300 text-slate-900';
  };
  return (
    <div className="w-full bg-linear-to-br from-orange-100 to-cyan-100 shadow-sm sticky top-0 z-50">
      <div className="navbar px-2 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
              <li><Link href="/" className={`font-semibold text-lg btn ${getActiveClass("/")}`}><IoHomeOutline /> Home</Link></li>
              <li><Link href="/products" className={`font-semibold text-lg btn ${getActiveClass("/products")}`}><AiOutlineProduct /> Products</Link></li>
              <li><Link href="/profile" className={`font-semibold text-lg btn ${getActiveClass("/profile")}`}><CgProfile /> My Profile</Link></li>
            </ul>
          </div>
          <a><span className='text-yellow-500 font-bold text-xl md:text-3xl'>Summer</span><span className=' text-sky-500 font-bold text-xl md:text-3xl' >Cart</span></a>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li><Link href="/" className={`font-semibold text-lg btn ${getActiveClass("/")}`}><IoHomeOutline /> Home</Link></li>

            <li><Link href="/products" className={`font-semibold text-lg btn ${getActiveClass("/products")}`}><AiOutlineProduct /> Products</Link></li>

            <li><Link href= {user ? "/profile" : "/login"} className={`font-semibold text-lg btn ${getActiveClass("/profile")}`}><CgProfile /> My Profile</Link></li>
          </ul>
        </div>

        {isPending ? (<span className="loading loading-dots loading-xl"></span>
        ) : user ?
        (<div className="flex items-center gap-3">
          <Image
            src={user?.image || "/avatar.png"}
            alt="user avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
          <button className="font-semibold text-lg" 
          onClick=
          {async () => {
          await authClient.signOut();
          window.location.href = "/";
          }}
          >Logout</button>
        </div>) : (
          <Link className="font-semibold text-lg" href={ "/login" }>Login</Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;