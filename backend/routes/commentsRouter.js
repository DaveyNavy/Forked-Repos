import { Router } from "express";
import {
  commentsPageGet,
  commentsPagePost,
} from "../controllers/commentsController.js";
import { addToken } from "./utils.js";
const commentsRouter = Router();

commentsRouter.get("/:recipeId", commentsPageGet);
commentsRouter.post("/:recipeId", addToken, commentsPagePost);

export default commentsRouter;
