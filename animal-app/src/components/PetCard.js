function PetCard({ petObj }) {
    const {name, image, sex, animal, id} = petObj;

    return (
        <div id={id} className='petcard'>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Type of Animal: {animal}</p>
            <p>Sex: {sex}</p>
            {/* button needs to link to individial client-side route */}
            <button>Details</button>
            <button>Add To MyPets</button>
        </div>
    )
}

export default PetCard;