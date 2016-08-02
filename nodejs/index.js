var express = require('express');
var logger = require('./tools/logger');
require('./tools/mongodb');

logger.info(`🍻 DPlayer start! Cheers!`);

var app = express();
app.all('*', require('./routes/all'));
app.get('/', require('./routes/get'));
app.post('/', require('./routes/post'));
app.get('/list', require('./routes/list'));
app.listen(1207);