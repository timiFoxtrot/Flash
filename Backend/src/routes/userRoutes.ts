import express, { Application, Request, Response, NextFunction } from "express";
import { createUser, getAllUsers, loginUser } from "../controllers/userController";

const router = express.Router();

router.post("/signUp", createUser);
router.post('/login', loginUser)
router.get("/", getAllUsers);


export default router;
