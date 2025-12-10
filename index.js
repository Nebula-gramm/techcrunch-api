const express = require("express")
const postRoute = require("./routes/postRoute")
const app = express()
const PORT = 3000




app.get("/", (req,res)=>{
    res.send("This is Your Home!")
})

app.use("/latest" , postRoute("https://techcrunch.com/latest/"))
app.use("/c/artificial-intelligence" , postRoute("https://techcrunch.com/category/artificial-intelligence/"))
app.use("/c/security" , postRoute("https://techcrunch.com/category/security/"))
app.use("/c/startups" , postRoute("https://techcrunch.com/category/startups/"))
app.use("/c/apps" , postRoute("https://techcrunch.com/category/apps/"))
app.use("/c/venture" , postRoute("https://techcrunch.com/category/venture"))
app.use("/t/apple" , postRoute("https://techcrunch.com/tag/apple"))


app.listen(PORT, ()=>{
    console.log("Your app is running!");
})