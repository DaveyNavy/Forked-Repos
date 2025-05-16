import React, { use, useState } from "react";
import "./UploadPage.css";
let nextId = 0;

function UploadPage() {
  const [inputs, setInputs] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let data = {};
    data["tags"] = [];
    formData.forEach((value, key) => {
      if (!key.startsWith("tag")) data[key] = value;
      else data["tags"].push(value);
    });
    data["ingredients"] = ingredients.map((e) => e.name);
    console.log(JSON.stringify(data));

    data = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4ifSwiaWF0IjoxNzQ3MjYxMTg3LCJleHAiOjE3NDc0MzM5ODd9.V81fQtDi_ksmo_OfCRaW1yx0iSy_d9eFBj6JxLQx-jI",
      },
      body: JSON.stringify(data),
    });
  };

  function handleDeleteIngredient(id) {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label className="form-label">
          {" "}
          Enter your recipe name:
          <textarea
            name="recipe_name"
            value={inputs.recipe_name || ""}
            onChange={handleChange}
            required
            className="form-input"
            rows={1}
          />
        </label>
        <label className="form-label">
          {" "}
          Enter your description:
          <textarea
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
            required
            className="form-input"
            rows={3}
          />
        </label>
        <label className="form-label">
          {" "}
          Enter the cooking steps:
          <textarea
            type="text"
            name="steps"
            value={inputs.steps || ""}
            onChange={handleChange}
            required
            className="form-input"
            rows={3}
          />
        </label>

        <div>
          <p className="form-label">Add Ingredients:</p>
          <input
            type="text"
            name="ingredients"
            value={inputs.ingredients || ""}
            onChange={handleChange}
            className="form-input"
          />
          <button
            onClick={() => {
              setIngredients([
                ...ingredients,
                { id: nextId++, name: inputs.ingredients },
              ]);
              setInputs("");
            }}
            type="button"
            className="ingredient-add-button"
          >
            Add
          </button>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.id} className="ingredient-list">
                {ingredient.name}
                <button onClick={() => handleDeleteIngredient(ingredient.id)} className="ingredient-delete-button">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <span className="form-label">
          Type of cuisine:
          <ul name="tag1" className="checkbox">
            <li><input type="checkbox" value="african" /> African</li>
            <li><input type="checkbox" value="mexican" /> Mexican</li>
            <li><input type="checkbox" value="american" /> American</li>
            <li><input type="checkbox" value="italian" /> Italian</li>
            <li><input type="checkbox" value="vietnamese" /> Vietnamese</li>
            <li><input type="checkbox" value="korean" /> Korean</li>
            <li><input type="checkbox" value="indian" /> Indian</li>
            <li><input type="checkbox" value="thai" /> Thai</li>
            <li><input type="checkbox" value="japanese" /> Japanese</li>
            <li><input type="checkbox" value="french" /> French</li>
            <li><input type="checkbox" value="filipino" /> Filipino</li>
            <li><input type="checkbox" value="no selection" /> Other</li>
          </ul>
        </span>
        <label className="form-label">
          Vegan or Vegetarian:
          <ul name="tag2" className="checkbox">
            <li><input type="checkbox" value="african" /> Vegetarian</li>
            <li><input type="checkbox" value="mexican" /> Vegan</li>
          </ul>
        </label>
        <label className="form-label">
          Meat:
          <ul name="tag3" className="checkbox">
          <li><input type="checkbox" value="beef" /> Beef</li>
          <li><input type="checkbox" value="chicken" /> Chicken</li>  
          <li><input type="checkbox" value="pork" /> Pork</li>
          <li><input type="checkbox" value="lamb" /> Lamb</li>
          <li><input type="checkbox" value="seafood" /> Seafood</li>
          <li><input type="checkbox" value="duck" /> Duck</li>
          <li><input type="checkbox" value="turkey" /> Turkey</li>
          <li><input type="checkbox" value="goat" /> Goat</li>
          <li><input type="checkbox" value="eggs" /> Eggs</li>
          <li><input type="checkbox" value="other" /> Other</li>
          </ul>
        </label>
        <label className="form-label">
          Allergens:
          <ul name="tag4" className="checkbox">
          <li><input type="checkbox" value="milk" /> Milk</li>
          <li><input type="checkbox" value="eggs" /> Eggs</li>
          <li><input type="checkbox" value="nuts" /> Nuts</li>
          <li><input type="checkbox" value="wheat" /> Wheat</li>
          <li><input type="checkbox" value="shellfish" /> Shellfish</li>
          <li><input type="checkbox" value="soy" /> Soy</li>
          <li><input type="checkbox" value="none" /> None</li>
          </ul>
        </label>
        <hr />
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UploadPage;
