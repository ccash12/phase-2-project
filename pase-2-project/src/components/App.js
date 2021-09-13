import './App.css';
import React from 'react';

import Header from './Header';
import NewPetForm from './NewPetForm';
import PetList from './PetList';

function App() {
  return (
    <div className="App">
      <Header />
      <NewPetForm />
      <PetList />
    </div>
  );
}

export default App;
