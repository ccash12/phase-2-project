function SearchPets() {

    return (
        <div className='searchbar'> 
            <label htmlFor="search">Search Pet Type:</label>
            <input 
                type="text"
                id="search"
                placeholder="Search Pets"
                onChange={(e) => console.log("Searching...")}
            />
        </div>
    )
}

export default SearchPets;