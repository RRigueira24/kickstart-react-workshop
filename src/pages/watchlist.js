import { EpisodeList } from "@components/organisms";

import { useWatchlistAtom } from "@store/watchlist";

const Watchlist = () => {
  const { watchlist } = useWatchlistAtom();

  return <EpisodeList data={watchlist} />;
};

export default Watchlist;
