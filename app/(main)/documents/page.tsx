

import { Button } from "@/components/ui/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import CollapseButton from "@/components/ui/collapse-button";

export default async function DocumentsPage() {
  const { userId } = await auth();
  const user = await currentUser();
  
  // Get the display name with fallbacks
  const displayName = user?.firstName || 
                     user?.username || 
                     user?.emailAddresses?.[0]?.emailAddress?.split('@')[0] || 
                     "User";
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center space-y-4">

      <Image
        src={"/images/empty-white.svg"}
        width={300}
        height={300}
        alt={"empty"}
        className="dark:hidden"
      />
      <Image
        src={"/images/empty-dark.svg"}
        width={300}
        height={300}
        alt={"empty"}
        className="dark:block hidden"
      />
      <h2 className="text-lg font-medium">
        Welcome to {displayName}&apos;s Notion
      </h2>
      {/* Debug: Let's see what user data is available */}
      {/* <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded max-w-md overflow-auto">
        {JSON.stringify(user, null, 2)}
      </pre> */}
      <Button >
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
}