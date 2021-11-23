import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { UserData } from "../context/UserContext";
import { auth } from "../firebase";
import User from "../model/User";

const useUser = (): UserData => {
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFromAuth) => {
      if (userFromAuth && userFromAuth.displayName && userFromAuth.photoURL) {
        setUser({ name: userFromAuth.displayName, avatar: userFromAuth.photoURL, email: userFromAuth.email || "" });
      } else {
        setUser(null);
      }
      setLoaded(true);
    });

    return unsubscribe;
  }, []);

  return { user, loaded };
};

export default useUser;
