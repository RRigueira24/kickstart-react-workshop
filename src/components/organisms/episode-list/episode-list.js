import { Episode } from "@components/molecules";

import { EpisodeListWrapper } from "./episode-list.styles";

const EpisodeList = (props) => {
  const { data } = props;

  return (
    <EpisodeListWrapper>
      {data.map((character) => {
        const { id } = character;

        return <Episode data={character} key={id} />;
      })}
    </EpisodeListWrapper>
  );
};

export default EpisodeList;
