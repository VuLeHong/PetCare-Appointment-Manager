import jwt from "jsonwebtoken";
import { ADMIN, JWT_SECRET } from "../config/admin.js";

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN.username && password === ADMIN.password) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1d" });
    console.log("login")
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
