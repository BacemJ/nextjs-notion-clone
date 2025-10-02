import CollapseButton from '@/components/ui/collapse-button'
import React from 'react'

function SearchCommand() {
  return (
    <header
      className='w-full h-12 border-b flex items-center px-1'>
        <CollapseButton />
        SearchCommand
    </header>
  )
}

export default SearchCommand