import { describe, expect, it } from "vitest";
import { breedsFormatter } from "./breedsFormatter";

describe("test for breedsFormatter function", () => {
    it("should return", () => {

        //Arrange
        const data = {
            "briard": [],
            "buhund": ["norwegian"],
            "bulldog": ["boston", "english", "french"]
        }

        const formatterResponse = [{breed: 'briard', subBreeds: []}, {breed:'buhund', subBreeds: ['norwegian']}, {breed: 'bulldog', subBreeds: ['boston', 'english', 'french']}];

        //Act
        const result = breedsFormatter(data);

        //Assert
        expect(result).toEqual(formatterResponse);
    });

    it("should return [] if recieved param isn't an object", () => {

        //Arrange
        const booleanParam = true;
        const nullParam = null;
        const undefinedParam = undefined;
        const arrayParam = []
        const stringParam = 'string';
        const numberParam = 1;

        //Act & Assert
        expect(breedsFormatter(booleanParam)).toEqual([]);
        expect(breedsFormatter(nullParam)).toEqual([]);
        expect(breedsFormatter(undefinedParam)).toEqual([]);
        expect(breedsFormatter(arrayParam)).toEqual([]);
        expect(breedsFormatter(stringParam)).toEqual([]);
        expect(breedsFormatter(numberParam)).toEqual([]);
    });
})