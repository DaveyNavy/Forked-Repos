import { Router } from "express";
import { addToken } from "./utils.js";
import {
  loginPagePost,
  registerPagePost,
} from "../controllers/usersController.js";
const usersRouter = Router();

usersRouter.post("/login", loginPagePost);
usersRouter.post("/register", registerPagePost);
usersRouter.get("/protected", addToken, (req, res) => {
  res.send(req.token);
});

export default usersRouter;
