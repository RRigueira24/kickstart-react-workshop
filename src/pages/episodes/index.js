import { useQuery } from "@tanstack/react-query";

import { EpisodeList } from "@components/organisms";

import { getEpisodes } from "@api/episodes";

const Episodes = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["episodes"],
    queryFn: getEpisodes,
  });

  if (isLoading) {
    return <p>A carregar</p>;
  }

  if (isError) {
    return <p>Erro: {JSON.stringify(error)} </p>;
  }

  return <EpisodeList data={data?.results ?? []} />;
};

export default Episodes;
