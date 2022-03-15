import Head from "next/head";
import CharacterCard from "./components/CharacterCard";

export const Home = () => {
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
      <main>
        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </main>
    </>
  );
};

export default Home;
