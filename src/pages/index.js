import { useQuery } from "@tanstack/react-query";

import { getCharacters } from "@api/characters";
import { CharacterList } from "@components/organisms";

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });
  

  if (isLoading) {
    return <p>loading</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  return <CharacterList data={data?.results ?? []} />;
};

export default Home;
