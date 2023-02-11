import React, { useEffect, useState } from 'react'

export const Selector = ({options}) => {

  const [selectedBreed, setSelectedBreed] = useState('');
  const [subBreeds, setSubBreeds] = useState([]);

  const onSelectHandle = (e) => {
    setSelectedBreed(e.target.value);
  }

  const subBreedsFilter = (breedsArray, breed) => {
    if (breed) {
      const result = breedsArray.find((value) => value.breed === breed);
      return result.subBreeds;
    } else {
      return [];
    }
  }

  useEffect(() => {
    setSubBreeds(subBreedsFilter(options, selectedBreed));
  }, [selectedBreed])

  return (
    <>
    {options.length > 0 &&
          <select onChange={onSelectHandle} data-testid='breed-selector'>
            {options.map((option) => <option value={option.breed} key={option.breed} data-testid="breedOptions">{option.breed}</option>)}
          </select>
    }

      {subBreeds.length > 0 &&
            <select data-testid='subBreed-selector'>
              {subBreeds.map((subBreed) => <option value={subBreed} key={subBreed} data-testid="subBreedOptions">{subBreed}</option>)}
            </select>
      }
    </>
  )
}
