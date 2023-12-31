"use client";

import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter()
  const logOut = () => {
    router.push('/login')
  }
  return (
    <section className="sticky top-0 w-full z-50 bg-white shadow-xl">
      <div className='flex flex-row items-center bg-white pl-4 pt-2 pr-4'>
        <button type='button'>Logo</button>
        <div className='flex flex-row items-center justify-between w-1/3 border h-8 rounded ml-32'>
          <input type="text" className='focus:outline-none focus:ring-0 focus:border-searchBorder h-full w-full rounded-l pl-2 pr-2 text-[14px]'/>
          <button type='button' className='pl-4 pr-4 text-lg bg-[#b81410] text-white font-medium h-full rounded-r'>
            <CiSearch className='font-medium rounded-r' />
          </button>
        </div>
        <div className='ml-auto mr-4 flex items-center'>
          <span className='mr-2 text-[#2874f0] font-medium'>Sanjay</span>
          <button onClick={() => logOut()} type='button' className='h-8 w-8 flex items-center justify-center text-3xl rounded-full bg-[#F2F2F2] text-[#2874f0] shadow-[rgba(0,_0,_0,_16%)_0px_3px_6px] focus:outline-none focus:ring-0'>
            <MdAccountCircle />
          </button>
        </div>
        <div className='flex'>
          <span className='relative left-14 bg-[#b81410] h-5 w-5 rounded-full flex items-center justify-center text-white text-xs font-medium z-10'>3</span>
          <button type='button' className='flex items-center justify-center h-11 w-11 text-2xl rounded-full bg-[#F2F2F2] text-[#2874f0] shadow-[rgba(0,_0,_0,_16%)_0px_3px_6px] focus:outline-none focus:ring-0'>
            <HiShoppingCart />
          </button>
        </div>
      </div>
      <div className='flex flex-row items-center justify-around pl-4 pr-4 mt-2 bg-[#F2F2F2]'>
        <button type='button'>Grocery</button>
        <button type='button'>Medicine</button>
        <button type='button'>Home & Furniture</button>
        <button type='button'>Fashion</button>
        <button type='button'>Electronic</button>
        <button type='button'>Agricultural</button>
      </div>
    </section>
  )
}

export default Header