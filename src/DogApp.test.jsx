import axios from "axios";
import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DogApp } from "./DogApp";
import { breedsMock } from "./services/breedsMock";
import * as Services from "./services/breedsService";
import * as Formatter from "./helpers/breedsFormatter";

vi.mock('axios')

describe("tests for DogApp", () => {
    it("should render", async () => {

        //Arrange 
        vi.spyOn(Formatter, 'breedsFormatter');
        vi.spyOn(Services, 'getAllBreeds');

        axios.mockResolvedValue({
            data: { message: breedsMock },
        });

        //Act
        render(<DogApp />);

        await act(async () => {
            await new Promise(resolve => setTimeout(() => {
                resolve();
            }));
        });

        const breedOptions = screen.queryAllByTestId('breedOptions');

        //Assert
        expect(Services.getAllBreeds).toHaveBeenCalledOnce();
        expect(Formatter.breedsFormatter).toHaveBeenCalledOnce();
        expect(Formatter.breedsFormatter).toHaveBeenCalledWith(breedsMock);
        expect(breedOptions).toHaveLength(98);
    });
})