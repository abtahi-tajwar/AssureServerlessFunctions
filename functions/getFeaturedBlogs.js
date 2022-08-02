const fetch = require("node-fetch");
const headers = require("../utils/header")
exports.handler = async function(event, context) {
    const url = `https://api.hubapi.com/cms/v3/blogs/posts?hapikey=\
    ${process.env.ASSURE_HUBSPOT_API_KEY}\
    ${event.queryStringParameters.contentGroupId ? `&contentGroupId=${event.queryStringParameters.contentGroupId}`:''}\
    ${event.queryStringParameters.limit ? `&limit=${event.queryStringParameters.limit}&offset=1` : '' }\    
    ${event.queryStringParameters.tags ? `&tagId__in=${event.queryStringParameters.tags}` : ''}`
    
    const res = await fetch(url)
    const result = await res.json()
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result)
    }
}