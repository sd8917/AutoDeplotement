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

Autodeployment steps :- 

1. Login using AWS credential in aws console

2. Start EC2 instance and Setup a key for ssh into aws machine- ""

3. Add inline policy or update policy for 8000 port :- custom tcp allow 8000 from everywhere

4.  Go to setting in github repo
5. Then action > runners > Choose linux
6. Copy all the command to ssh terminal copied from action runner page.
7. Once done running command copied from runners check the runner.
    - Run sudo ./svc.sh install
    - sudo ./svc.sh runner

8. Now add env values in secrete github,setting 
![Screenshot (195)](https://github.com/sd8917/AutoDeplotement/assets/34008023/fdd7d6e4-2928-4663-b627-f2785e610b8b)


Example "name" - put the name you want add in github workflow
        "value" - put all the env variable inside it.

9. setup your action in github action 
```

# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Node.js CI

on:
  push:
    branches: [ "main" ]

jobs:
  build:

    runs-on: self-hosted

    strategy:
      matrix:
        node-version: [18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: |
        touch .env
        echo "${{ secrets.DEV_ENV }}" > .env
    - run: pm2 restart BackendAPI
        
```




