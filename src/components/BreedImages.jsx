import React from 'react'

export const BreedImages = ({ image }) => {
  return (
    <>
      <h2 data-testid="breed-images">Breed Images</h2>
      {
        image === '' ? <h4 data-testid="default-message">No breeds selected</h4> : <img data-testid="image" src={image} alt="dog" />
      }
    </>
  )
}
