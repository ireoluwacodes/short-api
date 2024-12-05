import { signToken } from "./app.utils.js";
import AsyncHandler from "express-async-handler";

export const login = AsyncHandler(async (req, res, next) => {
  try {
    const users = [
      { email: "righteousnessakinbola@gmail.com", password: "ireoluwa" },
      { email: "adekunteakapoo@gmail.com", password: "ireoluwa" },
    ];

    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("Email and password are required");
    }
    const findUser = users.find((user) => user.email === email);
    if (!findUser) {
      res.status(400);
      throw new Error("User not found");
    }
    if (findUser.password !== password) {
      res.status(400);
      throw new Error("Invalid password");
    }
    const token = await signToken(email);
    res.status(200).json({
      message: "Login successful",
      data: {
        email,
        token
      },
    });
  } catch (error) {
    next(error);
  }
});
