var mongoose = require('mongoose');
var mongodbUrl;
if (process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD && process.env.MONGODB_PORT_27017_TCP_ADDR && process.env.MONGODB_PORT_27017_TCP_PORT && process.env.MONGODB_INSTANCE_NAME) {
    mongodbUrl = 'mongodb://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@' + process.env.MONGODB_PORT_27017_TCP_ADDR + ':' + process.env.MONGODB_PORT_27017_TCP_PORT + '/' + process.env.MONGODB_INSTANCE_NAME;
}
else {
    mongodbUrl = 'mongodb://127.0.0.1:27017/danmaku';
}
mongoose.connect(mongodbUrl);

module.exports = mongoose;