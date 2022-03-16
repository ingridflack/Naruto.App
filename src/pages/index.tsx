import { gql } from "@apollo/client";
import client from "../../apollo-client";

import Head from "next/head";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";

import { Container, CharactersWrapper } from "./styles";
import VillagesFilter from "../components/Filters/VillagesFilter";
import ClansFilter from "../components/Filters/ClansFilter";

// --------> Mudar de lugar as interfaces
interface Village {
  name: string;
  _id: string;
}

export interface Villages {
  villages: Village[];
}

interface Clan {
  name: string;
}
export interface Clans {
  clans: Clan[];
}
interface HomeProps {
  villages: Village[];
  clans: Clan[];
}

export const Home = ({ villages, clans }: HomeProps) => {
  console.log(villages, clans);

  const characters = [
    {
      name: "Aburame Shibi",
      village: "leaf village",
      avatarSrc: "https://narutoql.s3.amazonaws.com/Aburame2.jpg",
    },
    {
      name: "Aburame Shibi 2",
      village: "leaf village",
      avatarSrc: "https://narutoql.s3.amazonaws.com/Aburame2.jpg",
    },
    {
      name: "Aburame Shibi 3",
      village: "leaf village",
      avatarSrc: "https://narutoql.s3.amazonaws.com/Aburame2.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Home | Naruto.app</title>
      </Head>
      <Container>
        <Header />
        <main>
          <VillagesFilter villages={villages} />
          <ClansFilter clans={clans} />
          <CharactersWrapper>
            {characters.map((character) => (
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
  } = await client.query({
    query: gql`
      query Villages {
        villages {
          results {
            _id
            name
          }
        }
      }
    `,
  });

  const {
    data: { clans },
  } = await client.query({
    query: gql`
      query Clans {
        clans {
          results {
            name
            description
            avatarSrc
            village
          }
        }
      }
    `,
  });

  console.log({ villages, clans });

  return {
    props: {
      villages: villages.results,
      clans: clans.results,
    },
  };
}

export default Home;
