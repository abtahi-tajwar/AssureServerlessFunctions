const fetch = require("node-fetch");
const headers = require("../utils/header")

exports.handler = async function(event, context) {
    const tags_string = event.queryStringParameters.tags.split(",").map(tag=> tag.split("_").join(" "))
    let tags = []
    const res = await fetch(`https://api.hubapi.com/cms/v3/blogs/tags?hapikey=${process.env.ASSURE_HUBSPOT_API_KEY}`)
    const result = await res.json()

    result.results.forEach(item => {
        if(tags_string.includes(item.name)) {
            tags.push(item)
        }
    })

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(tags)
    }
}