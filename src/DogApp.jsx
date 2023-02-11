import React from 'react'
import { Selector } from './components/Selector'
const options = [{breed: 'briard', subBreeds: []}, {breed:'buhund', subBreeds: ['norwegian']}, {breed: 'bulldog', subBreeds: ['boston', 'english', 'french']}];

export const DogApp = () => {
  return (
    <>
      <h1>DogApp</h1>
      <Selector options={options} />
    </>
  )
}
