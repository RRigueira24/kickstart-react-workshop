import { Character } from "@components/molecules";

import { CharacterListWrapper } from "./character-list.styles";

const CharacterList = (props) => {
  const { data } = props;

  return (
    <CharacterListWrapper>
      {data.map((character) => {
        const { id } = character;

        return <Character data={character} key={id} />;
      })}
    </CharacterListWrapper>
  );
};

export default CharacterList;
