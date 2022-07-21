const path = require('path')

const express = require('express');
const app = express();

// console.log(path.join(__dirname,"../public/"))
const staticPath = path.join(__dirname,"../public/")

//builtin middleware
app.use(express.static(staticPath))

app.get("/", (req, res) =>{
    res.send("This is the Home page");
})

app.get("/about", (req, res) =>{
    res.send("This is the AboutUS page");
})


app.listen(8000, () =>{
    console.log("Port is listening");
})