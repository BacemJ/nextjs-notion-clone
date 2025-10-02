import CollapseButton from '@/components/ui/collapse-button'

import React from 'react'

function Navigation() {
  return (
  <aside className='group/sidebar h-full v-full bg-secondary overflow-y-auto  flex flex-col z-[99999] min-h-[100vh] left-0 top-0'>
    <CollapseButton className='mt-2 ml-auto hover:bg-white/90 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md transition-colors' />
        navigation
    </aside>
  )
}

export default Navigation