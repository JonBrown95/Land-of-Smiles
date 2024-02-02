"use client";
import { ClerkProvider, useClerk } from "@clerk/clerk-react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useEffect } from "react";

function Index() {
  const { signOut, user } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };

  useEffect(() => {
    // Log the user object to the console when it changes
    console.log("User Object:", user);
  }, [user]);

  return (
    <div>
      <h1>Homepage - {user ? `Welcome, ${user.primaryEmailAddress}` : "Not signed in"}</h1>

      {user ? <button onClick={handleSignOut}>Sign Out</button> : <></>}
    </div>
  );
}

export default Index;
