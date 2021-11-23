import { NextPage } from "next";
import router from "next/router";
import { useContext, useEffect } from "react";
import SignInButton from "../components/Authentication/SignInButton";
import SignOutButton from "../components/Authentication/SignOutButton";
import UserContext from "../lib/context/UserContext";

const EnterPage: NextPage = () => {
  const { user, loaded } = useContext(UserContext);

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  return loaded ? <div className="container">{user ? <SignOutButton /> : <SignInButton />}</div> : null;
};

export default EnterPage;
