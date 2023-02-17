import React from 'react'
import { breedImagesMock } from './breedImagesMock'


export const BreedImagesContainer = ({ dogImages = breedImagesMock }) => {
  return (
    <>
      <h2>Breed Images</h2>

      <h4 data-testid="default-message">No breeds selected</h4>

      {/* {
        dogImages.map((breedImage) => (
          <img key={breedImage} data-testid="breed-image" src={breedImage} />
        ))
      } */}
    </>
  )
}
