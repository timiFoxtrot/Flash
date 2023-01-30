import express from "express";
import { Request, Response } from "express";
import { createMemory, getOwnMemory, updateMemory } from "../controllers/memoryController";
import { getAllUsers } from "../controllers/userController";
import { auth } from "../middlewares/auth";
import { Upload } from "../middlewares/imageUpload";
const router = express.Router();

router.post("/memories", auth, Upload.single("image"), createMemory);
router.patch("/memories/:id", auth, updateMemory)
router.get("/memories/:id", auth, getOwnMemory)
router.get('/memories', auth, getAllUsers)

export default router;
