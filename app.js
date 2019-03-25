const app = require('express')();
const server = require("http").createServer(app);
const path = require('path');

/******************************************************************************/

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/public/app.html');
});

server.listen(8080);
