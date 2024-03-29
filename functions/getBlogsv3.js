const fetch = require("node-fetch");
const headers = require("../utils/header")

exports.handler = async function(event, context) {
    const contentGroupId = event.queryStringParameters.contentGroupId
    const limit = event.queryStringParameters.limit
    const offset = event.queryStringParameters.offset
    const tags = event.queryStringParameters.tags
    const search = event.queryStringParameters.search
    const url = `https://api.hubapi.com/cms/v3/blogs/posts?hapikey=${process.env.ASSURE_HUBSPOT_API_KEY}\
${contentGroupId ? `&contentGroupId__in=${contentGroupId}` : ""}\
${offset ? `&offset=${offset}` : ""}\
${limit ? `&limit=${limit}` : ""}\
${tags ? `&tagId__in=${tags}` : ""}\
${search ? `&name__icontains=${search}` : ""}\
&state=PUBLISHED
`
    console.log(url)
    const res = await fetch(url)
    const result = await res.json()
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result)
    }
}