import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SignOrAct() {
  return (
    <div>
    {/* className="flex items-center gap-2" */}
      <SignedOut>
        {/*<SignInButton mode="modal">
          <Button >
            Get Notion free
            <ArrowRight className='w-4 h-4 ml-2'/>
          </Button>
        </SignInButton>*/}
        <SignUpButton mode="modal">
          <Button >
            Get Notion free
            <ArrowRight className='w-4 h-4 ml-2'/>
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Button asChild>
          <Link href="/documents">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </SignedIn>
    </div>
  );
}