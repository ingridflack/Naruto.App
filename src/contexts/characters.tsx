import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Character } from "../pages";
import { filterCharacters, getAllCharacters } from "../services";

interface CharactersProviderProps {
  children: ReactNode;
}

interface CharactersContextData {
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;
  filters?: Filters;
  setFilters: Dispatch<SetStateAction<Filters | undefined>>;
}

export interface Filters {
  // clan: string;
  name: string;
  village: string;
}

const CharactersContext = createContext<CharactersContextData>(
  {} as CharactersContextData
);

export function CharactersProvider({
  children,
}: CharactersProviderProps): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filters, setFilters] = useState<Filters | undefined>();

  useEffect(() => {
    (async function () {
      if (!filters) return;

      try {
        const data = await filterCharacters(filters);
        setCharacters(data.data.characters.results);

        console.log(data);
      } catch (e) {
        console.log({ e });
      }
    })();
  }, [filters]);

  return (
    <CharactersContext.Provider
      value={{ characters, setCharacters, filters, setFilters }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

export function Characters() {
  const context = useContext(CharactersContext);

  return context;
}
