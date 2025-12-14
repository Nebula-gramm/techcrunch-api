const express = require("express");
const scrapeLatest = require("../scrape/latest");
const scrapePost = require("../scrape/postContent");

module.exports = function (url) {
  const router = express.Router();

  // /latest?page=2&limit=10&postId=4
  router.get("/", async (req, res) => {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 50;
      const postId = Number(req.query.postId);

      const pageUrl =
        page === 1 ? url : `${url}/page/${page}/`;

      console.log("SCRAPING:", pageUrl);

      const data = await scrapeLatest(pageUrl);
      const limitData = data.slice(0, limit);


      if (!postId) {
        return res.json({ success: true, data: limitData });
      }


      const item = limitData.find(a => a.id === postId);
      if (!item) {
        return res.json({ success: false, message: "Item not found!" });
      }

      const postContent = await scrapePost(item);
      res.json({ success: true, data: postContent });

    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: err.message
      });
    }
  });

    return router
}