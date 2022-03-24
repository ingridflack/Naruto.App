import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Character } from "../pages";

interface CharactersProviderProps {
  children: ReactNode;
}

interface CharactersContextData {
  characters: Character[];
  setCharacters: Dispatch<Character[]>;
}

const CharactersContext = createContext<CharactersContextData>(
  {} as CharactersContextData
);

export function CharactersProvider({
  children,
}: CharactersProviderProps): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
}

export function Characters() {
  const context = useContext(CharactersContext);

  return context;
}
