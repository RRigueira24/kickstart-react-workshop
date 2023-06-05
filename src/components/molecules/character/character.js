import Link from "next/link";

import { useFavoritesAtom } from "@store/favorites";

import * as Styles from "./character.styles";

const Character = (props) => {
  const { title, image, id, status, species, gender, type } = props.data;

  const { isFav, toggleFavorite } = useFavoritesAtom();

  return (
    <Styles.CardContainer as={Link} href={`/characters/${id}`}>
      <img src={image} alt={title} />
      <Styles.CardHeader>
        <Styles.CardTitle>{title}</Styles.CardTitle>
        <Styles.CardFavButton
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(props.data);
          }}
        >
          {isFav(id) ? "★" : "☆"}
        </Styles.CardFavButton>
      </Styles.CardHeader>
      <p>Status: {status}</p>
      <p>Type: {type}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </Styles.CardContainer>
  );
};

export default Character;
