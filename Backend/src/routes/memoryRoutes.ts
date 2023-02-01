import express from "express";
import { Request, Response } from "express";


const router = express.Router();


import {
  createMemory,
  deleteMemory,
  getAllMemories,
  getMemoryByUser,
  getOwnMemory,
  getSingleMemory,
  updateMemory,
} from "../controllers/memoryController";
import { auth } from "../middlewares/auth";
import { Upload } from "../middlewares/imageUpload";

router.post("/", auth, Upload.single("image"), createMemory);
router.patch("/:id", auth, updateMemory);
router.get("/own", auth, getOwnMemory);
router.get("/", getAllMemories);
router.get("/:id", auth, getSingleMemory);
router.get("/user", auth, getMemoryByUser);
router.delete("/:id", auth, deleteMemory);


export default router;
