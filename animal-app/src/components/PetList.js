import PetCard from "./PetCard";

function PetList({ pets }) {
 const petListContents =  pets.map(pet => <PetCard key={pet.id} petObj={pet} ><button>hi</button></PetCard>);

    return (
        <div className='petListContainer'>
            <section>
                {petListContents}
            </section>
        </div>
    )
}

export default PetList;