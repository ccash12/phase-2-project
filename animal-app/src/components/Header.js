import SearchPets from "./SearchPets";

function Header({ searchPet, handleSearch }) {
    return (
        <div>
            <h1 
            style={{color: "white", 
            fontFamily: "monospace",
            backgroundColor: "turquoise",
            fontSize:"65px",
            display: "flex",
            justifyContent: "center"
            }}>Pet Adoption</h1>
        
            <SearchPets searchPet={searchPet} handleSearch={handleSearch} />
        </div>
    )
}

export default Header;

