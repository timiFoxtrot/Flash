const mongoose = require("mongoose");

const URI = "mongodb+srv://flash101:flash101@cluster0.xrdal5y.mongodb.net/flash?retryWrites=true&w=majority"

export const connectDatabase = () => {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("connected to database")
        }).catch((err: any) => {
            console.log(err);
        });
}
