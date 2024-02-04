"use client";
import { ClerkProvider, useClerk } from "@clerk/clerk-react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useEffect } from "react";
import Header from "../components/Header";

function Content() {
  

  return (
      <div className="min-h-100 flex flex-col items-center justify-center bg-white">
        <p className="mt-4 text-xl font-semibold">Content</p>
          
      </div>
    
  );
}

export default Content;
