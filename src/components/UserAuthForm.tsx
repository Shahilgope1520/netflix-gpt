import React from "react";
type UserAuthFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserAuthForm: React.FC<UserAuthFormProps> = ({
  handleSubmit,
  isSignIn = true,
  setIsSignIn,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[rgba(5,6,8,0.85)] p-12 z-30 absolute w-fit lg:w-3/12 mx-auto my-36  top-0 left-0 right-0 text-black"
    >
      <h1 className="text-3xl font-bold leading-normal text-white my-2">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignIn && (
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          className="p-2 my-2 w-full"
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email address"
        className="p-2 my-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-2 my-2 w-full"
      />
      <button
        type="submit"
        className="p-2 my-2 w-full  bg-[#d9232e]  text-white"
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      <p
        className="my-2 cursor-pointer  text-white"
        onClick={() => setIsSignIn((prev) => !prev)}
      >
        {isSignIn
          ? " New to Netflix? Sign Up now."
          : "Already registered? Sign In now."}
      </p>
    </form>
  );
};

export default UserAuthForm;
