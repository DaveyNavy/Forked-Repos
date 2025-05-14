import { Router } from "express";
import {
  ratingsPageGet,
  ratingsPagePost,
} from "../controllers/ratingsController.js";
import { addToken } from "./utils.js";
const ratingsRouter = Router();

ratingsRouter.get("/:recipeId", ratingsPageGet);
ratingsRouter.post("/:recipeId", addToken, ratingsPagePost);

export default ratingsRouter;
