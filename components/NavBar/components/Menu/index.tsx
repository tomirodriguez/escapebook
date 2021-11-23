import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import { auth } from "../../../../lib/firebase";
import useOnClickOutside from "../../../../lib/hooks/useOnClickOutside";
import useRouteChange from "../../../../lib/hooks/useRouteChange";
import useTimeout from "../../../../lib/hooks/useTimeout";
import User from "../../../../lib/model/User";
import Link from "../../../Link";
import styles from "./Menu.module.scss";

type PropsType = {
  user: User;
};

const Menu: FC<PropsType> = ({ user }: PropsType) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { reset, clear } = useTimeout(() => setShowTooltip(!showMenu), 600, false);
  const menuRef = useRef<HTMLUListElement>(null);

  useOnClickOutside(menuRef, () => {
    if (showMenu) setShowMenu(false);
  });

  useRouteChange(() => {
    setShowMenu(false);
    clear();
  });

  const handleAvatarClick = () => {
    setShowTooltip(false);
    setShowMenu(!showMenu);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    clear();
  };

  const handleSignOut = async () => {
    await auth.signOut();
    setShowMenu(false);
  };

  return (
    <div className={`d-flex ai-center ${styles.userInfo}`}>
      <div className={`clickable ${styles.notifications}`}>
        <FontAwesomeIcon icon={faBell} width={50} height={50} />
      </div>
      <div className={`d-flex ai-center ${styles.avatar}`} onMouseEnter={reset} onMouseLeave={handleMouseLeave}>
        <Image src={user.avatar} alt={user.name} width={50} height={50} onClick={handleAvatarClick} />
      </div>
      {
        <ul className={`d-flex flex-column card ${styles.menu}`} data-show={showMenu} ref={menuRef}>
          <li className='d-flex'>
            <Link href="/my-teams">Mis Equipos</Link>
          </li>
          <li className='d-flex'>
            <Link href="/my-rooms">Mis Salas</Link>
          </li>
          <li className='d-flex'>
            <Link href="/settings">Configuración</Link>
          </li>
          <li>
            <hr />
          </li>
          <li className='d-flex'>
            <button onClick={handleSignOut}>Salir</button>
          </li>
        </ul>
      }
      {showTooltip && (
        <div className={`${styles.toolTip}`}>
          <div>
            <b>Cuenta de Escapebook</b>
          </div>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
