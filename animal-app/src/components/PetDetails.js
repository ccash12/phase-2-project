import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

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
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <ul className='petDetailList'>
                <li>{age}</li>
                <li>{sex}</li>
                <li>{`${size} - ${animal}`}</li>
            </ul>
            <p>{description}</p>
            <Link onClick={() => history.push('/pets')}>Go To All Pets</Link>
            {/* button or link that goes back to entire list needed */}
        </div>
    )
};

export default PetDetails;