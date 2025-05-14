
import React, { use, useState } from "react";
let nextId = 0;

function UploadPage() {


  const [inputs, setInputs] = useState({});
  const[ingredients,setIngredients] = useState([]);


  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  
  


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        const form = event.target; 
        const formData = new FormData(form);
        [...formData.entries()];
    } 
    
  function handleDeleteIngredient(id) {
    setIngredients(
      ingredients.filter((ingredient) => ingredient.id !== id)
    );
  }
  
  

    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <label> Enter your recipe name:
            <input 
              type="text"
              name="recipename"
              value={inputs.recipename || ""}
              onChange={handleChange}
            />
          </label>
          <label> Enter your description:
            <input 
              type="text"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
            />
          </label>
          <label> Enter the cooking steps:
            <input 
              type="text"
              name="steps"
              value={inputs.steps || ""}  
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>

        <div>
          <h1>Add Ingredients:</h1>
          <input type="text" name="ingredients" value ={inputs.ingredients || ""} onChange={handleChange}/>
          <button onClick={() => {
            setIngredients([
              ...ingredients,
              { id: nextId++, name: inputs.ingredients }
            ]);
            setInputs('');
          }}>Add</button>
         <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}
              <button onClick={() => handleDeleteIngredient(ingredient.id)}>Delete</button>
            </li>
          ))}
        </ul>

        </div>
        <div>
            <form method="post" onSubmit={handleFormSubmit}>
            <label>
                  type of cuisine:
                    <select name="selectedcusine" multiple={false} defaultValue="">
                        <option value="" disabled hidden>select a cuisine</option>
                        <option value="african">african</option>
                        <option value="mexican">mexican</option>
                        <option value="american">american</option>
                        <option value="italian">italian</option>
                        <option value="vietnamese">vietnamese</option>
                        <option value="korean">korean</option>
                        <option value="indian">indian</option>
                        <option value="thai">thai</option>
                        <option value="japanese">japanese</option>
                        <option value="french">french</option>
                        <option value="filipino">filipino</option>
                        <option value="no selection">not selection</option>
                    </select>
                </label>
                <label>
                    vegan or vegetarian:
                    <select name="vegan or vegetarian" multiple={false} defaultValue="">
                        <option value="" disabled hidden>select a type</option>
                        <option value="vegetarian">vegetarian</option>
                        <option value="vegan">vegan</option>
                    </select>
                </label>
                <label>
                    meat:
                    <select name="meat" multiple={false} defaultValue="">
                        <option value="" disabled hidden>select a type(s)</option>
                        <option value="beef">beef</option>
                        <option value="chicken">chicken</option>
                        <option value="pork">pork</option>
                        <option value="lamb">lamb</option>
                        <option value="seafood">seafood</option>
                        <option value="duck">duck</option>
                        <option value="turkey">turkey</option>
                        <option value="goat">goat</option>
                        <option value="eggs">eggs</option>
                    </select>
                </label>
                <label>
                    allergens:
                    <select name="allergens" multiple={false} defaultValue="">
                        <option value="" disabled hidden>select a type(s)</option>
                        <option value="milk">milk</option>
                        <option value="eggs">eggs</option>
                        <option value="nuts">nuts</option>
                        <option value="wheat">wheat</option>
                        <option value="shellfish">shellfish</option>
                        <option value="soy">soy</option>
                        <option value="none">none</option>
                    </select>
                </label>
                <hr />

              </form>
                  </div>
          <button type="reset">reset</button>
          <button type="submit">submit</button>
      </>



    );
  }

  export default UploadPage;