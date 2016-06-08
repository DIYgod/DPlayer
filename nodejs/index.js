var url = require('url');
var fs = require('fs');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: "file",
            filename: 'DPlayer.log',
            maxLogSize: 20480,
            backups: 3,
            category: [ 'DPlayer','console' ]
        },
        {
            type: "console"
        }
    ],
    replaceConsole: true
});
var logger = log4js.getLogger('DPlayer');
logger.setLevel('INFO');
logger.info(`🍻 DPlayer start! Cheers!`);

function htmlEncode(str) {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .replace(/\//g, "&#x2f;");
}

var postIP = [];

var mongodbUrl;
if (process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD && process.env.MONGODB_PORT_27017_TCP_ADDR && process.env.MONGODB_PORT_27017_TCP_PORT && process.env.MONGODB_INSTANCE_NAME) {
    mongodbUrl = 'mongodb://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT + '/' + process.env.MONGODB_INSTANCE_NAME;
}
else {
    mongodbUrl = 'mongodb://localhost:27017/danmaku';
}

var danmakuSchema = new mongoose.Schema({
    player: {
        type: [String], index: true
    },
    author: String,
    time: Number,
    text: String,
    color: String,
    type: String
});
var danmaku = mongoose.model('dan', danmakuSchema);

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'] ||
             req.connection.remoteAddress ||
             req.socket.remoteAddress ||
             req.connection.socket.remoteAddress;
    logger.info(`GET form IP: ${ip}`);

    mongoose.connect(mongodbUrl);
    var db = mongoose.connection;
    db.on('error', errorListener);

    var query = url.parse(req.url,true).query;
    var id = query.id;
    var max = query.max;
    var length;
    db.once('open', function() {
        cleanListener();
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
            db.close();
        })
    });

    function errorListener (err) {
        cleanListener();
        logger.error(err);
        res.send(`{"code": 0, "msg": "Error happens, please contact system administrator."}`);
    }

    function cleanListener () {
        db.removeListener('error', errorListener);
    }
});

app.post('/', function (req, res) {
    var body = '';
    var jsonStr;
    var db;
    var ip = req.headers['x-forwarded-for'] ||
             req.connection.remoteAddress ||
             req.socket.remoteAddress ||
             req.connection.socket.remoteAddress;

    // check black ip
    var blanklist = fs.readFileSync('blacklist').toString().split('\n');
    if (blanklist.indexOf(ip.split(',')[0]) !== -1) {
        logger.info(`Reject POST form ${ip} for black ip.`);
        res.send(`{"code": -1, "msg": "Rejected for black ip."}`);
        return;
    }

    // frequency limitation
    if (postIP.indexOf(ip) !== -1) {
        logger.info(`Reject POST form ${ip} for frequent operation.`);
        res.send(`{"code": -2, "msg": "Rejected for frequent operation."}`);
        return;
    }
    else {
        postIP.push(ip);
        setTimeout(function () {
            postIP.splice(0, 1);
        }, 1000);
    }

    req.on('data', dataListener);
    req.on('end', endListener);

    function dataListener (chunk) {
        body += chunk;
    }
    function endListener () {
        cleanListener();
        try {
            jsonStr = JSON.parse(body);
        } catch (err) {
            jsonStr = null;
        }

        // check data
        if (jsonStr.player === undefined
            || jsonStr.author === undefined
            || jsonStr.time === undefined
            || jsonStr.text === undefined
            || jsonStr.color === undefined
            || jsonStr.type === undefined
            || jsonStr.text.length >= 30) {
            logger.info(`Reject POST form ${ip} for illegal data: ${JSON.stringify(jsonStr)}`);
            res.send(`{"code": -3, "msg": "Rejected for illegal data"}`);
            return;
        }
        
        // check token: set it yourself
        function checkToken (token) {
            return true;
        }
        if (!checkToken(jsonStr.token)) {
            logger.info(`Rejected POST form ${ip} for illegal token: ${jsonStr.token}`);
            res.send(`{"code": -4, "msg": "Rejected for illegal token: ${jsonStr.token}"}`);
            return;
        }

        // check black username
        if (blanklist.indexOf(jsonStr.author) !== -1) {
            logger.info(`Reject POST form ${jsonStr.author} for black user.`);
            res.send(`{"code": -5, "msg": "Rejected for black user."}`);
            return;
        }

        logger.info(`POST form ${ip}, data: ${JSON.stringify(jsonStr)}`);

        mongoose.connect(mongodbUrl);
        db = mongoose.connection;
        db.on('error', errorListener);
        db.once('open', function() {
            cleandbListener();

            var dan = new danmaku({
                player: htmlEncode(jsonStr.player),
                author: htmlEncode(jsonStr.author),
                time: jsonStr.time,
                text: htmlEncode(jsonStr.text),
                color: htmlEncode(jsonStr.color),
                type: htmlEncode(jsonStr.type)
            });
            dan.save(function (err, d) {
                if (err) {
                    logger.error(err);
                    res.send(`{"code": 0, "msg": "Error happens, please contact system administrator."}`);
                }
                else {
                    res.send(`{"code": 1, "data": ${JSON.stringify(d)}}`);
                }
                db.close();
            });
        });
    }

    function errorListener (err) {
        cleandbListener();
        logger.error(err);
        res.send(`{"code": 0, "msg": "Error happens, please contact system administrator."}`);
    }

    function cleandbListener () {
        db.removeListener('error', errorListener);
    }
    function cleanListener () {
        req.removeListener('data', dataListener);
        req.removeListener('end', endListener);
    }
});

app.get('/list', function (req, res) {
    mongoose.connect(mongodbUrl);
    var db = mongoose.connection;
    db.on('error', errorListener);

    db.once('open', function() {
        cleanListener();
        danmaku.distinct('player', function (err, data) {
            if (err) {
                logger.error(err);
            }

            var json = ``;
            for (var i = 0; i < data.length; i++) {
                json += data[i] + `<br>`;
            }
            res.send(json);
            db.close();
        })
    });

    function errorListener (err) {
        cleanListener();
        logger.error(err);
        res.send(`{"code": 0, "msg": "Error happens, please contact system administrator."}`);
    }

    function cleanListener () {
        db.removeListener('error', errorListener);
    }
});

app.listen(1207);