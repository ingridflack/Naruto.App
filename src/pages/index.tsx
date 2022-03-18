import Head from "next/head";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";

import { Container, FiltersContainer, CharactersWrapper } from "./styles";

import Filter from "../components/Filter";
import { getAllCharacters, getAllClans, getAllVillages } from "../services";

// --------> Mudar de lugar as interfaces
export interface Village {
  name: string;
  _id: string;
}

export interface Clan {
  name: string;
}
interface HomeProps {
  villages: Village[];
  clans: Clan[];
  characters: any;
}

export const Home = ({ villages, clans, characters }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | Naruto.app</title>
      </Head>
      <Container>
        <Header />
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
