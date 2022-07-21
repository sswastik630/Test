// A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

// Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.

// npm install hbs

const express = require('express');
const app = express();

const path = require('path')

// console.log(path.join(__dirname,"../public/"))
const staticPath = path.join(__dirname,"../views/")
const templatePath = path.join(__dirname,"../templates/")


//builtin middleware
app.use(express.static(staticPath))


//Set views folder to other directory name
app.set("views", templatePath)

//Set view engine
app.set('view engine','hbs')

// template engine route
app.get("/",(req,res)=>{
    res.render("index",{
        name : "Swastik",
    })
})

app.get('/about',(req,res)=>{
    res.render("about")
})

app.listen(8000, ()=>{
    console.log("Port is listing")
})