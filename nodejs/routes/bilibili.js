var url = require('url');
var logger = require('../tools/logger');
var fetch = require('node-fetch');
var parseString = require('xml2js').parseString;

module.exports = function (req, res) {
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    logger.info(`bilibili form IP: ${ip}`);

    var query = url.parse(req.url,true).query;
    var aid = query.aid;
    var dan = {
        code: 1,
        danmaku: []
    };

    function addZero(str, length){
        return new Array(length - str.length + 1).join("0") + str;
    }

    fetch(`http://www.bilibili.com/widget/getPageList?aid=${aid}`).then(
        response => response.json()
    ).then((data) => {
        fetch(`http://comment.bilibili.com/${data[0].cid}.xml`).then(
            response => response.text()
        ).then((data) => {
                parseString(data, function (err, result) {
                    var danOriginal = result.i.d;
                    for (var i = 0; i < danOriginal.length; i++) {
                        console.log(danOriginal[i].$.p);
                        var info = danOriginal[i].$.p.split(',');
                        console.log(info);
                        var type = '';
                        if (info[1] === '4') {
                            type = 'bottom';
                        }
                        else if (info[1] === '5') {
                            type = 'top';
                        }
                        else {
                            type = 'right';
                        }
                        var danOne = {
                            author: 'bilibili' + info[6],
                            time: info[0],
                            text: danOriginal[i]._,
                            color: '#' + addZero(parseInt(info[3]).toString(16), 6),
                            type: type
                        };
                        dan.danmaku.push(danOne);
                    }
                    res.send(JSON.stringify(dan));
                });
            }
        ).catch(
            e => console.log("获取弹幕失败", e)
        );
    }
    ).catch(
        e => console.log("获取cid失败", e)
    );
};