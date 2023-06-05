import { CharacterList } from "@components/organisms";

import { useFavoritesAtom } from "@store/favorites";

const Favorites = () => {
  const { favorites } = useFavoritesAtom();

  return <CharacterList data={favorites} />;
};

export default Favorites;
