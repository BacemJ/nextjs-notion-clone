'use client'
import React from 'react'
import { Button } from './button';
import { ChevronsLeft } from 'lucide-react';
function collapseLeftSidebar() {
  const elements = document.querySelectorAll('.app-left-sidebar');
  elements.forEach(el => {
    el.classList.remove('app-left-sidebar');
    el.classList.add('app-left-sidebar--collapse');
  });
}

function CollapseButton() {
  return (
    <Button  variant="ghost" size="icon" className='ml-auto' onClick={collapseLeftSidebar}>
        <ChevronsLeft className="" />
        
    </Button>
  )
}

export default CollapseButton;