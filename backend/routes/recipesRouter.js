import { Router } from "express";
import { addToken } from "./utils.js";
import { recipesPageGet, recipesPagePost } from "../controllers/recipesController.js";
const recipesRouter = Router();

recipesRouter.get("{/:id}", recipesPageGet);
recipesRouter.post("/", addToken, recipesPagePost);

export default recipesRouter;
