import axios from "axios";

export const getAllBreeds = async () => {
    try {
        const response = await axios("https://dog.ceo/api/breeds/list/all");
        const result = response.data;
        return result;
      } catch (error) {
        throw new Error('API caida');
      }
}

export const getBreedImages = async (breed) => {
  try {
    const response = await axios(`https://dog.ceo/api/breed/${breed}/images`);
    const { message } = response.data;
    return message;
  } catch (error) {
    throw new Error('API caida');
  }
}