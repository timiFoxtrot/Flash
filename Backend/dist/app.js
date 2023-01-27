"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB = require("./db");
const memoryRouter = require("./routes/memory");
const app = (0, express_1.default)();
connectDB();
app.use(express_1.default.json());
app.use("/api", memoryRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("listening for request at port ", PORT);
});
//# sourceMappingURL=app.js.map