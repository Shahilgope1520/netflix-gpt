import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { authBackgroundImage } from "../utils/constant";
import UserAuthForm from "./UserAuthForm";

const UserAuthentication = ({ isSignInProp = true }) => {
  const [isSignIn, setIsSignIn] = useState(isSignInProp);
  const handleSignIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  const handleSignUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement; // Cast the target to a form element
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    if (isSignIn) {
      handleSignIn(email, password);
      return;
    }
    handleSignUp(email, password);
  };
  return (
    <div>
      <Header />
      <div className="absolute h-full w-full">
        <img
          className="object-cover h-full w-full"
          src={authBackgroundImage}
          alt="Netflix promotional banner showing a perspective view"
        />
      </div>
      <UserAuthForm
        handleSubmit={handleSubmit}
        isSignIn={isSignIn}
        setIsSignIn={setIsSignIn}
      />
    </div>
  );
};

export default UserAuthentication;
