import { Router } from "express";
import { login } from "./app.controller.js";

export const router = Router()

router.route("/login").post(login)