
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
  function handleDeleteIngredient(id) {
    setIngredients(
      ingredients.filter((ingredient) => ingredient.id !== id)
    );
  }
  

    return (
      <>
        <form onSubmit={handleSubmit}>
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

      </>



    );
  }

  export default UploadPage;