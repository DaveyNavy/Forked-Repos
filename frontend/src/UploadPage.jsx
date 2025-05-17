import React, { use, useState } from "react";
import "./UploadPage.css";
import { useNavigate } from "react-router-dom";
let nextId = 0;

function UploadPage() {
  const [inputs, setInputs] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/main`;
    navigate(path);
  };
  const isFormValid =
    inputs.recipe_name?.trim() &&
    inputs.description?.trim() &&
    inputs.steps?.trim() &&
    ingredients.length > 0;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let data = {};
    data["tags"] = [];
    formData.forEach((value, key) => {
      if (value != "on") data[key] = value;
      else data["tags"].push(key);
    });
    data["ingredients"] = ingredients.map((e) => e.name);
    console.log(JSON.stringify(data));

    data = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4ifSwiaWF0IjoxNzQ3NDQ2NTM4LCJleHAiOjE3NDc2MTkzMzh9.IVbGZPvJU8K1GTlzdM8RSZGnY36o3MK6RQNzvAVRVKc",
      },
      body: JSON.stringify(data),
    });
    alert("Successfully Uploaded Page");
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
              setInputs((prev) => ({ ...prev, ingredients: "" }));
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
                <button
                  onClick={() => handleDeleteIngredient(ingredient.id)}
                  className="ingredient-delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <label className="form-label">Type of cuisine:</label>
        <ul className="checkbox">
          <li>
            <input type="checkbox" name="african" /> African
          </li>
          <li>
            <input type="checkbox" name="mexican" /> Mexican
          </li>
          <li>
            <input type="checkbox" name="american" />
            American
          </li>
          <li>
            <input type="checkbox" name="italian" /> Italian
          </li>
          <li>
            <input type="checkbox" name="vietnamese" />
            Vietnamese
          </li>
          <li>
            <input type="checkbox" name="korean" /> Korean
          </li>
          <li>
            <input type="checkbox" name="indian" /> Indian
          </li>
          <li>
            <input type="checkbox" name="thai" /> Thai
          </li>
          <li>
            <input type="checkbox" name="japanese" /> Japanese
          </li>
          <li>
            <input type="checkbox" name="french" /> French
          </li>
          <li>
            <input type="checkbox" name="filipino" /> Filipino
          </li>
          <li>
            <input type="checkbox" name="no selection" /> Other
          </li>
        </ul>

        <label className="form-label">Vegan or Vegetarian:</label>
        <ul className="checkbox">
          <li>
            <input type="checkbox" name="vegetarian" /> Vegetarian
          </li>
          <li>
            <input type="checkbox" name="vegan" /> Vegan
          </li>
        </ul>

        <label className="form-label">Meat:</label>
        <ul className="checkbox">
          <li>
            <input type="checkbox" name="beef" /> Beef
          </li>
          <li>
            <input type="checkbox" name="chicken" /> Chicken
          </li>
          <li>
            <input type="checkbox" name="pork" /> Pork
          </li>
          <li>
            <input type="checkbox" name="lamb" /> Lamb
          </li>
          <li>
            <input type="checkbox" name="seafood" /> Seafood
          </li>
          <li>
            <input type="checkbox" name="duck" /> Duck
          </li>
          <li>
            <input type="checkbox" name="turkey" /> Turkey
          </li>
          <li>
            <input type="checkbox" name="goat" /> Goat
          </li>
          <li>
            <input type="checkbox" name="eggs" /> Eggs
          </li>
          <li>
            <input type="checkbox" name="other" /> Other
          </li>
        </ul>

        <label className="form-label">Allergens:</label>
        <ul className="checkbox">
          <li>
            <input type="checkbox" name="milk" /> Milk
          </li>
          <li>
            <input type="checkbox" name="eggs" /> Eggs
          </li>
          <li>
            <input type="checkbox" name="nuts" /> Nuts
          </li>
          <li>
            <input type="checkbox" name="wheat" /> Wheat
          </li>
          <li>
            <input type="checkbox" name="shellfish" /> Shellfish
          </li>
          <li>
            <input type="checkbox" name="soy" /> Soy
          </li>
          <li>
            <input type="checkbox" name="none" /> None
          </li>
        </ul>

        <hr />
        <button type="reset">Reset</button>
        <button type="submit" onClick={routeChange} disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </>
  );
}

export default UploadPage;
