var url = require('url');
var logger = require('../tools/logger');
var danmaku = require('../models/danmaku');
var redis = require('../tools/redis');

module.exports = function (req, res) {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var query = url.parse(req.url,true).query;
    var id = query.id;
    var max = query.max;

    redis.client.get(`dplayer${id}`, function(err, reply) {
        if (reply) {
            logger.info(`DPlayer id ${id} form redis, IP: ${ip}`);
            res.send(reply);
        }
        else {
            logger.info(`DPlayer id ${id} form mongodb, IP: ${ip}`);

            danmaku.find({player: id}, function (err, data) {
                if (err) {
                    logger.error(err);
                }

                var dan = {
                    code: 1,
                    danmaku: []
                };
                dan.danmaku = max ? data.slice(0, max) : data;
                var sendDan = JSON.stringify(dan);
                res.send(sendDan);

                redis.set(`dplayer${id}`, sendDan);
            })
        }
    });
};