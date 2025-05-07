import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { findUser, createUser } from "../models/userQueries.js";

const loginPagePost = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUser(username);
  if (user) {
    const match = await bcrypt.compare(password, user["password"]);
    if (match) {
      const token = jwt.sign(
        { user: { username: user["username"] } },
        "secret",
        {
          expiresIn: "48h",
        }
      );
      res.json({ token });
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};

const registerPagePost = async (req, res) => {
  const { username, password, confirm_password } = req.body;

  if (password != confirm_password) {
    return res.status(400).send("Passwords do not match");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  createUser(username, hashedPassword);
  res.sendStatus(200);
};

export { loginPagePost, registerPagePost };
