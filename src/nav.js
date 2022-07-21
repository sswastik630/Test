const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send("This is the Home page");
})

app.get("/about", (req, res) =>{
    res.send("This is the AboutUS page");
})


app.listen(8000, () =>{
    console.log("Port is listening");
})