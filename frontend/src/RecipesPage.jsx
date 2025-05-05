function RecipesPage() {
  let recipes = [
    {
      key: "recipe1",
      ingredients: ["salt", "pepper"],
    },
    {
      key: "recipe2",
      ingredients: ['lettuce', 'tomato'],
    },
  ];
  return createPage(recipes);
}

function createPage(recipes) {
  return (
    <div className="vertical fill">
      {
        recipes.map((item, index) => createRecipe(item))
      }
    </div>
  );
}

function createRecipe(recipe) {
  return (
    <div key={recipe.key}>
      <p>{recipe.key}</p>
      <ul>
        {
          recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default RecipesPage;