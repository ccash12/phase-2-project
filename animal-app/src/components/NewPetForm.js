function NewPetForm({ newPetInput }) {
    const {name, age, animal, image, description, size, sex} = newPetInput;

    return (
        <div id='newAnimalForm'>
               {/* form needs onSubmit, inputs need onChange */}
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
                     placeholder='Age Estimate'
                     id='age'
                     name='age'
                     value={age} /><br />
              <input type='text'
                     placeholder='Image'
                     id='image'
                     name='image'
                     value={image} /><br />
              <input type='text'
                     placeholder='Description'
                     id='description'
                     name='description' 
                     value={description} /><br />
              <div id='size'> Size: <br />
                     <input type="checkbox" id="small" name="small" value="small"/>
                     <label for="small"> Small</label><br />
                     <input type="checkbox" id="medium" name="medium" value="medium"/>
                     <label for="medium"> Medium</label><br />
                     <input type="checkbox" id="large" name="large" value="large"/>
                     <label for="large"> Large</label>
              </div>
              <div id='sex'> Sex: <br />
                     <input type="checkbox" id="male" name="male" value="male"/>
                     <label for="male"> Male</label><br />
                     <input type="checkbox" id="female" name="female" value="female"/>
                     <label for="female"> Female</label><br />
              </div>
            </form>
        </div>
    );
};

export default NewPetForm;