import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { BreedImagesContainer } from "./BreedImagesContainer";
import { breedImagesMock } from "./breedImagesMock";

describe("test for BreedImages component", () => {
  it("should render", () => {

    //Arrange
    const dogImages = breedImagesMock;
    render(<BreedImagesContainer dogImages={dogImages} />);

    //Act
    const title = screen.queryByText('Breed Images');

    //Assert
    expect(title).toBeInTheDocument();
  });

  it.skip("should show an default message 'no breeds selected'", () => {

    //Arrange
    const dogImages = [];
    render(<BreedImagesContainer dogImages={dogImages} />);

    //Act
    const message = screen.queryByTestId('default-message');
    const breedImage = screen.queryAllByTestId('breed-image');
    screen.debug();

    //Assert
    expect(message).toBeInTheDocument();
    expect(breedImage).not.toBeInTheDocument();
  });

  it.skip("should show an image if selected breed", () => {

    //Arrange
    const dogImages = breedImagesMock
    render(<BreedImagesContainer dogImages={dogImages} />);

    //Act
    const breedImage = screen.queryAllByTestId('breed-image');

    //Assert
    expect(breedImage).toHaveLength(7);
  })
})