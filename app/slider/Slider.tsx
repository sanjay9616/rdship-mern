"use client"
import React, { useState } from 'react'

function Slider() {
  const [refresh,setRefresh] = useState();
  const [currentImage,setImage] = useState<number>(0);   
   
  let imageList:Array<string> = ["/aeroplane.jpg","/mobile.jpg"];
  const leftHandler = (e:any)=>{
    let index = (currentImage - 1 ) % imageList.length; 
    console.log("left click index=",index)
    setImage(Math.abs(index)); 
  } 
  const rightHandler = (e:any)=>{
    let index = (currentImage + 1 ) % imageList.length; 
    console.log("right click index=",index)

    setImage(Math.abs(index)); 
  }
  
  return (
    <div className=' mt-2 w-[100%] h-[200px] bg-white '>    
    <div className='relative'>
      <div onClick={leftHandler} id="slideLeft" className=' bg-white w-[70px] h-[50px] center absolute left-0 top-[70px] '>Left</div>
      <div onClick={rightHandler} id="right" className=' bg-white w-[70px] h-[50px] center absolute right-0 top-[70px] ' >right</div>
      <img src={imageList[currentImage]} className='w-[100%] h-[200px]'></img>
    </div>
  </div>
  )
}

export default Slider