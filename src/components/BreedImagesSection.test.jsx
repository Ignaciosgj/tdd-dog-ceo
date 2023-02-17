import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { breedImagesMock } from "./breedImagesMock";
import { BreedImagesSection } from "./BreedImagesSection";

describe("test for BreedImagesSection", () => {
    it("it should render", () => {

        //Arrange
        render(<BreedImagesSection images={[]}/>);

        //Act
        const title = screen.queryByText('BreedImagesSection');

        //Assert
        expect(title).toBeInTheDocument();

    });

    it("it should display 7 images", () => {

        //Arrange
        const imagesArray = breedImagesMock;
        render(<BreedImagesSection images={imagesArray} />);
        
        //Act
        const breedImages = screen.queryAllByTestId('breed-image');

        //Assert
        expect(breedImages).toHaveLength(7);
    })
})