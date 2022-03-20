import Head from "next/head";
import CharacterCard from "../../components/CharacterCard";
import { useFavorite } from "../../hooks/useFavorite";
import { CharactersWrapper, Container } from "../styles";

import { Title } from "./styles";

const Favorites = () => {
  const { favorites } = useFavorite();
  return (
    <>
      <Head>
        <title>Favorites | Naruto.app</title>
      </Head>

      <Container>
        <Title>Favorites characters</Title>
        <CharactersWrapper>
          {favorites.map((character: any) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </CharactersWrapper>
      </Container>
    </>
  );
};

export default Favorites;
