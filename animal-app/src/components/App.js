import React, { useState, useEffect } from 'react';
import '/Users/sillysadsoy/Development/Code/Module2/phase-2-project/animal-app/src/App.css'

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

  return (
    <div className="App">
      <Header />
      <NewPetForm newPetInput={newPetInput} />
      <PetList pets={pets} />
    </div>
  );
}

export default App;
