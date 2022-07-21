var express = require('express')

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello from the express");
});

app.listen(8000, ()=>{
    console.log("Listning to port 8000");
})

// get -read 
// post - create 
// put - update 
// delete - delete 