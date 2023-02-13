import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { BreedImages } from "./BreedImages";

describe("test for BreedImages component", () => {
  it("should render", () => {

    //Arrange
    const dog = "https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg"
    render(<BreedImages image={dog} />);

    //Act
    const title = screen.queryByTestId('breed-images')

    //Assert
    expect(title).toBeInTheDocument();
  });

  it("should show an default message 'no breeds selected'", () => {

    //Arrange
    const dog = ""
    render(<BreedImages image={dog} />);

    //Act
    const message = screen.queryByTestId('default-message');
    const breedImage = screen.queryByTestId('image');


    //Assert
    expect(message).toBeInTheDocument();
    expect(breedImage).not.toBeInTheDocument();
  });

  it("should show an image if selected breed", () => {

    //Arrange
    const dog = "https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg"
    render(<BreedImages image={dog} />);

    //Act
    const message = screen.queryByTestId('default-message');
    const breedImage = screen.queryByTestId('image');


    //Assert
    expect(breedImage).toBeInTheDocument();
    expect(message).not.toBeInTheDocument();
  })
})