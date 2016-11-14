module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('content-type', 'application/json; charset=utf-8');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
};