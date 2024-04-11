"use client";
import { ClerkProvider, useClerk } from "@clerk/clerk-react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useEffect } from "react";
import Header from "../components/Header";

function Hero() {
  return (
    <div
      className="relative h-screen  flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(/bg.jpg)`,
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-55"></div>

      <main className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
            <span className="text-white font-bold">Land of Smiles</span>
          </h2>
          <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            add more here
          </p>
        </div>
      </main>
    </div>
  );
}

export default Hero;
