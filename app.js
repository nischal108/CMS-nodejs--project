const express  = require("express") 
const app = express() 


app.set("view engine","ejs")

app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/create",(req,res)=>{
    res.render("create.ejs")
})


//api to post blog

app.post("/create", (req,res) =>{
    console.log(req.body)
})


app.listen(3000,function(){
    console.log("NodeJs Project has started on port 3000")
})