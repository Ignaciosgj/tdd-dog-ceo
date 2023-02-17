import React, { useEffect, useState } from 'react'
import { Selector } from './components/Selector'
import { getAllBreeds } from './services/breedsService';
import { breedsFormatter} from './helpers/breedsFormatter';
// const options = [{ breed: 'briard', subBreeds: [] }, { breed: 'buhund', subBreeds: ['norwegian'] }, { breed: 'bulldog', subBreeds: ['boston', 'english', 'french'] }];


export const DogApp = () => {

  const [breedOptions, setBreedOptions] = useState([]);

  useEffect(() => {
    getAllBreeds()
    .then((res) => {
      const breeds = breedsFormatter(res.message);
      setBreedOptions(breeds);
    });
  }, [])

  return (
    <>
      <h1>DogApp</h1>
      <Selector options={breedOptions} />
    </>
  )
}

