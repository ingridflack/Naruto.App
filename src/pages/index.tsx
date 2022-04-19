import { useEffect } from "react";
import ReactPaginate from "react-paginate";

import Head from "next/head";

import Alert from "../components/Alert";
import CharacterCard from "../components/CharacterCard";
import Filter from "../components/Filter";
import { Filters, useFilter } from "../contexts/filter";
import { getAllCharacters, getAllVillages } from "../services";
import {
  Container,
  FiltersContainer,
  CharactersWrapper,
  PaginationContainer,
} from "./styles";

export interface Village {
  name: string;
  _id: string;
}

export interface Character {
  _id: string;
  name: string;
  avatarSrc: string;
  description: string;
  firstAnimeAppearance: string;
  firstMangaAppearance: string;
  nameMeaning: string;
  notableFeatures: string;
  rank: string;
  village: string;
  age: string;
}

interface HomeProps {
  villages: Village[];
  initialCharacters: Character[];
}

const ranks = ["genin", "chuunin", "jounin", "kage", "unknown"].map((rank) => ({
  name: rank,
  _id: rank,
}));

export const Home = ({ initialCharacters, villages }: HomeProps) => {
  const { characters, setCharacters, isLoading, setFilters } = useFilter();

  useEffect(() => {
    setCharacters(initialCharacters);
  }, [initialCharacters, setCharacters]);

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
      <Container>
        <main>
          <FiltersContainer>
            <Filter data={villages} labelText="village" />
            <Filter data={ranks} labelText="rank" />
          </FiltersContainer>
          <CharactersWrapper isFlex={isLoading}>
            {renderContent()}
          </CharactersWrapper>
        </main>

        <PaginationContainer>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={10}
            // total / 10
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handleChangePageClick}
            containerClassName="pagination"
            activeClassName="active"
          />
        </PaginationContainer>
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
      initialCharacters: characters.results,
    },
  };
}

export default Home;
