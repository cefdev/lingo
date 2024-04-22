import { Button } from "@/components/ui/button";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <footer className="h-20 w-full border-b-2 border-slate-200 px-2">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" width={40} height={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
        {/* Show a loader while Clerk is loading */}
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        {/* Show Auth components after Clerk has been loaded */}
        <ClerkLoaded>
          {/* Show User Detail button if signed in */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          {/* If user is signed out, show Login button */}
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </footer>
  );
};
