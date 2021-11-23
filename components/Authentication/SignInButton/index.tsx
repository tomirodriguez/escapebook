import { signInWithGoogle } from "../../../lib/firebase";

export default function SignInButton() {
  const handleSignIn = () => {
    signInWithGoogle().catch((error) => {
      console.log(error);
    });
  };

  return <button onClick={handleSignIn}>SIGN IN WITH GOOGLE</button>;
}
