"use client"
import React, { useState } from 'react'
import Popup from '../Popup';
import Image from 'next/image';

export default function Hero() {
        const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
    <section onClick={()=>{setIsFormOpen(true)}} className="w-full ">
  <Image
  height={100} width={100}
    src="/inquiry/banner1.webp"
    alt="RO Banner"
    className="w-full hidden md:block h-full md:h-[80vh] object-cover"
  />
  <Image
    src="/inquiry/mob.webp"
    alt="RO Banner"
    height={100} width={100}
    className="w-full md:hidden  h-[40vh] object-cover"
  />
</section>


 {isFormOpen && (                   
      <Popup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}/>
         )}
    </>
  )
}
