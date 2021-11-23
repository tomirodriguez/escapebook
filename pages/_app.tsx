import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import UserContext from "../lib/context/UserContext";
import useUser from "../lib/hooks/useUser";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Escapebook</title>
      </Head>
      <UserContext.Provider value={user}>
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
        <footer></footer>
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
