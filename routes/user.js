import express from "express";

const router = express.Router();

// controllers
import { register } from "../controllers/user";

router.post("/register", register);

module.exports = router;
