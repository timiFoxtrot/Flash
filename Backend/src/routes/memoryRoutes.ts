import express from "express";
import { Request, Response } from "express";
import { createMemory, updateMemory } from "../controllers/memoryController";
const Memory = require("../models/memory");

const router = express.Router();

router.post("/memories", createMemory);
router.patch("/memories/:id", updateMemory)

export default router;
