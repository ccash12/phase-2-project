import React from 'react';
import { Link } from 'react-router-dom';

function PetCard({ petObj }) {
    const {name, image, sex, animal, id} = petObj;

    function handleAddPet(petObj) {
        fetch(`http://localhost:8000/mypets`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(petObj)
        });
    };

    return (
        <div id={id} className='petcard'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Type of Animal: {animal}</p>
            <p>Sex: {sex}</p>
            {/* button needs to link to individial client-side route */}<button>
                <Link to={`/pets/${id}`}>Details</Link>
            </button>
            <button onClick={() => handleAddPet(petObj)}>Add To MyPets</button>
        </div>
    )
}

export default PetCard;