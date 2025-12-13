const express = require("express")
const scrapeLatest = require("../scrape/latest")
const scrapePost = require("../scrape/postContent")


module.exports = function(url) {
    const router = express.Router()

    //latest?limit=10&postId
    router.get("/",async (req,res)=>{
        const limit = parseInt(req.query.limit) || 50
        const postId = parseInt(req.query.postId)
        const data =await scrapeLatest(url)
        const limitData = data.slice(0,limit)
        if (!postId) return  res.json({success : true, data: limitData});

        const item = limitData.find(article => article.id == req.query.postId)
        if(!item) return res.json({success: false, data: "Item not found!"});
        const postContent = await scrapePost(item)
        res.json({success: true, data:postContent})
        })

    //latest?page=2&limit=10&postId=4
    router.get("/",async (req,res)=>{
        const pageNum = parseInt(req.query.page)
        const limit = parseInt(req.query.limit) || 50
        const postId = parseInt(req.query.postId)
        const data =await scrapeLatest(`${url}/page/${pageNum}`)
        const limitData = data.slice(0,limit)
        if(!postId) return res.json({success : true, data: limitData});

        const item = limitData.find(article => article.id == req.query.postId)
        if(!item) return res.json({success: false, data: "Item not found!"});
        const postContent = await scrapePost(item)
        res.json({success: true, data:postContent})

        })


    // //post filter by ID
    // router.get("/:id", async(req,res)=>{
    //     const data =await scrapeLatest(url)
    //     const item = data.find(article => article.id == req.params.id)
    //     if(!item) return res.send("Item not found");
    //     const postContent = await scrapePost(item)
    //     res.json(postContent)
    //     })

    // router.get("/p/:page/a/:id", async(req,res)=>{
    //     const pageNum = req.params.page
    //     const data =await scrapeLatest(`${url}/page/${pageNum}`)
    //     const item = data.find(article => article.id == req.params.id)
    //     if(!item) return res.send("Item not found");
    //     const postContent = await scrapePost(item)
    //     res.json(postContent)
    //     })

    return router
}