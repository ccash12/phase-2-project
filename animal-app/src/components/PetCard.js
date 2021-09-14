function PetCard({ petObj }) {
    const {name, image, sex, animal, id} = petObj;

    return (
        <div id={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{animal}</p>
            <p>{sex}</p>
            {/* button needs to link to individial client-side route */}
            <button>Details</button>
        </div>
    )
}

export default PetCard;