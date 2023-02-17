import React, { useState } from 'react';
import { BreedImagesContainer } from './BreedImagesContainer';

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

  const addBreed = (array, value) => {
    const breedSplitter = value.split("/", 1)[0];
    if (!array.some((element) => element.includes(value))) {
      const result = array.filter((breed) => breedSplitter !== breed);
      return { result, value };
    } else {
      const result = array;
      const value = 'existing breed';
      return { result, value }
    }
  }

  const handleAddClick = () => {
    const breed = selectedSubBreed !== '' ? `${selectedBreed}/${selectedSubBreed}` : selectedBreed;
    const { result, value } = addBreed(selectedBreedsList, breed);
    if (value !== 'existing breed') {
      setSelectedBreedsList([...result, value]);
    } else {
      setSelectedBreedsList([...result]);
    }
    setSelectedSubBreed('');
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
      { options.length > 0 &&
        <button onClick={handleAddClick} data-testid="add-button">Agregar</button>
      }
      <ul data-testid="breed-container">
        {selectedBreedsList.map((breed) => (
          <li data-testid="breed-item" key={breed}>
            {breed.replace('/', ' ')}
            <button data-testid="remove-button" onClick={() => handleRemoveClick(breed)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <BreedImagesContainer image={"https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg"} />
    </>
  )
}
