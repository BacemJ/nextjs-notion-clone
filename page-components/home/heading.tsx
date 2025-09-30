import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
function Heading() {
  return (
    <div className='max-w-3xl space-y-3'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
        Your Ideas, Documents & Workspaces In One Place. Welcome to 
        <span className='underline ml-1'>Notion.</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        The connecting workspace where
        <br/>better, faster work happens
      </h3>
      <Button >
       Get Notion free
       <ArrowRight className='w-4 h-4 ml-2'/>
      </Button>
    </div>
  )
}

export default Heading;