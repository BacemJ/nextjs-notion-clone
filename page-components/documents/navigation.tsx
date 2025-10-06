"use client";
import CollapseButton from '@/components/ui/collapse-button'
import React from 'react'
import UserItem from './user-item'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Item from './item';
import { PlusCircle, Search, Settings } from 'lucide-react';
import Router from 'next/router';
import { toast } from 'sonner';
import DocumentList from './document-list';
//import UseSearch from "@/hooks/use-search";

function Navigation() {
  //const search = UseSearch();
  const documents = useQuery(api.documents.getSideBar, {});
  const createDocument = useMutation(api.documents.createDocument); // Mutation to create a new document
  // Function to create a new document
  const handleCreateDocument = () => {
    const promise = createDocument({ title: "Untitled" }).then((documentId) =>
      Router.push(`/documents/${documentId}`)
    ); // Create a new document with a default title

    toast.promise(promise, {
      loading: "Creating A New Node...", // Show a loading toast
      success: "Node Created", // Show a success toast when done
      error: "Failed to Create Node", // Show an error toast if it fails
    });
  };
  return (
    <aside className='group/sidebar h-full v-full bg-secondary overflow-y-auto flex flex-col z-[99999] min-h-[100vh] left-0 top-0'>
      <CollapseButton className='absolute top-3 right-2 text-sm px-2 py-1 rounded hover:bg-primary/5 cursor-pointer' />
      <UserItem />
      {/* Render the Search item */}
          <Item lable="Search" icon={Search} isSearch  />
          {/* Render the Settings item */}
          <Item lable="Setting" icon={Settings} />
          {/* Render the New Page item */}
          <Item
            onClick={handleCreateDocument}
            lable="New Page"
            icon={PlusCircle}
          />
          <DocumentList />

    </aside>
  )
}

export default Navigation