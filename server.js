var express = require("express");
const path = require('path');
var port = process.env.PORT || 5000;

var router = express.Router();

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

router.get("/click", (req, res) =>{
    res.send("you clicked!");
})

router.get("/js/index.js", (req, res) =>{
    res.sendFile(path.join(__dirname+'/js/index.js'));
})

var app = express();
app.use("/", router);
app.listen(port, ()=>{
    console.log("App on " + port);
});


