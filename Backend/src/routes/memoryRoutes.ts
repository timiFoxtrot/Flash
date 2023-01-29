import express from "express";
import { Request, Response } from "express";
import { createMemory, updateMemory } from "../controllers/memoryController";
import { auth } from "../middlewares/auth";
import { Upload } from "../middlewares/imageUpload";
const router = express.Router();

router.post("/memories", Upload.single("image"), createMemory);
router.patch("/memories/:id", auth, updateMemory)

export default router;
