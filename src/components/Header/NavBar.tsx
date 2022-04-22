import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import * as S from "./styles";

const NavBar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleHideMenu = () => {
    if (showMenu) setShowMenu(false);
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useOnClickOutside(navbarRef, handleHideMenu);

  return (
    <S.Navbar ref={navbarRef}>
      <S.ToggleMenuButton type="button" onClick={handleToggleMenu}>
        <GiHamburgerMenu />
      </S.ToggleMenuButton>

      <S.Menu show={showMenu}>
        <Link href={"/"} passHref>
          <a onClick={handleHideMenu}>Home</a>
        </Link>
        <Link href={"/favorites"}>
          <a onClick={handleHideMenu}>Favorites</a>
        </Link>
      </S.Menu>
    </S.Navbar>
  );
};

export default NavBar;
