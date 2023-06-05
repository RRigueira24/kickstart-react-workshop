import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getCharacterById } from "@api/characters";

const Character = () => {
  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`character-${router.query.id}`],
    queryFn: () => getCharacterById(router.query.id),
    enabled: !!router.query.id,
  });

  if (isLoading) {
    return <p>A carregar</p>;
  }

  if (isError) {
    return <p>Erro: {JSON.stringify(error)} </p>;
  }

  return <p>Character: {JSON.stringify(data)}</p>;
};

export default Character;
