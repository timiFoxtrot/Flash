import express from "express";

import * as dotenv from "dotenv"

dotenv.config()

import { connectDatabase } from "./db";
import memoryRouter from "./routes/memoryRoutes";

import userRouter from "./routes/userRoutes";

const app = express();


app.use(express.json());

app.use("/api", memoryRouter);
app.use("/api/users", userRouter)

connectDatabase(app);

