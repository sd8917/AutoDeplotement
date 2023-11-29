//Backend Entry point
const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();

//To post method
app.use(express.json());

app.use(cors());

// Importing
const connectDatabase = require("./configDatabase");


//Connecting database
connectDatabase();

// test route
app.get("/api/v1/",(req,res)=>{
    return res.status(200).json({
        message:"This is home page data"
    })
})

// Listen on this port
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
