import express from "express";
const router = express.Router();

import { register, login, logout } from "../controllers/authcontroller.js";

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/logout", logout);

export default router;
