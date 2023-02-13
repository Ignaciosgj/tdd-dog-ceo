import React, { useState } from 'react'
import { BreedImages } from './BreedImages';

export const Selector = ({ options }) => {

  const subBreedsFilter = (breedsArray, breed) => {
    if (breed) {
      const result = breedsArray.find((value) => value.breed === breed);
      return result.subBreeds;
    } else {
      return [];
    }
  }

  const [selectedBreed, setSelectedBreed] = useState('');
  const subBreeds = subBreedsFilter(options, selectedBreed);

  const onSelectHandle = (e) => {
    setSelectedBreed(e.target.value);
  }

  // useEffect(() => {
  //   setSubBreeds(subBreedsFilter(options, selectedBreed));
  // }, [selectedBreed])

  return (
    <>
      {options.length > 0 &&
        <select placeholder='selecciona una raza' onChange={onSelectHandle} data-testid='breed-selector'>
          {/* <option value="default" disabled hidden>Selecciona una raza</option> */}
          {options.map((option) => <option value={option.breed} key={option.breed} data-testid="breedOptions">{option.breed}</option>)}
        </select>
      }

      {subBreeds.length > 0 &&
        <select placeholder='selecciona una sub raza' data-testid='subBreed-selector'>
          {/* <option value="default" disabled hidden>Selecciona una sub raza</option> */}
          {subBreeds.map((subBreed) => <option value={subBreed} key={subBreed} data-testid="subBreedOptions">{subBreed}</option>)}
        </select>
      }

      <BreedImages image={"https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg"} />
    </>
  )
}
