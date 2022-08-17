const fetch = require("node-fetch");
const headers = require("../utils/header")
exports.handler = async function(event, context) {
    const url = `https://api.hubapi.com/blogs/v3/blog-authors/search?hapikey=${process.env.ASSURE_HUBSPOT_API_KEY}`    
    const res = await fetch(url)
    const result = await res.json()
    if (result.objects) {
        result.objects.sort((a,b) => a.livePosts - b.livePosts)
    }
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result)
    }
}