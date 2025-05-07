import jwt from "jsonwebtoken";
import { addRecipe, addIngredients, addTags } from "../models/recipeQueries.js";

const recipesPagePost = async (req, res) => {
  let user;
  try {
    const token = req.token;
    user = jwt.verify(token, "secret")["user"];
  } catch (err) {
    res.sendStatus(403);
  }

  const { recipe_name, description, steps, ingredients, tags } = req.body;
  const id = await addRecipe(recipe_name, user["username"], description, steps);
  await addIngredients(id, ingredients);
  await addTags(id, tags);
  res.sendStatus(200);
};

export { recipesPagePost };
