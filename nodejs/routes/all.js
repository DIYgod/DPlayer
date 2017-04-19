var https = require('https');

module.exports = function (req, res, next) {
    https.get(`https://api.prprpr.me/count/?id=DIYgod-DPlayer&action=add`);
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Cache-control', 'no-cache');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
};