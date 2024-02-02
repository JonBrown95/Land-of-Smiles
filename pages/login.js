"use client"
import { SignIn, SignUp } from '@clerk/clerk-react';


function signIn() {
  return (
    <div>
      <h1>Login Page</h1>
      <SignIn />
      
    </div>
  );
}

export default signIn
