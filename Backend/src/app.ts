import express from "express";
import { connectDatabase } from "./db";
import memoryRouter from "./routes/memoryRoutes";

import userRouter from "./routes/userRoutes";

const app = express();

connectDatabase();

app.use(express.json());

app.use("/api", memoryRouter);
app.use("/api/users", userRouter)


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("listening for request at port ", PORT);
});
