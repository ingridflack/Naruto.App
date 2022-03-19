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
  addFavorite: (character: Character) => void;
  checkFavorite: (character: Character) => boolean;
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
    if (checkFavorite(character)) return;

    setFavorites((favorites: Character[]) => [...favorites, character]);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, checkFavorite, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  return context;
}
