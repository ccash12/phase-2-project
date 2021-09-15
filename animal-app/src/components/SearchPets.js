function SearchPets({ handleSearch }) {

    return (
        <div className='searchbar'> 
            {/* <label htmlFor="search">Search Pet Type:</label> */}
            <input 
                type="text"
                id="search"
                placeholder="Search Pets"
                onChange={(e) => handleSearch(e)}
            />
        </div>
    )
}

export default SearchPets;