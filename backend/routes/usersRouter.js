import { Router } from "express";

const usersRouter = Router();
usersRouter.get("/login", (req, res) => {
  res.send("Login!");
});

export default usersRouter;
