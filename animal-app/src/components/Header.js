import SearchPets from "./SearchPets";
import Logo from "../logo.png"

function Header({ searchPet, handleSearch }) {
    return (
        <div>
            <h1 class="header">Pet Adoption</h1>
            <img class="logo" src={Logo} alt="logo"
            />
            <SearchPets searchPet={searchPet} handleSearch={handleSearch} />
        </div>
    )
}

export default Header;

