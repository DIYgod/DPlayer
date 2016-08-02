var url = require('url');
var logger = require('../tools/logger');
var danmaku = require('../models/danmaku');

module.exports = function (req, res) {
    danmaku.distinct('player', function (err, data) {
        if (err) {
            logger.error(err);
        }

        var json = ``;
        for (var i = 0; i < data.length; i++) {
            json += data[i] + `<br>`;
        }
        res.send(json);
    })
};