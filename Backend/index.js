const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin: "http://localhost:3000"
    }
));

// Database
connectDB()

// Listen routes

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.use("/api/auth", require("./routes/authRoute"))

// Listen 

app.listen(process.env.PORT, () => {    
    console.log(`Server started on port ${process.env.PORT}`);
})