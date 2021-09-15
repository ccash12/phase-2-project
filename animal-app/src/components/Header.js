import SearchPets from "./SearchPets";
import { Link, useHistory } from 'react-router-dom';

// import Home from './Home';

function Header({ searchPet, handleSearch }) {
    let history = useHistory();

    return (
        <div className='static'>
            <h1 className="header">Pet Adoption</h1>
            <div className='home'>
                <h2>
                    <Link className='links' to='/' onClick={() => history.push('/')}>All Pets</Link>
                </h2>
            </div>
            <div className='home'>
                <h2>
                    <Link className='links' to='/pets/mine' onClick={() => history.push('/pets/mine')}>My Pets</Link>
                </h2>
            </div> <br /><br />
            <SearchPets searchPet={searchPet} handleSearch={handleSearch} />
            {/* <img class="logo" src={Logo} alt="logo"/> */}
        </div>
    )
}

export default Header;

