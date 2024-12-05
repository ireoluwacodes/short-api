import express from "express";
import cors from "cors";
import { notFound, errHandler } from "./app.middleware.js";
import { router } from "./app.route.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the short API",
  });
});

app.use("/api/v1/auth", router);

app.use(notFound);
app.use(errHandler);
