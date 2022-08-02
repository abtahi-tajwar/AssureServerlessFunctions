const fetch = require("node-fetch");
const headers = require("../utils/header")

exports.handler = async function(event, context) {
    const tags_string = event.queryStringParameters.tags.split(",").map(tag=> tag.split("_").join(" "))
    let tags = []
    const res = await fetch(`https://api.hubspot.com/content/api/v2/blog-posts?\
    hapikey=${process.env.ASSURE_HUBSPOT_API_KEY}\
    &offset=${event.queryStringParameters.offset ? event.queryStringParameters.offset : '0'}\
    &limit=${event.queryStringParameters.limit ? event.queryStringParameters.limit : '10'}`)
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