import multer from "multer";
import { Request, Response } from "express";



const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb) {
        cb(null, './images');
    },
    filename: function (req: Request, file: Express.Multer.File, cb) {
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

export const Upload = multer({ storage: storage })
