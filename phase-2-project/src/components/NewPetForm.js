function NewPetForm({ newPetInput }) {
    const {name, age, animal, image, size, sex} = newPetInput;

    return (
        <div>
            <form>
              <input type='text'
                     placeholder='Name'
                     id='name'
                     name='name'
                     value={name} /><br />
              <input type='text'
                     placeholder='Animal Type'
                     id='animalType'
                     name='animal'
                     value={animal} /><br />
              <input type='text'
                     placeholder='Age'
                     id='age'
                     name='age'
                     value={age} /><br />
              <input type='text'
                     placeholder='Image'
                     id='image'
                     name='image'
                     value={image} /><br />


                
            </form>
        </div>
    );
};

export default NewPetForm;