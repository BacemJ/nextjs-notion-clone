import CollapseButton from '@/components/ui/collapse-button'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

function Navigation() {
  return (
    <aside className='group/sidebar h-full v-full bg-secondary overflow-y-auto  flex flex-col z-[99999] min-h-[100vh] left-0 top-0'>
        <CollapseButton />
        
        navigation
    </aside>
  )
}

export default Navigation