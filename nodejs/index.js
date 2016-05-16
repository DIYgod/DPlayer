var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
var mongoose = require('mongoose');
var mongodbUrl = 'mongodb://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT + '/' + process.env.MONGODB_INSTANCE_NAME;
var express = require('express');
var app = express();


var danmakuSchema = new mongoose.Schema({
    player: String,
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

app.get('/', function(req, res) {
    mongoose.connect(mongodbUrl);
    var db = mongoose.connection;
    db.on('error',console.error);

    var id = url.parse(req.url,true).query.id;
    db.once('open', function() {
        danmaku.find({player: id}, function (err, data) {
            if (err) {
                console.error(err);
            }

            var json = `{"code": 1,"danmaku":[`;
            for (var i = 0; i < data.length; i++) {
                json += JSON.stringify(data[i]);
                if (i !== data.length - 1) {
                    json += `,`;
                }
            }
            json += `]}`;
            res.write(json);
            res.end();
            db.close();
        })
    });
});

app.post('/', function (req, res) {
    var body = '', jsonStr;
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        try {
            jsonStr = JSON.parse(body);
        } catch (err) {
            jsonStr = null;
        }
        // jsonStr ? res.send({"status":"success", "name": jsonStr.test}) : res.send({"status":"error"});

        var dan = new danmaku({player: jsonStr.player, author: jsonStr.author, time: jsonStr.time, text: jsonStr.text, color: jsonStr.color, type: jsonStr.type});
        dan.save(function (err, d) {
            if (err){
                console.error(err);
            }
        });
    });
});

app.listen(1207);