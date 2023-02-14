import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { getAllBreeds, getBreedImages } from "./breedsService";
import { breedsMock } from "./breedsMock";
import { bulldogImages } from "./bulldogImages";

vi.mock("axios");

describe("tests for Breeds services", async () => {
        it("getAllbreeds function should return breeds data", async () => {

            //Arrange
            const breeds = breedsMock;
            axios.mockResolvedValue({
                data: breedsMock,
            });
            
            //Act
            const result = await getAllBreeds();

            //Assert
            expect(result).toEqual(breeds);
        });

        it("getAllbreeds function should throw an error if API is down", async () => {

            //Arrange

            //Act 
            axios.mockImplementation(() => Promise.reject());

            //Assert
            await expect(() => getAllBreeds()).rejects.toThrowError("API caida")
        })

        it("getBreedImages function should return bulldog images", async () => {

            //Arrange
            const imagesMock = bulldogImages;
            axios.mockResolvedValue({
                data: {
                    status: 'successs',
                    message: imagesMock
                }
            })

            // Act
            const result = await getBreedImages('bulldog');

            //Assert
            expect(result).toEqual(imagesMock);
        })

        it("getBreedImages function should throw an error if API is down", async () => {

            //Arrange
            
            //Act
            axios.mockImplementation(() => Promise.reject());

            //Assert
            await expect(() => getBreedImages('bulldog')).rejects.toThrowError('API caida')
        })

        it.skip("getBreedImages function should throw an error if param isn't a string", async () => {

            //Arrange
            const param1 = true;
            const param2 = undefined;
            const param3 = []
            const param4 = {}
            const param5 = null

            //Act & Assert
            await expect(() => getBreedImages(param1)).rejects.toThrowError('API caida');
            await expect(() => getBreedImages(param2)).rejects.toThrowError('API caida');
            await expect(() => getBreedImages(param3)).rejects.toThrowError('API caida');
            await expect(() => getBreedImages(param4)).rejects.toThrowError('API caida');
            await expect(() => getBreedImages(param5)).rejects.toThrowError('API caida');
        })
})