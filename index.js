const express = require("express")
const path = require("path")
const cors = require("cors")
const postRoute = require("./routes/postRoute")
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "*",
    methods: ["GET"]
}))
app.use(express.json());

//serve the build path
app.use(express.static(path.join(__dirname, "public", "dist")))

app.get(/^\/(?!latest)(?!c\/)(?!t\/).*/, (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "dist","index.html"))
})


app.use("/latest" , postRoute("https://techcrunch.com/latest/"))
app.use("/c/artificial-intelligence" , postRoute("https://techcrunch.com/category/artificial-intelligence/"))
app.use("/c/security" , postRoute("https://techcrunch.com/category/security/"))
app.use("/c/startups" , postRoute("https://techcrunch.com/category/startups/"))
app.use("/c/apps" , postRoute("https://techcrunch.com/category/apps/"))
app.use("/c/venture" , postRoute("https://techcrunch.com/category/venture"))
app.use("/c/apple" , postRoute("https://techcrunch.com/tag/apple"))


app.listen(PORT, ()=>{
    console.log("Your app is running!");
})