var url = require('url');
var logger = require('../tools/logger');
var redis = require('../tools/redis');
var fetch = require('node-fetch');
var md5 = require('blueimp-md5');

module.exports = function (req, res) {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var query = url.parse(req.url,true).query;
    var aid = query.aid;
    var appkey = '4ebafd7c4951b366';
    var secret = '8cb98205e9b2ad3669aad0fce12a4c13';

    redis.client.get(`bilibilicid${aid}`, function(err, reply) {
        if (reply) {
            logger.info(`Video Bilibili AV${aid} form redis, IP: ${ip}`);

            var sign = md5(`appkey=${appkey}&cid=${reply}&otype=json&quality=2&type=mp4${secret}`);
            fetch(`https://interface.bilibili.com/playurl?appkey=${appkey}&cid=${reply}&otype=json&quality=2&type=mp4&sign=${sign}`).then(
                response => response.text()
            ).then((data) => {
                    res.send(data);
                }
            ).catch(
                e => logger.error("Video Bilibilib Error: getting data", e)
            );
        }
        else {
            logger.info(`Video Bilibili AV${aid} form origin, IP: ${ip}`);

            fetch(`http://www.bilibili.com/widget/getPageList?aid=${aid}`).then(
                response => response.json()
            ).then((data) => {
                    redis.set(`bilibilicid${aid}`, data[0].cid);
                    var sign = md5(`appkey=${appkey}&cid=${data[0].cid}&otype=json&quality=2&type=mp4${secret}`);
                    fetch(`https://interface.bilibili.com/playurl?appkey=${appkey}&cid=${data[0].cid}&otype=json&quality=2&type=mp4&sign=${sign}`).then(
                        response => response.text()
                    ).then((data) => {
                            res.send(data);
                        }
                    ).catch(
                        e => logger.error("Video Bilibilib Error: getting data", e)
                    );
                }
            ).catch(
                e => logger.error("Video Bilibilib Error: getting cid", e)
            );
        }
    });
};