var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: "file",
            filename: 'logs/DPlayer.log',
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

module.exports = logger;