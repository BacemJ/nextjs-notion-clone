import { auth } from "@clerk/nextjs/server";
import Navigation from "../../page-components/documents/navigation";
import { redirect } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SearchCommand from "@/page-components/documents/search-command";
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return <div className="h-full flex dark:bg-[#1f1f1f]">

    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="app-left-sidebar">
        <div className="h-full w-full">
          <Navigation />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <SearchCommand />
        <main className="flex-1 h-full overflow-y-auto">
          {children}
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>

    
    
    </div>;
}