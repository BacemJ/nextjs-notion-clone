import { Button } from "@/components/ui/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

export default async function DocumentsPage() {
  const { userId } = await auth();
  const user = await currentUser();
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
        Welcom to {user?.firstName}&apos;s Notion
      </h2>
      <Button >
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
}