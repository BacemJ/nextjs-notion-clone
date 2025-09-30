"use client"
import Logo from '@/components/logo'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { cn } from '@/lib/utils'
import React from 'react'
import UseScrollTop from '../hooks/use-scroll-top';

function Navbar() {
  const scrolled = UseScrollTop(); 
  return (
    <div
    className={cn(
      "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full h-16 py-4",
      scrolled && "shadow-sm border-b"
    )}>
      <Logo />
      <div
        className='md:ml-auto md:justify-end flex justify-between
        items-center md:w-fit gap-x-2 w-full '
      >
        <ModeToggle />
      </div>
      
    </div>
  )
}

export default Navbar