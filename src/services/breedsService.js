import axios from "axios";

export const getAllBreeds = async () => {
    const result = await axios("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      const res = response.data;
      return res
    })
    .catch((error) => {
      throw new Error("API caida");
    });
    return result
}

export const getBreedImages = async (breed) => {
  if (typeof breed !== 'string') {
    throw new Error("Parámetro no valido");
  } else {
      const result = await axios(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => {
        const res = response.data;
        return res;
      })
      .catch((error) => {
        throw new Error("API caida");
      });
      return result;
  }
}
