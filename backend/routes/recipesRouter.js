import { Router } from "express";
import { addToken } from "./utils.js";
import { recipesPageGet, recipesTagsPageGet, recipesTagPageGet, recipesUploaderPageGet, recipesPagePost } from "../controllers/recipesController.js";
const recipesRouter = Router();

recipesRouter.get("/tags", recipesTagsPageGet);
recipesRouter.get("/tag/:tag", recipesTagPageGet);
recipesRouter.get("/uploader/:uploader", recipesUploaderPageGet);
recipesRouter.get("{/:id}", recipesPageGet);
recipesRouter.post("/", addToken, recipesPagePost);

export default recipesRouter;
