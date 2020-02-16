const compression = require("compression");
const express = require("express");
const hsts = require('hsts');

var app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist'));
app.use(hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
}));
http.get('*', function (req, res) {  
    res.redirect('https://' + req.headers.host + req.url);
});
app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});
app.listen(process.env.PORT || 8080);
