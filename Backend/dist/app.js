"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const memoryRoutes_1 = __importDefault(require("./routes/memoryRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.json());
app.use("/api", memoryRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("listening for request at port ", PORT);
});
//# sourceMappingURL=app.js.map