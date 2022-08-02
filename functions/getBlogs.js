const fetch = require("node-fetch");
const headers = require("../utils/header")

exports.handler = async function(event, context) {

    const url = `https://api.hubspot.com/content/api/v2/blog-posts?hapikey=${process.env.ASSURE_HUBSPOT_API_KEY}&offset=${event.queryStringParameters.offset ? event.queryStringParameters.offset : '0'}&limit=${event.queryStringParameters.limit ? event.queryStringParameters.limit : '10'}`
    console.log(url)
    const res = await fetch(url)
    const result = await res.json()
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result)
    }
}