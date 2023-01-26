import express from "express";
const memoryRouter = require("./routes/memory")
const app = express();

app.use(express.json());

app.use("/api", memoryRouter)






const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("listening for request at port ", PORT)
})
