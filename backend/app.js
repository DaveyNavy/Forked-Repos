import express from "express";
import usersRouter from "./routes/usersRouter.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
