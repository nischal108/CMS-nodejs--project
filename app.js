const express  = require("express") 
const app = express() 


app.set("view engine","ejs")



app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/create",(req,res)=>{
    res.render("create.ejs")
})



app.listen(3000,function(){
    console.log("NodeJs Project has started on port 3000")
})