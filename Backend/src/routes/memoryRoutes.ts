import express from "express";
import { Request, Response } from "express";
import {
  createMemory,
  deleteMemory,
  getAllMemories,
  getMemoryByUser,
  getOwnMemory,
  getSingleMemory,
  updateMemory,
} from "../controllers/memoryController";
import { authMiddleware } from "../middlewares/auth";
import { Upload } from "../middlewares/imageUpload";

const router = express.Router();

router.use(authMiddleware)


router.get("/", getAllMemories);
router.post("/", Upload.single("image"), createMemory);
router.patch("/:id", updateMemory);
router.get("/own", getOwnMemory);
router.get("/:id", getSingleMemory);
router.get("/user", getMemoryByUser);
router.delete("/:id", deleteMemory);


export default router;
