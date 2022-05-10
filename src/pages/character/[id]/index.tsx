import { Fragment, MouseEvent } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import Head from "next/head";

import { Character } from "../..";
import { ImageContainer } from "../../../components/CharacterCard/styles";
import Header from "../../../components/Header";
import Image from "../../../components/Image";
import { useFavorite } from "../../../hooks/useFavorite";
import { getCharacter } from "../../../services";
import { Container } from "../../styles";
import { Main, Info, Button, HeaderWrapper, Content } from "./styles";

interface CharacterDetailsProps {
  character: Character;
}

export const CharacterDetails = ({ character }: CharacterDetailsProps) => {
  const { toggleFavorite, checkFavorite } = useFavorite();

  const isFavorite = checkFavorite(character);

  const { _id, name, avatarSrc, rank, village, age } = character;

  const sections = [
    { title: "Description", key: "description" },
    { title: "First anime appearance", key: "firstAnimeAppearance" },
    { title: "First manga appearance", key: "firstMangaAppearance" },
    { title: "Name meaning", key: "nameMeaning" },
    { title: "Notable features", key: "notableFeatures" },
  ];

  const handleFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    toggleFavorite(character);
  };
  return (
    <>
      <Head>
        <title>Details | Naruto.app</title>
      </Head>

      <Header showInput={false} />

      <Main>
        <Container>
          <HeaderWrapper>
            <ImageContainer>
              <Image src={avatarSrc} alt={name} width={150} height={150} />
            </ImageContainer>

            <Info>
              <h2>{name ? name : "Unknown name"}</h2>
              <div className="character-info">
                <p>{village ? village : "Unknown village"}</p>
                {age && <p>Age: {age}</p>}
                <p>{rank ? rank : "Unknown rank"}</p>
              </div>

              <Button onClick={handleFavorite}>
                {isFavorite ? (
                  <>
                    <AiFillHeart /> Remove favorite
                  </>
                ) : (
                  <>
                    <AiOutlineHeart /> Add favorite
                  </>
                )}
              </Button>
            </Info>
          </HeaderWrapper>
        </Container>
      </Main>

      <Container>
        <Content>
          {sections.map(({ title, key }) => {
            const content = character[key as keyof typeof character];

            if (!content) return null;

            return (
              <Fragment key={key}>
                <h4>{title}</h4>
                <p className="text">{content}</p>
              </Fragment>
            );
          })}
        </Content>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;

  try {
    const {
      data: { character },
    } = await getCharacter(id);

    return {
      props: {
        character,
      },
    };
  } catch {
    return { notFound: true };
  }
}

export default CharacterDetails;
