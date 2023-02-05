import multer from "multer";
import { Request, Response } from "express";



const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb) {
        cb(null, './assets/uploads');
    },
    filename: function (req: Request, file: Express.Multer.File, cb) {
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

export const Upload = multer({
    storage: storage,
    // fileFilter: function (req: Request, file: Express.Multer.File, cb: Function) {
    //     if (!req.file?.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    //         return cb(new Error("Only image files are allowed!"), false);
    //     }
    //     cb(null, true);
    // },
}).single("image")
