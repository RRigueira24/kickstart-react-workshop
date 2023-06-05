import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// Set the string key and the initial value
const watchlistAtom = atomWithStorage("watchlist", []);

const useWatchlistAtom = () => {
  const [watchlist, setWatchlist] = useAtom(watchlistAtom);

  const toggleWatchlist = (data) => {
    if (watchlist.find((el) => el.id === data.id)) {
      console.debug("watchlist updated, removed", data);
      setWatchlist(watchlist.filter((el) => el.id !== data.id));
    } else {
      console.debug("watchlist updated, added", data);
      setWatchlist([...watchlist, data]);
    }
  };

  const isViewed = (id) => {
    return watchlist.find((el) => el.id === id);
  };

  return { watchlist, isViewed, toggleWatchlist };
};

export { useWatchlistAtom };
