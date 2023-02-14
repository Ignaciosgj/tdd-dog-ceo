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

    it("it should render a list of selected breeds", () => {

        //Arrange
        const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }];
        render(<Selector options={options} />);

        //Act
        const breedSelector = screen.queryByTestId('breed-selector');
        const addButton = screen.queryByTestId('add-button');

        fireEvent.change(breedSelector, { target: { value: 'buhund' } });

        const subBreedSelector = screen.queryByTestId('subBreed-selector');

        fireEvent.change(subBreedSelector, { target: { value: 'norwegian' } });

        fireEvent.click(addButton);

        const removeButton = screen.queryByTestId('remove-button');

        const listItem = screen.getByText('buhund norwegian');

        //Assert
        expect(removeButton).toBeInTheDocument();
        expect(listItem).toBeInTheDocument();

    });

    it("should remove an item from the list when the remove button is clicked", () => {

        //Arrange
        const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }];
        render(<Selector options={options} />);

        //Act
        const breedSelector = screen.queryByTestId('breed-selector');
        const addButton = screen.queryByTestId('add-button');
        fireEvent.change(breedSelector, { target: { value: 'briard' } });
        fireEvent.click(addButton);
        fireEvent.change(breedSelector, { target: { value: 'buhund' } });
        fireEvent.click(addButton);
        fireEvent.change(breedSelector, { target: { value: 'bulldog' } });
        fireEvent.click(addButton);

        const listItem = screen.queryAllByTestId('breed-item');
        const briardItem = listItem[0]
        const buhundItem = listItem[1]
        const bulldogItem = listItem[2]

        const removeButton = screen.queryAllByTestId('remove-button');
        const briardRemoveButton = removeButton[0];

        fireEvent.click(briardRemoveButton);

        //Assert
        expect(briardItem).not.toBeInTheDocument();
        expect(buhundItem).toBeInTheDocument();
        expect(bulldogItem).toBeInTheDocument();
    });

    it("it should remove the breed with no subBreeds if a subBreed is selected", () => {

        //Arrange
        const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }];
        render(<Selector options={options} />);

        //Act
        const breedSelector = screen.queryByTestId('breed-selector');
        const addButton = screen.queryByTestId('add-button');
        fireEvent.change(breedSelector, { target: { value: 'buhund' } });
        fireEvent.click(addButton);

        fireEvent.change(breedSelector, { target: { value: 'buhund' } });

        const subBreedSelector = screen.queryByTestId('subBreed-selector');
        fireEvent.change(subBreedSelector, { target: { value: 'norwegian' } });

        fireEvent.click(addButton);

        const buhundItem = screen.getAllByDisplayValue('buhund');
        const norwegianItem = screen.queryByText('buhund norwegian');

        console.log("--------------------->", buhundItem );

        //Assert
        expect(norwegianItem).toBeInTheDocument();
        expect(buhundItem[1]).not.toBeInTheDocument();
    });
})


