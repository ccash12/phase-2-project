import SearchPets from "./SearchPets";
// import Logo from "../logo.png"

function Header({ searchPet, handleSearch }) {
    return (
        <div>
            <h1 className="header">Pet Adoption</h1>
            <SearchPets searchPet={searchPet} handleSearch={handleSearch} />
            {/* <img class="logo" src={Logo} alt="logo"/> */}
            
            
        </div>
    )
}

export default Header;

