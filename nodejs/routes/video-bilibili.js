var url = require('url');
var logger = require('../tools/logger');
var redis = require('../tools/redis');
var fetch = require('node-fetch');
var md5 = require('blueimp-md5');
var xml2js = require('xml2js');
var HttpProxyAgent = require('http-proxy-agent');
var parseString = xml2js.parseString;

var appkey = 'f3bb208b3d081dc8';
var secret = '1c15888dc316e05a15fdd0a02ed6584f';
function getData(cid, res, type) {
    var sign = md5(`cid=${cid}&from=miniplay&player=1&type=mp4${secret}`);
    var api = `http://interface.bilibili.com/playurl?&cid=${cid}&from=miniplay&player=1&type=mp4&sign=${sign}`;
    if (type === '1') {
        res.send(api);
    }
    else {
        fetch(api, {
            headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36'},
            // agent: new HttpProxyAgent('http://183.61.236.54:3128/')
        }).then(
            response => response.text()
        ).then((data) => {
            parseString(data, { explicitArray: false }, function (err, result) {
                // res.send(result.video.durl.url.replace('http://', 'https://'));
                res.redirect(301, result.video.durl.url.replace('http://', 'https://'));
                });
            }
        ).catch(
            e => logger.error("Bilibilib Error: getting data", e)
        );
    }
}

module.exports = function (req, res) {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var query = url.parse(req.url,true).query;
    var aid = query.aid;
    var cid = query.cid;
    var type = query.type;

    if (cid) {
        logger.info(`Bilibili cid2video ${cid}, IP: ${ip}`);
        getData(cid, res, type);
    }
    else {
        redis.client.get(`bilibiliaid2cid${aid}`, function(err, reply) {
            if (reply) {
                logger.info(`Bilibili aid2video ${aid} form redis, IP: ${ip}`);
                getData(reply, res, type);
            }
            else {
                logger.info(`Bilibili aid2video ${aid} form origin, IP: ${ip}`);

                fetch(`http://www.bilibili.com/widget/getPageList?aid=${aid}`).then(
                    response => response.json()
                ).then((data) => {
                        redis.set(`bilibiliaid2cid${aid}`, data[0].cid);
                        getData(data[0].cid, res, type);
                    }
                ).catch(
                    e => logger.error("Bilibili aid2video Error: getting cid", e)
                );
            }
        });
    }
};