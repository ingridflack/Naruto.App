import Head from "next/head";
import CharacterCard from "../components/CharacterCard";

import { Container, FiltersContainer, CharactersWrapper } from "./styles";

import Filter from "../components/Filter";
import { getAllCharacters, getAllClans, getAllVillages } from "../services";
import { useFavorite } from "../hooks/useFavorite";
import { Characters } from "../contexts/characters";

// --------> Mudar de lugar as interfaces
export interface Village {
  name: string;
  _id: string;
}

export interface Clan {
  name: string;
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
  clans: Clan[];
  characters: Character[];
}

export const Home = ({ villages, clans, characters }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | Naruto.app</title>
      </Head>
      <Container>
        <main>
          <FiltersContainer>
            <Filter data={villages} labelText="village" />
            <Filter data={clans} labelText="clan" />
          </FiltersContainer>
          <CharactersWrapper>
            {characters.map((character: any) => (
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
    data: { clans },
  } = await getAllClans();

  const {
    data: { characters },
  } = await getAllCharacters();

  return {
    props: {
      villages: villages.results,
      clans: clans.results,
      characters: characters.results,
    },
  };
}

export default Home;
