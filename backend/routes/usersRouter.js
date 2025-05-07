import { Router } from "express";
import {
  loginPagePost,
  registerPagePost,
} from "../controllers/usersController.js";
import { addToken } from "./utils.js";
const usersRouter = Router();

usersRouter.post("/login", loginPagePost);
usersRouter.post("/register", registerPagePost);
usersRouter.get("/protected", addToken, (req, res) => {
  res.send(req.token);
});

export default usersRouter;
