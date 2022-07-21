const path = require('path')
const hbs = require('hbs');
const express = require('express');
const app = express();

// console.log(path.join(__dirname,"../public/"))
const templatePath = path.join(__dirname,"../templates/views")
const staticPath = path.join(__dirname,"../templates/")
const partialPath = path.join(__dirname,"../templates/partials")



//builtin middleware
app.use(express.static(staticPath))

//Set views folder to other directory name
app.set("views", templatePath)

//Set view engine
app.set('view engine','hbs')

// Register partials
hbs.registerPartials(partialPath)

app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/about", (req, res) =>{
    res.render("about")
})

app.get('*',(req,res)=>{
    res.render("err")
})

app.listen(8000, () =>{
    console.log("Port is listening");
})