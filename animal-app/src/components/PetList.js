import PetCard from "./PetCard";

function PetList({ pets }) {

    const petListContents =  pets.map(pet => 
        <PetCard key={pet.id} petObj={pet} >
            <button onClick={() => handleAddPet(pet)}>Add To My Pets</button>
        </PetCard>);

    function handleAddPet(petObj) {
        fetch(`http://localhost:3000/mypets`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(petObj)
        });
    };

    return (
        <div >
            {petListContents}
        </div>
    )
}

export default PetList;