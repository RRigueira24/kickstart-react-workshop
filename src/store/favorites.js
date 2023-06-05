import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Set the string key and the initial value
const favoritesAtom = atomWithStorage("favorites", []);

const useFavoritesAtom = () => {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const toggleFavorite = (data) => {
    if (favorites.find((el) => el.id === data.id)) {
      console.debug("favorites updated, removed", data);
      setFavorites(favorites.filter((el) => el.id !== data.id));
    } else {
      console.debug("favorites updated, added", data);
      setFavorites([...favorites, data]);
    }
  };

  const isFav = (id) => {
    return favorites.find((el) => el.id === id);
  };

  return { favorites, isFav, toggleFavorite };
};

export { useFavoritesAtom };
