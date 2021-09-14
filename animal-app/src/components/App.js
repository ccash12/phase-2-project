import React, { useState, useEffect } from 'react';

import Header from './Header';
import NewPetForm from './NewPetForm';
import PetList from './PetList';

function App() {
  const [pets, setPets] = useState([])
  const [newPetInput, setNewPet] = useState(
  {name: '', age: '', animal: '', image: '', size: '', sex: '', description: '' });

  useEffect(() => {console.log('hi')},[]);

  return (
    <div className="App" >
      <Header />
      <NewPetForm newPetInput={newPetInput} />
      <PetList pets={pets} />
    </div>
  );
}

export default App;
