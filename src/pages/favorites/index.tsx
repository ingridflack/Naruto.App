import Head from "next/head";

import Alert from "../../components/Alert";
import CharacterCard from "../../components/CharacterCard";
import Header from "../../components/Header";
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

      <Header showInput={false} />

      <Container>
        <Title>Favorites characters</Title>
        <CharactersWrapper>
          {favorites.map((character: any) => (
            <CharacterCard key={character.name} character={character} />
          ))}

          {!favorites.length && <Alert>No favorites added</Alert>}
        </CharactersWrapper>
      </Container>
    </>
  );
};

export default Favorites;
