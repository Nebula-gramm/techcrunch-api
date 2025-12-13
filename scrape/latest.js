const axios = require("axios")
const cheerio = require("cheerio")

async function  scrapeLatest(url) {
    try {
        const {data : html} = await axios.get(url)

        const $ = cheerio.load(html)
        const latest = []

        $(".wp-block-post").each((i, el)=>{
               latest.push({
                id: i + 1,
                category: $(el).find(".loop-card__cat-group a").text().trim(),
                title: $(el).find(".loop-card__title a").text().trim(),
                link: $(el).find(".loop-card__title a").attr("href"),
                thumbnail: $(el).find(".loop-card__figure img").attr("src"),
                author: $(el).find(".loop-card__author").text().trim(),
                date: $(el).find("time").attr("datetime") || '',
               })
        })

        return latest

    } catch (error) {
        console.log(error)
    }
}



module.exports =scrapeLatest ;