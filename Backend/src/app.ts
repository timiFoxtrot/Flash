import express from "express";
import cors from "cors";
import * as dotenv from "dotenv"

dotenv.config()

import { connectDatabase } from "./db";
import memoryRouter from "./routes/memoryRoutes";
import path from "path";
import userRouter from "./routes/userRoutes";

const app = express();


app.use(cors())
app.use(express.json());
const dirname = path.resolve();
app.use('/images', express.static(path.join(dirname, '/images')));

app.use("/api/memories", memoryRouter);
app.use("/api/users", userRouter)

connectDatabase(app);

