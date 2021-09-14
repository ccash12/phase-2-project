import PetCard from "./PetCard";

function PetList({ pets }) {
    const petListContents =  pets.map(pet => <PetCard key={pet.id} petObj={pet} />);

    return (
        <ul>
            {petListContents}
        </ul>
    )
}

export default PetList;