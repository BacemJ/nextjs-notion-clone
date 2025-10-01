'use client'
import React, { useState, useCallback } from 'react'
import { Button } from './button'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

function CollapseButton() {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = useCallback(() => {
    const sidebar = document.querySelector<HTMLElement>('.app-left-sidebar')
    if (!sidebar) return
    sidebar.classList.toggle('is-collapsed')
    setCollapsed(prev => !prev)
  }, [])

  return (
    <Button
      type="button"
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-pressed={collapsed}
      variant="ghost"
      size="icon"
  className={collapsed ? 'absolute top-2 left-2 ml-0' : 'ml-auto'}
      onClick={toggle}
    >
      {collapsed ? <ChevronsRight /> : <ChevronsLeft />}
    </Button>
  )
}

export default CollapseButton