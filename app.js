const app = require('express')();
const http = require("http");
const https = require('https');
const path = require('path');

const fs = require('fs');

let options = {
	key: fs.readFileSync('/etc/letsencrypt/live/arveto.io/privkey.pem', 'utf8'),
	cert: fs.readFileSync('/etc/letsencrypt/live/arveto.io/fullchain.pem', 'utf8'),
}

/******************************************************************************/

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/public/app.html');
});

https.createServer(options, app).listen(443);

http.createServer(function (req, res) {
	res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
	res.end();
}).listen(80);
