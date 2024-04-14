import { Button } from "@/components/ui/button";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h--[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice and master new languages with Lingo.
        </h1>
        {/* Show a loader while Clerk is loading */}
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        {/* Show Auth components after Clerk has been loaded */}
        <ClerkLoaded>
          {/* Show SignIn and SignUp buttons if the user hasn't signed in yet */}
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="secondary" className="w-full">
                Get Starter
              </Button>
            </SignUpButton>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="primaryOutline" className="w-full">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          {/* Show button to Learning page if the user is already signed in */}
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">Continue Learning</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
}
