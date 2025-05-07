import { Router } from "express";
import { addToken } from "./utils.js";
import { recipesPagePost } from "../controllers/recipesController.js";
const recipesRouter = Router();

recipesRouter.post("/", addToken, recipesPagePost);

export default recipesRouter;
