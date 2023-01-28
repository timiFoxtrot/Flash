import express, { Application, Request, Response, NextFunction } from "express";
import { createUser, getAllUsers } from "../controllers/userController";

const router = express.Router();

router.post("/signUp", createUser);
router.get("/", getAllUsers);


export default router;
