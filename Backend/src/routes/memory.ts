import express from "express";
import { Request, Response } from "express";
const router = express.Router();

router.get("/memories", (req: Request, res: Response) => {
    res.send("hello flash!!");
})




module.exports = router;