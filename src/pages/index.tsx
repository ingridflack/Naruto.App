import Head from "next/head";
import CharacterCard from "../components/CharacterCard";

import { Container, FiltersContainer, CharactersWrapper } from "./styles";

import Filter from "../components/Filter";
import { getAllCharacters, getAllVillages } from "../services";
import { useEffect } from "react";
import { useFilter } from "../contexts/filter";

// --------> Mudar de lugar as interfaces
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

const ranks = ["genin", "chuunin", "jounin", "kage", "sannin"].map((rank) => ({
  name: rank,
  _id: rank,
}));

export const Home = ({ initialCharacters, villages }: HomeProps) => {
  const { characters, setCharacters } = useFilter();

  useEffect(() => {
    setCharacters(initialCharacters);
  }, [initialCharacters, setCharacters]);

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
          <CharactersWrapper>
            {characters?.map((character: any) => (
              <CharacterCard key={character.name} character={character} />
            ))}
          </CharactersWrapper>
        </main>
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
