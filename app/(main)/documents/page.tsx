import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import CreateDocumentButton from "../../../page-components/documents/create-document-button";

// This remains a SERVER component. All client-only hooks (useRouter, useMutation, toast) are
// moved into the CreateDocumentButton client component.
export default async function DocumentsPage() {
  const { userId } = await auth();
  const user = await currentUser();

  // Display name fallback logic (safe on the server)
  const displayName =
    user?.firstName ||
    user?.username ||
    user?.emailAddresses?.[0]?.emailAddress?.split("@")[0] ||
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
      <h2 className="text-lg font-medium">Welcome to {displayName}&apos;s Notion</h2>
      <CreateDocumentButton />
    </div>
  );
}