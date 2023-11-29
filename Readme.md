# SIMPLE AUTO DEPLOMENT USING CI/CS GITHUB ACTION


> Simple app.js

```

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


```

### Test End point

> /api/v1 - return a simple message.

> /api/v1/user - return a list of 5 user.

- create .env file

```
DB_PROD_URI=<mongo_cloud_atal_url_string>

```


* Note :-
https://www.youtube.com/watch?v=cgWXQqL-ZU8