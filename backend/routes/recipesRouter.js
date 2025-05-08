import { Router } from "express";
import { addToken } from "./utils.js";
import { recipesPageGet, recipesTagPageGet, recipesUploaderPageGet, recipesPagePost } from "../controllers/recipesController.js";
const recipesRouter = Router();

recipesRouter.get("{/:id}", recipesPageGet);
recipesRouter.get("/tag/:tag", recipesTagPageGet);
recipesRouter.get("/uploader/:uploader", recipesUploaderPageGet);
recipesRouter.post("/", addToken, recipesPagePost);

export default recipesRouter;
