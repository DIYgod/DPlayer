var logger = require('./logger');
var redis = require("redis");
var client;
if (process.env.REDIS_PORT_6379_TCP_ADDR && process.env.REDIS_PORT_6379_TCP_PORT && process.env.REDIS_PASSWORD) {
    client = redis.createClient({
        host: process.env.REDIS_PORT_6379_TCP_ADDR,
        port: process.env.REDIS_PORT_6379_TCP_PORT,
        password: process.env.REDIS_PASSWORD
    });
}
else {
    client = redis.createClient();
}


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