const express = require("express")
const scrapeLatest = require("../scrape/latest")
const scrapePost = require("../scrape/postContent")


module.exports = function(url) {
    const router = express.Router()
    router.get("/",async (req,res)=>{
        const data =await scrapeLatest(url)
        res.json({success : true, data})
        })

    router.get("/p/:page",async (req,res)=>{
        const pageNum = req.params.page
        const data =await scrapeLatest(`${url}/page/${pageNum}`)
        res.json({success : true, data})
        })

    router.get("/:id", async(req,res)=>{
        const data =await scrapeLatest(url)
        const item = data.find(article => article.id == req.params.id)
        if(!item) return res.send("Item not found");
        const postContent = await scrapePost(item)
        res.json(postContent)
        })

    router.get("/p/:page/a/:id", async(req,res)=>{
        const pageNum = req.params.page
        const data =await scrapeLatest(`${url}/page/${pageNum}`)
        const item = data.find(article => article.id == req.params.id)
        if(!item) return res.send("Item not found");
        const postContent = await scrapePost(item)
        res.json(postContent)
        })

    return router
}