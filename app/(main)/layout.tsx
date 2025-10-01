import { auth } from "@clerk/nextjs/server";
import Navigation from "../../page-components/documents/navigation";
import { redirect } from "next/navigation";

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
    <Navigation />
    <main className="flex-1 h-full overflow-y-auto">
      {children}
    </main>
    </div>;
}