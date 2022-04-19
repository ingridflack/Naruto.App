import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

import debounce from "lodash.debounce";

import { Filters, useFilter } from "../../contexts/filter";
import { Container } from "../../pages/styles";
import * as S from "./styles";

const Header = () => {
  const [search, setSearch] = useState("");
  const { setFilters } = useFilter();

  const handleSetFilters = useCallback(
    (search: string) => {
      setFilters(
        (prev: Filters = { name: "", village: "", rank: "", page: 1 }) => ({
          ...prev,
          name: search,
        })
      );
    },
    [setFilters]
  );

  const deboucedFilters = useMemo(
    () => debounce(handleSetFilters, 500),
    [handleSetFilters]
  );

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    setSearch(search);
    deboucedFilters(search);
  };

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
