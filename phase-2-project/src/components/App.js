// import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './Header';
import NewPetForm from './NewPetForm';
import PetList from './PetList';

function App() {
  const [newPetInput, setNewPet] = useState(
  {name: '', age: '', animal: '', image: '', size: '', sex: '' });

  useEffect(() => {console.log('hi')},[]);

  return (
    <div className="App">
      <Header />
      <NewPetForm newPetInput={newPetInput} />
      <PetList />
    </div>
  );
}

export default App;
