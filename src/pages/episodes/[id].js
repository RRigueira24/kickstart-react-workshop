import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { Text } from "@components/atoms";
import { CharacterList } from "@components/organisms";

import { getEpisodeById } from "@api/episodes";
import { getCharacterById } from "@api/characters";

const Episode = () => {
  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`episode-${router.query.id}`],
    queryFn: () => getEpisodeById(router.query.id),
    enabled: !!router.query.id,
  });

  const charactersIds = data?.characters
    .map((url, index) => {
      return url.split("/").reverse()[0];
    })
    .join(",");

  const {
    data: characterData,
    isLoading: isLoadingCharacter,
    isError: isErrorCharacter,
    error: errorCharacter,
  } = useQuery({
    queryKey: [`characters-by-episode-${router.query.id}`],
    queryFn: () => getCharacterById(charactersIds),
    enabled: !!charactersIds?.length,
  });

  if (isLoading || isLoadingCharacter) {
    return <p>A carregar</p>;
  }

  if (isError || isErrorCharacter) {
    return <p>Erro: ${JSON.stringify(error || errorCharacter)}</p>;
  }

  return (
    <>
      <Text type="Episode" data={data} />
      <CharacterList data={characterData ?? []} />
    </>
  );
};

export default Episode;
