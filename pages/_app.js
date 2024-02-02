import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default MyApp;
