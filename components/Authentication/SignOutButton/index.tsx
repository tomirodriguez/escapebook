import { auth } from "../../../lib/firebase";

export default function SignOutButton() {
  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      console.log(error);
    });
  };

  return <button onClick={handleSignOut}>SIGN OUT</button>;
}
