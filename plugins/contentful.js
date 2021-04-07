require('dotenv').config()
const contentful = require('contentful')

const config = {
    space: "d9sk4ylxqzir",
    accessToken: "-jX1sBxDjb4LM_dL7pzaNvxRPKypX_0xTzAyyT52jWk",
}
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}