"use client";
import CollapseButton from '@/components/ui/collapse-button'
import React from 'react'
import UserItem from './user-item'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

function Navigation() {
  const documents = useQuery(api.documents.getSideBar, {});

  return (
    <aside className='group/sidebar h-full v-full bg-secondary overflow-y-auto flex flex-col z-[99999] min-h-[100vh] left-0 top-0'>
      <CollapseButton className='absolute top-3 right-2 hover:bg-white/90 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md transition-colors' />
      <UserItem />
      <div className='mt-4 space-y-1'>
        {documents === undefined && (
          <p className='text-xs text-muted-foreground italic'>Loading documents...</p>
        )}
        {documents?.length === 0 && (
          <p className='text-xs text-muted-foreground italic'>No documents yet.</p>
        )}
        {documents?.map((doc) => (
          <p key={doc._id} className='text-sm truncate px-2 py-1 rounded hover:bg-primary/5 cursor-pointer'>
            {doc.title || 'Untitled'}
          </p>
        ))}
      </div>
    </aside>
  )
}

export default Navigation