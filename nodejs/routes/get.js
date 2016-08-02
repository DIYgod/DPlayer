var url = require('url');
var logger = require('../tools/logger');
var danmaku = require('../models/danmaku');

module.exports = function (req, res) {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    logger.info(`GET form IP: ${ip}`);

    var query = url.parse(req.url,true).query;
    var id = query.id;
    var max = query.max;
    var length;
    danmaku.find({player: id}, function (err, data) {
        if (err) {
            logger.error(err);
        }

        var json = `{"code": 1,"danmaku":[`;
        length = max ? Math.min(data.length, max) : data.length;
        for (var i = 0; i < length; i++) {
            json += JSON.stringify(data[i]);
            if (i !== length - 1) {
                json += `,`;
            }
        }
        json += `]}`;
        res.send(json);
    })
};