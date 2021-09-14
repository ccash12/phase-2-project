function PetDetails() {
    return (
        <div>
            <img src='image' alt='name' />
            <h1>{'name'}</h1>
            <ul className='petDetailList'>
                <li>{'age'}</li>
                <li>{'sex'}</li>
                <li>{'size'}</li>
                <li>{'animal'}</li>
            </ul>
            <p>{'description'}</p>
            {/* button or link that goes back to entire list needed */}
        </div>
    )
}