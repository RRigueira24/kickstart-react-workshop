import instance from "./config";

const getCharacters = async () => {
  return await instance
    .get("character")
    .then((e) => e.data)
    .catch((err) => console.error(err));
};

const getCharacterById = async (id) => {
  return await instance
    .get(`character/${id}`)
    .then((e) => e.data)
    .catch((err) => console.error(err));
};

export { getCharacters, getCharacterById };
