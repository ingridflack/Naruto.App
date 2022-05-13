import { Character } from "../../../interfaces";
import { getCharacter } from "../../../services";
import CharacterDetails from "../../../views/CharacterDetails";

interface CharacterDetailsProps {
  character: Character;
}

export const CharacterDetailsPage = ({ character }: CharacterDetailsProps) => {
  return <CharacterDetails character={character} />;
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

export default CharacterDetailsPage;
