import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Link from "next/link";

import debounce from "lodash.debounce";

import { Filters, useFilter } from "../../contexts/filter";
import { Container } from "../../styles/shared";
import NavBar from "./NavBar";
import * as S from "./styles";

interface HeaderProps {
  showInput?: boolean;
}

const Header = ({ showInput = true }: HeaderProps) => {
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
              <S.Image
                src="/naruto_logo.svg"
                width={125}
                height={53}
                alt="Naruto logo"
              />
            </a>
          </Link>

          {showInput && (
            <div className="input-wrapper">
              <S.Input
                onChange={handleInputChange}
                value={search}
                placeholder="Search"
              />
              <AiOutlineSearch />
            </div>
          )}

          <NavBar />
        </S.HeaderWrapper>
      </Container>
    </S.Container>
  );
};

export default Header;
