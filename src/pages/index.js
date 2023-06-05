import { useQuery } from "@tanstack/react-query";

import { CharacterList } from "@components/organisms";

import { getCharacters } from "@api/characters";

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  if (isLoading) {
    return <p>A carregar</p>;
  }

  if (isError) {
    return <p>Erro: {JSON.stringify(error)} </p>;
  }

  return <CharacterList data={data?.results ?? []} />;
};

export default Home;
