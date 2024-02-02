"use client";
import { ClerkProvider, useClerk } from "@clerk/clerk-react";
import { SignIn, SignUp } from "@clerk/clerk-react";

function Index() {
  const { signOut, user } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div>
      <h1>Homepage - {user ? `Welcome, ${user}` : "Not signed in"}</h1>

      {user ? <button onClick={handleSignOut}>Sign Out</button> : <></>}
    </div>
  );
}

export default Index;
