function NewPetForm({ newPetInput, setNewPet, handleChange, handleSubmit }) {
    const {name, age, animal, image, description} = newPetInput;

    return (
        <div id='newAnimalForm'>
               {/* form needs onSubmit, inputs need onChange */}
            <form onSubmit={e => handleSubmit(e)}>
              <input type='text'
                     placeholder='Name'
                     id='name'
                     name='name'
                     value={name}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /> <br />
              <input type='text'
                     placeholder='Animal Type'
                     id='animalType'
                     name='animal'
                     value={animal}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br />
              <input type='text'
                     placeholder='Age Estimate'
                     id='age'
                     name='age'
                     value={age}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br />
              <input type='text'
                     placeholder='Image'
                     id='image'
                     name='image'
                     value={image}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br />
              <input type='text'
                     placeholder='Description'
                     id='description'
                     name='description' 
                     value={description}
                     onChange={e => setNewPet({...newPetInput, [e.target.name]: e.target.value})} /><br />
              <div id='size'> Size: <br />
                     <input type="checkbox" id="small" name="small" value="small"
                     onChange={(e) => handleChange(e)} />
                     <label for="small"> Small</label><br />
                     <input type="checkbox" id="medium" name="medium" value="medium" onChange={(e) => handleChange(e)}/>
                     <label for="medium"> Medium</label><br />
                     <input type="checkbox" id="large" name="large" value="large"
                     onChange={(e) => handleChange(e)}/>
                     <label for="large"> Large</label>
              </div>
              <div id='sex'> Sex: <br />
                     <input type="checkbox" id="male" name="male" value="male" onChange={(e) => handleChange(e)}/>
                     <label for="male"> Male</label><br />
                     <input type="checkbox" id="female" name="female" value="female" onChange={(e) => handleChange(e)}/>
                     <label for="female"> Female</label><br />
              </div>
              <button>Submit</button>
            </form>
        </div>
    );
};

export default NewPetForm;