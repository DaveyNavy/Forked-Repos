import jwt from "jsonwebtoken";
import { getComments, addComment } from "../models/commentQueries.js";

const commentsPageGet = async (req, res) => {
  const recipeId = req.params.recipeId;
  const comments = await getComments(recipeId);
  res.json(comments);
};

const commentsPagePost = async (req, res) => {
  let user;
  try {
    const token = req.token;
    user = jwt.verify(token, "secret")["user"];
  } catch (err) {
    res.sendStatus(403);
  }
  const recipeId = req.params.recipeId;
  const { comment } = req.body;
  await addComment(recipeId, comment, user["username"]);
  res.sendStatus(200);
};

export { commentsPageGet, commentsPagePost };
