import express from "express";
import usersRouter from "./routes/usersRouter.js";
import recipesRouter from "./routes/recipesRouter.js";
import commentsRouter from "./routes/commentsRouter.js";
import ratingsRouter from "./routes/ratingsRouter.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/ratings", ratingsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
