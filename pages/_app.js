import "../src/app/globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";



function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Header />
        <Chatbot/>
        <Component {...pageProps} />
        <Footer/>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default MyApp;
