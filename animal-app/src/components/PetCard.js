import React from 'react';
import { Link } from 'react-router-dom';

function PetCard({ petObj, children }) {
    const {name, image, sex, animal, id} = petObj;

    return (
        <div id={id} className='petcard'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Type of Animal: {animal}</p>
            <p>Sex: {sex}</p>
            <button>
                <Link to={`/pets/${id}`}>Learn More</Link>
            </button>
            {children}
        </div>
    )
}

export default PetCard;