import jwt from "jsonwebtoken";
import { getRatings, addRating } from "../models/ratingQueries.js";

const ratingsPageGet = async (req, res) => {
  const recipeId = req.params.recipeId;
  const ratings = await getRatings(recipeId);
  res.json(ratings);
};

const ratingsPagePost = async (req, res) => {
  let user;
  try {
    const token = req.token;
    user = jwt.verify(token, "secret")["user"];
  } catch (err) {
    res.sendStatus(403);
  }
  const recipeId = req.params.recipeId;
  const { rating } = req.body;
  await addRating(recipeId, rating, user["username"]);
  res.sendStatus(200);
};

export { ratingsPageGet, ratingsPagePost };
