import type { NextComponentType } from "next";
import Link from "../Link";
import Image from "next/image";
import { useContext } from "react";
import UserContext from "../../lib/context/UserContext";
import Loader from "../Loader";
import Menu from "./components/Menu";
import styles from "./NavBar.module.scss";

const NavBar: NextComponentType = () => {
  const { user, loaded } = useContext(UserContext);

  return (
    <header>
      <div className={`w-100 ${styles.navContainer}`}>
        <nav>
          <ul className="container d-flex jc-between ai-center">
            <li>
              <Link href="/">
                <Image src="/imgs/logo.svg" width={80} height={50} alt="Escapebook logo" />
              </Link>
            </li>

            {<li>{loaded ? user ? <Menu user={user} /> : <Link href="enter">LOGIN</Link> : <Loader />}</li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
