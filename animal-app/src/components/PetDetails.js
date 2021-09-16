import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import AddButton from './AddButton';

function PetDetails() {
    const [pet, setPet] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)

    const id = useParams().id;
    let history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3000/pets/${id}`)
        .then(resp => resp.json())
        .then((pet) => {
            setPet(pet);
            setIsLoaded(true);
        })
    },[id]);

    if(!isLoaded) return <h1>Loading. . . </h1>;

    const {age, sex, size, image, animal, name, description} = pet;

    return (
        <div className='petcardDetails'>
            <img src={image} alt={name} />
            <h1>{`${name} is...`}</h1>
            <ul className='petDetailList'>
                <li>{age} year(s) old</li>
                <li>{name} is a {sex}!</li>
                <li>{`${size}-sized ${animal}`}</li>
            </ul>
            <p>{description}</p>
            <button>
                <Link to={'/pets'} onClick={() => history.push('/pets')}>Go To All Pets</Link>
            </button>
            <AddButton pet={pet} />
        </div>
    )
};

export default PetDetails;