import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <div className="image-wrapper">
        <Image
          src="/naruto_logo.svg"
          width={125}
          height={53}
          alt="Naruto logo"
        />
      </div>

      <div className="input-wrapper">
        <S.Input />
        <AiOutlineSearch />
      </div>

      <S.Menu>
        <a>Home</a>
        <a>Favorites</a>
      </S.Menu>
    </S.Container>
  );
};

export default Header;
