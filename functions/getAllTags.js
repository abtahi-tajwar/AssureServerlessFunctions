const fetch = require("node-fetch");
const headers = require("../utils/header")

exports.handler = async function(event, context) {

    const url = `https://api.hubapi.com/cms/v3/blogs/tags?hapikey=${process.env.ASSURE_HUBSPOT_API_KEY}&limit=200`
    const res = await fetch(url)
    const result = await res.json()
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result)
    }
}