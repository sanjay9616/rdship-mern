import React, { lazy } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';


const Header = () => {
  return (
    <section className="sticky top-0 w-full z-50 bg-white shadow-xl">
      <div className='flex flex-row items-center bg-white pl-4 pt-2 pr-4'>
        <button type='button'>Logo</button>
        <div className='flex flex-row items-center justify-between w-1/3 border h-8 rounded ml-32'>
          <input type="text" className='focus:outline-none focus:ring-0 focus:border-searchBorder h-full w-full rounded-l pl-2 pr-2 text-[14px]' />
          <button type='button' className='pl-4 pr-4 text-lg bg-[#b81410] text-white font-medium h-full rounded-r'>
            <CiSearch className='font-medium rounded-r' />
          </button>
        </div>
        <div className='ml-auto mr-4 flex items-center'>
          <span className='mr-2 text-[#2874f0] font-medium'>Sanjay</span>
          <Fab className='text-[#2874f0] bg-[#F2F2F2] h-[35px] w-[35px]'>
            <MdAccountCircle className='w-full h-full' />
          </Fab>
        </div>
        <div className='flex'>
          <Badge badgeContent={4} color="error" overlap="circular" className=''>
            <Fab className='text-[#2874f0] bg-[#F2F2F2] h-[45px] w-[45px] z-0'>
              <HiShoppingCart className='w-[60%] h-[60%]' />
            </Fab>
          </Badge>
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