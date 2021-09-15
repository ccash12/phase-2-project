import { useState, useEffect } from 'react'
import PetCard from "./PetCard";

function MyPets() {
    const [myPets, setMyPets] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/mypets`)
        .then(resp => resp.json())
        .then(myPetsArray => setMyPets(myPetsArray))
    },[]);

    const myPetsList = myPets.map(myPet => <PetCard petObj={myPet} key={myPet.id} />)

    return (
        <div>
            {myPetsList}
        </div>
    );
};

export default MyPets;