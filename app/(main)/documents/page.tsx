import { auth } from "@clerk/nextjs/server";

export default async function DocumentsPage() {
  const { userId } = await auth();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-semibold">Welcome to your Documents!</h1>
      <p className="text-muted-foreground">
        This is a protected page. You are signed in with user ID: {userId}
      </p>
    </div>
  );
}