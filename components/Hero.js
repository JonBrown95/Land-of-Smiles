"use client";
import { ClerkProvider, useClerk } from "@clerk/clerk-react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useEffect } from "react";
import Header from "../components/Header";

function Hero() {
  const { signOut, user } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };

  useEffect(() => {
    console.log("User Object:", user);
  }, [user]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-thailand-blue">
        <p className="mt-4 text-xl font-semibold">
          {user ? `Welcome, ${user.primaryEmailAddress}` : "Not signed in"}
        </p>

        {user ? (
          <button
            onClick={handleSignOut}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Sign Out
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Hero;
