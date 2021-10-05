const  path = require("path");
console.log("env:",process.env.NODE_ENV);
require("dotenv").config({
    path: path.resolve(process.cwd(), '.env.development'),
});
const express = require("express");
const cors = require("cros");
const app = express();
app.use(cors({
    origin:["http://localhost:9000"],
    methods:["GET","POST", "PUT","DELETE"]
}));
console.log('env', process.env.PORT);
const port = process.env.PORT || 9093;
app.listen(port,(err)=>{
    if(err) {
        console.log("error:",err.message);
        return;
    }
    console.log(`server dag lang nghe ${port}`);
});