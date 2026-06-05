import express from "express";
import { createTest } from "../controllers/testUser.controller.js";

const router = express.Router();

router.post("/", createTest);

export default router;
