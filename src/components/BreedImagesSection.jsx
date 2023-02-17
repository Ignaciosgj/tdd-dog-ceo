import React from 'react'

export const BreedImagesSection = ({images}) => {
  return (
    <>
      <div>BreedImagesSection</div>
      {
        images.map((image) => (
          <img data-testid="breed-image" key={image} src={image} alt={image} />
        ))
      }
    </>
  )
}
