import React, { useState } from 'react';
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
  const [selectedSubBreed, setSelectedSubBreed] = useState('');
  const subBreeds = subBreedsFilter(options, selectedBreed);
  const [selectedBreedsList, setSelectedBreedsList] = useState([]);

  const onSelectBreed = (e) => {
    setSelectedBreed(e.target.value);
  }

  const onSelectSubBreed = (e) => {
    setSelectedSubBreed(e.target.value);
  }

  const handleAddClick = () => {
    if (!selectedBreedsList.some((breed) => breed === `${selectedBreed}/${selectedSubBreed}`)) {
      setSelectedBreedsList([...selectedBreedsList, `${selectedBreed}/${selectedSubBreed}`]);
      setSelectedSubBreed('');
    }
  }

  const handleRemoveClick = (breed) => {
    setSelectedBreedsList([...selectedBreedsList].filter(item => item !== breed));
  }

  // useEffect(() => {
  //   setSubBreeds(subBreedsFilter(options, selectedBreed));
  // }, [selectedBreed])

  return (
    <>
      {options.length > 0 &&
        <select defaultValue='default' onChange={onSelectBreed} data-testid='breed-selector'>
          <option value="default" disabled>Selecciona una raza</option>
          {options.map((option) => <option value={option.breed} key={option.breed} data-testid="breedOptions">{option.breed}</option>)}
        </select>
      }

      {subBreeds.length > 0 &&
        <select defaultValue='default' onChange={onSelectSubBreed} data-testid='subBreed-selector'>
          <option value="">Todos</option>
          {subBreeds.map((subBreed) => <option value={subBreed} key={subBreed} data-testid="subBreedOptions">{subBreed}</option>)}
        </select>
      }
      <button onClick={handleAddClick} data-testid="add-button">Agregar</button>
      <ul>
        {selectedBreedsList.map((breed) => (
          <li data-testid="breed-item" key={breed}>
            {breed.replace('/', ' ')}
            <button data-testid="remove-button" onClick={() => handleRemoveClick(breed)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <BreedImages image={"https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg"} />
    </>
  )
}
