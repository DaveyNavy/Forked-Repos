import jwt from "jsonwebtoken";
import {
  getRecipe,
  getRecipes,
  getRecipesWithTag,
  getRecipesWithUploader,
  addRecipe,
  addIngredients,
  addTags,
} from "../models/recipeQueries.js";

const recipesPageGet = async (req, res) => {
  const id = req.params.id;
  if (id) {
    const recipe = await getRecipe(parseInt(id));
    res.json(recipe);
  } else {
    const recipes = await getRecipes();
    res.json(recipes);
  }
};

const recipesTagPageGet = async (req, res) => {
  const tag = req.params.tag;
  const recipes = await getRecipesWithTag(tag);
  res.json(recipes);
};

const recipesUploaderPageGet = async (req, res) => {
  const uploader = req.params.uploader;
  const recipes = await getRecipesWithUploader(uploader);
  res.json(recipes);
};

const recipesPagePost = async (req, res) => {
  let user;
  try {
    const token = req.token;
    user = jwt.verify(token, "secret")["user"];
  } catch (err) {
    res.sendStatus(403);
  }

  console.log(req.body);
  const { recipe_name, description, steps, ingredients, tags } = req.body;
  const id = await addRecipe(recipe_name, user["username"], description, steps);
  await addIngredients(id, ingredients);
  await addTags(id, tags);
  res.sendStatus(200);
};

export {
  recipesPageGet,
  recipesTagPageGet,
  recipesUploaderPageGet,
  recipesPagePost,
};
