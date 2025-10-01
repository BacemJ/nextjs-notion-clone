import { auth } from "@clerk/nextjs/server";
import Navigation from "../../page-components/documents/navigation";
import { redirect } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
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
      <ResizablePanel>
        <Navigation />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <main className="flex-1 h-full overflow-y-auto">
          {children}
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>

    
    
    </div>;
}