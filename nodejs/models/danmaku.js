var mongoose = require('../tools/mongodb');
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

module.exports = danmaku;