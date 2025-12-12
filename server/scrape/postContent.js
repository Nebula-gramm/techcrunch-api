const axios = require("axios")
const cheerio = require("cheerio")

async function scrapePost(item) {
    try {
        const url = item.link
        const {data : html} = await axios.get(url)
        const $ = cheerio.load(html)

        const contentData = []

        $(".wp-block-post-content .wp-block-paragraph").each((i,el)=>{
            contentData.push($(el).text().trim(),)
        })
        const postData = [
            {
                id : item.id,
                title: item.title,
                link: item.link,
                thumbnail: item.thumbnail,
                content: contentData,
                author: item.author,
                time: item.time

            }
        ]

        return postData
    } catch (error) {
        console.log(error)
    }
}

module.exports = scrapePost