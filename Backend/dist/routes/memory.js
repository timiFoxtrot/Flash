"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Memory = require("../models/memory");
const router = express_1.default.Router();
router.get("/memories", (req, res) => {
    const newMemory = new Memory({
        user_name: "matosky",
        photo: "img.jpg",
        title: "skydiving",
        description: "moving withjam boys",
        location: "Abuja",
    });
    newMemory.save()
        .then((result) => {
        res.send(result);
    })
        .catch((err) => {
        console.log(err);
    });
});
module.exports = router;
//# sourceMappingURL=memory.js.map