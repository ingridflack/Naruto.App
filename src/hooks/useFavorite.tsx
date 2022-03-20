import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Character } from "../pages";

interface FavoriteProviderProps {
  children: ReactNode;
}

interface FavoriteContextData {
  favorites: Character[];
  checkFavorite: (character: Character) => boolean;
  toggleFavorite: (Character: Character) => void;
}

const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData
);

const STORAGE_FAVORITE_KEY = "@FavoritesCharacters:favorites";

export function FavoriteProvider({
  children,
}: FavoriteProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const storagedFavorites = localStorage.getItem(STORAGE_FAVORITE_KEY);

    const favorites = storagedFavorites ? JSON.parse(storagedFavorites) : [];

    setFavorites(favorites);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_FAVORITE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const checkFavorite = (character: Character): boolean =>
    favorites.some((c) => c._id === character._id);

  const addFavorite = (character: Character) => {
    setFavorites((favorites: Character[]) => [...favorites, character]);
  };

  const removeFavorite = (character: Character) => {
    setFavorites((favorites) =>
      favorites.filter((c) => c._id !== character._id)
    );
  };

  const toggleFavorite = (character: Character) => {
    if (checkFavorite(character)) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        checkFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  return context;
}
