export type UserAuthFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};
