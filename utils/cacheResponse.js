const { config } = require('../config');

function cacheResponse(res, seconds){
    if(!config.dev){
        res.set("Cache-COntrol", `public, max-age=${seconds}`);
    }
}

module.exports = cacheResponse;