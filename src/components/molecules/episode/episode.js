import Link from "next/link";

import { useWatchlistAtom } from "@store/watchlist";

import * as Styles from "./episode.styles";

const Episode = (props) => {
  const { name, air_date, episode, characters, id } = props.data;

  const { toggleWatchlist, isViewed } = useWatchlistAtom();

  return (
    <Styles.CardContainer as={Link} href={`/episodes/${id}`}>
      <Styles.CardHeader>
        <Styles.CardTitle>{name}</Styles.CardTitle>
        <Styles.CardFavButton
          onClick={(e) => {
            e.preventDefault();
            toggleWatchlist(props.data);
          }}
        >
          {isViewed(id) ? "✓" : "☐"}
        </Styles.CardFavButton>
      </Styles.CardHeader>
      <p>Air date: {air_date}</p>
      <p>Episode: {episode}</p>
    </Styles.CardContainer>
  );
};

export default Episode;
