import { createContext, ReactNode, useContext, useState } from "react";
import { Character } from "../pages";

interface CharactersProviderProps {
  children: ReactNode;
}

interface CharactersContextData {
  characters: Character[];
}

const CharactersContext = createContext<CharactersContextData>(
  {} as CharactersContextData
);

export function CharactersProvider({
  children,
}: CharactersProviderProps): JSX.Element {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
}

export function Characters() {
  const context = useContext(CharactersContext);

  return context;
}
