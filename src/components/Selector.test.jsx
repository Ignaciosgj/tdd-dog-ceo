import { act, fireEvent, getByTestId, render, screen, } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Selector } from "./Selector";
// import '@testing-library/jest-dom';

describe("tests for Selector component", () => {
    it("it should render nothing", () => {

        //Arrange
        render(<Selector options={[]} />)

        //Act
        const breedSelector = screen.queryByTestId('breeds-selector');
        const subBreedSelector = screen.queryByTestId('subBreeds-selector');

        //Assert
        expect(breedSelector).not.toBeInTheDocument();
        expect(subBreedSelector).not.toBeInTheDocument();
    });

    it("it should be show 3 options", () => {

        //Arrange
        const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }]
        render(<Selector options={options} />);

        //Act
        const option1 = screen.getByText('briard');
        const option2 = screen.getByText('buhund');
        const option3 = screen.getByText('bulldog');

        //Assert
        expect(option1).toBeDefined();
        expect(option2).toBeDefined();
        expect(option3).toBeDefined();
    });

    it("it should show 1 subbreed if buhund is selected options", async () => {

        //Arrange
        const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }]
        render(<Selector options={options} />)

        //Act
        const breedSelector = screen.getByTestId('breed-selector');
        fireEvent.change(breedSelector, { target: { value: 'buhund' } });
        const subBreedSelector = screen.getByTestId('subBreed-selector');
        const subBreed = screen.getByText('norwegian');

        // Assert
        expect(subBreedSelector).toBeInTheDocument();
        expect(subBreed).toBeInTheDocument();
    });

    it("it shouldn't render subBreedSelector if selectedBreed have no subBreeds", () => {

        //Arrange
        const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }];
        render(<Selector options={options} />);

        //Act
        const breedSelector = screen.getByTestId('breed-selector');
        fireEvent.change(breedSelector, { target: { value: 'briard' } });
        const subBreedSelector = screen.queryByTestId('subBreed-selector');

        //Assert
        expect(subBreedSelector).not.toBeInTheDocument();
    });

    it("it should render 3 subBreeds if selectedBreed is bulldog", () => {

        //Arrange
        const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }];
        render(<Selector options={options} />);

        //Act
        const breedSelector = screen.getByTestId('breed-selector');
        fireEvent.change(breedSelector, { target: { value: 'bulldog' } });
        const subBreedSelector = screen.queryByTestId('subBreed-selector');
        const subBreed1 = screen.getByText('boston')
        const subBreed2 = screen.getByText('english')
        const subBreed3 = screen.getByText('french')

        //Assert
        expect(subBreedSelector).toBeInTheDocument();
        expect(subBreed1).toBeInTheDocument();
        expect(subBreed2).toBeInTheDocument();
        expect(subBreed3).toBeInTheDocument();
    });

    it("it should ")
})


