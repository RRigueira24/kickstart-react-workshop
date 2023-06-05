import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getCharacterById } from "@api/characters";

export default function Home() {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacterById(router.query.id),
    enabled: !!router.query.id,
  });

  console.log(router.query.id);

  if (isLoading) {
    return <p>loading</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  return <p>Character: {JSON.stringify(data)}</p>;
}
