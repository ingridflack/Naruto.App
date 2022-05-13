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
import { filterCharacters } from "../services";

interface FilterProviderProps {
  children: ReactNode;
}

interface FilterContextData {
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;
  filters?: Filters;
  setFilters: Dispatch<SetStateAction<Filters | undefined>>;
  isLoading: boolean;
  paginationInfo: any;
  setPaginationInfo: any;
}

export interface Filters {
  rank: string;
  name: string;
  village: string;
  page: number;
}

export interface Pagination {
  count?: number;
  pages?: number;
  next?: number;
  prev?: number;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export function FilterProvider({ children }: FilterProviderProps): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<Pagination | null>({
    count: 1,
    pages: 1,
  });
  const [filters, setFilters] = useState<Filters | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      if (!filters) return;

      try {
        setIsLoading(true);

        const { data } = await filterCharacters(filters);
        const { results, info } = data.characters;

        setCharacters(results);
        setPaginationInfo(info);
      } catch (e) {
        console.error({ e });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filters]);

  return (
    <FilterContext.Provider
      value={{
        characters,
        setCharacters,
        filters,
        setFilters,
        isLoading,
        paginationInfo,
        setPaginationInfo,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  return context;
}
