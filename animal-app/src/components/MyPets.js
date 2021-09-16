import { useState, useEffect } from 'react'
import PetCard from "./PetCard";

function MyPets() {
    const [myPets, setMyPets] = useState([]);
    const myPetsList = myPets.map(myPet => 
        <PetCard petObj={myPet} key={myPet.id}>
            <button onClick={() => handleAddPet(myPet)}>Remove From My Pets</button>
        </PetCard>);

    useEffect(() => {
        fetch(`http://localhost:3000/mypets`)
        .then(resp => resp.json())
        .then(myPetsArray => setMyPets(myPetsArray))
    },[]);

    function handleAddPet(petObj) {
        fetch(`http://localhost:3000/mypets/${petObj.id}`, {
            method: 'DELETE'})
        .then(setMyPets(myPets.filter(myPet => myPet.id !== petObj.id)))
    };

    return (
        <div>
            {myPetsList}
        </div>
    );
};

export default MyPets;