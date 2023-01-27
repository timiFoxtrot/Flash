import express from "express";
import { Request, Response } from "express";
const Memory = require("../models/memory")

const router = express.Router();
interface Post {
    user_name: string,
    photo: string,
    title: string,
    description: string,
    location: string,
    likes: number,
    date_created?: string,
    date_updated?: string,
    comments: [
        { user: string, comment: string }
    ]
}
router.get("/memories", (req: Request, res: Response) => {
    const newMemory = new Memory({
        user_name: "matosky",
        photo: "img.jpg",
        title: "skydiving",
        description: "moving withjam boys",
        location: "Abuja",
    })

    newMemory.save()
        .then((result: Post) => {
            res.send(result)
        })
        .catch((err: any) => {
            console.log(err)
        })
})




module.exports = router;