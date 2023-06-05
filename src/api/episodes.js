import instance from "./config";

const getEpisodes = async () => {
  return await instance
    .get("episode")
    .then((e) => e.data)
    .catch((err) => console.error(err));
};

const getEpisodeById = async (id) => {
  return await instance
    .get(`episode/${id}`)
    .then((e) => e.data)
    .catch((err) => console.error(err));
};

export { getEpisodes, getEpisodeById };
