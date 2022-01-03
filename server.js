const compression = require("compression");
const express = require("express");
const hsts = require('hsts');

var app = express();

//Disclosing fingerprints from web application technologies is security-sensitive
app.disable("x-powered-by");

app.use(compression());
app.use(express.static(__dirname + '/dist'));
app.use(hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
}));

app.get('*', function (request, response) {
    if (!request.secure) {
        if(request.header.host.startsWith("memija")) {
            response.redirect('https://' + request.headers.host + request.url);  
        }
    }
});
app.get('*.js', function (request, response, next) {
    request.url = request.url + '.gz';
    response.set('Content-Encoding', 'gzip');
    next();
});

app.listen(process.env.PORT || 8080);
