var logger = require('./logger');
var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
    logger.error('Redis Error ' + err);
});

module.exports = {
    set: function (key, value) {
        client.set(key, value, redis.print);
        client.expire(key, 86400);
        logger.info('Set redis: ' + key);
    },
    client: client
};