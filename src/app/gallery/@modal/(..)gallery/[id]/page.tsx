'use client'

import { data } from "@/app/gallery/constants";
import Image from "next/image";
import React, { MouseEventHandler, useRef } from "react";
import { useRouter } from "next/navigation";

const ModalPreview = ({params}:{params:{id:string}}) => {

//gets referance of detailed item
  const item = data.find((i) => params.id === i.id)!;

  const router = useRouter();
  const overlay = useRef(null);

// track click event
const handleClose = (event:React.MouseEvent) => {
  if(event.target === overlay.current) {
    router.back();
  }
}

  return (
    <div  
    ref={overlay}
    onClick={handleClose} 
    className="fixed z-10 inset-0 mx-auto bg-black/60 p-10">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6" > 
      
      <Image src={item.src} alt={item.name} className='w-full object-cover aspect-square'/>

      <div className="bg-white text-black p-4">
        <h2 className='text-xl font-semibold'> { item.name } </h2>
      </div>
      
      </div>
    </div>
  )
}

export default ModalPreview