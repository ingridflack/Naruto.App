import {
  ChangeEvent,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Character } from "../pages";
import { filterCharacters } from "../services";

interface FilterProviderProps {
  children: ReactNode;
}

interface FilterContextData {
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;
  filters?: Filters;
  setFilters: Dispatch<SetStateAction<Filters | undefined>>;
}

export interface Filters {
  rank: string;
  name: string;
  village: string;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export function FilterProvider({ children }: FilterProviderProps): JSX.Element {
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
    <FilterContext.Provider
      value={{ characters, setCharacters, filters, setFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  return context;
}
