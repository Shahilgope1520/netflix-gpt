import { useState } from "react";
import Header from "./Header";

const Login = ({ isSignInProp = true }) => {
  const [isSignIn, setIsSignIn] = useState(isSignInProp);
  return (
    <div>
      <Header />
      <div className="absolute h-full w-full">
        <img className="object-cover h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg" />
      </div>
      <form className="bg-[rgba(5,6,8,0.85)] p-12 z-30 absolute w-fit lg:w-3/12 mx-auto my-36  top-0 left-0 right-0 text-white">
        <h1 className="text-3xl font-bold leading-normal  my-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-2 my-2 w-full"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full"
        />
        <button className="p-2 my-2 w-full  bg-[#d9232e]">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 cursor-pointer" onClick={() => setIsSignIn((prev) => !prev)}>
          {isSignIn
            ? " New to Netflix? Sign Up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
