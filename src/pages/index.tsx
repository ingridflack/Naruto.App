import { useEffect } from "react";
import ReactPaginate from "react-paginate";

import Head from "next/head";

import Alert from "../components/Alert";
import CharacterCard from "../components/CharacterCard";
import Filter from "../components/Filter";
import Header from "../components/Header";
import { Filters, Pagination, useFilter } from "../contexts/filter";
import { Character, Village } from "../interfaces";
import { getAllCharacters, getAllVillages } from "../services";
import {
  Container,
  FiltersContainer,
  CharactersWrapper,
  PaginationContainer,
} from "../styles/shared";

interface HomeProps {
  villages: Village[];
  initialCharacters: Character[];
  initialPagination: Pagination[];
}

const ranks = ["genin", "chuunin", "jounin", "kage", "unknown"].map((rank) => ({
  name: rank,
  _id: rank,
}));

export const Home = ({
  initialCharacters,
  villages,
  initialPagination,
}: HomeProps) => {
  const {
    characters,
    setCharacters,
    isLoading,
    setFilters,
    paginationInfo,
    setPaginationInfo,
  } = useFilter();

  const isFlex = isLoading || !characters.length;

  useEffect(() => {
    setCharacters(initialCharacters);
    setPaginationInfo(initialPagination);
  }, [initialCharacters, initialPagination, setCharacters, setPaginationInfo]);

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;

    if (!characters.length) return <Alert>No results</Alert>;

    return characters?.map((character: any) => (
      <CharacterCard key={character.name} character={character} />
    ));
  };

  const handleChangePageClick = ({ selected }: any) => {
    setFilters(
      (filters: Filters = { name: "", village: "", rank: "", page: 1 }) => ({
        ...filters,
        page: selected + 1,
      })
    );
  };

  return (
    <>
      <Head>
        <title>Home | Naruto.app</title>
      </Head>

      <Header />
      <Container>
        <main>
          <FiltersContainer>
            <Filter data={villages} labelText="village" />
            <Filter data={ranks} labelText="rank" />
          </FiltersContainer>
          <CharactersWrapper isFlex={isFlex}>
            {renderContent()}
          </CharactersWrapper>
        </main>

        {!isFlex && (
          <PaginationContainer>
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              breakClassName="break-me"
              pageCount={paginationInfo.pages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={handleChangePageClick}
              containerClassName="pagination"
              activeClassName="active"
            />
          </PaginationContainer>
        )}
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const {
    data: { villages },
  } = await getAllVillages();

  const {
    data: { characters },
  } = await getAllCharacters();

  return {
    props: {
      villages: villages.results,
      initialPagination: characters.info,
      initialCharacters: characters.results,
    },
  };
}

export default Home;
