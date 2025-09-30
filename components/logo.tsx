import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
const font = Poppins({
  subsets: ['latin'],
  weight:["400","600"],
  
})
function Logo() {
  return (
          <div className='hidden md:flex items-center gap-x-2'>
            <Image
             src={"/e-logo.svg"}
             alt="logo"
             height={40}
             width={40}
             className='dark:hidden'
            />
    
            <Image
              src={"/dark-logo.svg"}
              alt="logo"
              height={40}
              width={40}
              className='dark:block hidden'
            />
            <p className={cn(font.className,"font-semibold whitespace-nowrap")}>Notion clone</p>
          </div>
    
  )
}

export default Logo;