import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "../../pages/styles";
import * as S from "./styles";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return (
    <S.Container>
      <Container>
        <S.HeaderWrapper>
          <Link href={"/"} passHref>
            <a className="image-wrapper">
              <Image
                src="/naruto_logo.svg"
                width={125}
                height={53}
                alt="Naruto logo"
              />
            </a>
          </Link>

          <div className="input-wrapper">
            <S.Input onChange={handleInputChange} value={search} />
            <AiOutlineSearch />
          </div>

          <S.Menu>
            <Link href={"/"} passHref>
              <a>Home</a>
            </Link>
            <Link href={"/favorites"}>
              <a>Favorites</a>
            </Link>
          </S.Menu>
        </S.HeaderWrapper>
      </Container>
    </S.Container>
  );
};

export default Header;
