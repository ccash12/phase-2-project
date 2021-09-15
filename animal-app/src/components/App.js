import React, { useState, useEffect } from 'react';
import './App.css'

import Header from './Header';
import NewPetForm from './NewPetForm';
import PetList from './PetList';

function App() {
  const [pets, setPets] = useState([])
  const [newPetInput, setNewPet] = useState(
  {name: '', age: '', animal: '', image: '', size: '', sex: '', description: '' });

  useEffect(() => {
    fetch(`http://localhost:3000/pets`)
    .then(resp => resp.json())
    .then(petArray => setPets(petArray))
  },[]);

  const handleChange = (e) => {
    if(e.target.name === 'small')
    {setNewPet({...newPetInput, 'size': 'small'})}
    else if(e.target.name === 'medium')
    {setNewPet({...newPetInput, 'size': 'medium'})}
    else if(e.target.name === 'large')
    {setNewPet({...newPetInput, 'size': 'large'})}
    else if(e.target.name === 'male')
    {setNewPet({...newPetInput, 'sex': 'male'})}
    else if(e.target.name === 'female')
    {setNewPet({...newPetInput, 'sex': 'female'})}
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newAnimal = setNewPet({...newPetInput})
    // fetch(`http://localhost:3000/pets`, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(newPetInput)
    // })
    console.log(newAnimal)
  }

  return (
    <div className="app">
      <Header />
      
      <NewPetForm newPetInput={newPetInput} 
                  setNewPet={setNewPet} 
                  handleChange={handleChange} 
                  handleSubmit-={handleSubmit} 
      />
      <PetList pets={pets} />
    </div>
  );
}

export default App;
