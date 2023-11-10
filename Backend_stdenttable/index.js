const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const port = 5000;
//const db = "mongodb+srv://suryaeidiko:surya123@cluster0.2iorhia.mongodb.net/MDB?retryWrites=true&w=majority";

const app = express();

//add schema
const students = require("./Models/StudentSchema");

//add router
const router = require("./Routes/router");


dotenv.config();
app.use(cors());
app.use(express.json())
app.use(router);


mongoose.connect(process.env.Database).then(() => {
    console.log("Database connection success");
}).catch((error) => {
    console.log(error);
})

app.listen(port)