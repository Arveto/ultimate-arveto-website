const app = require('express')();
const server = require("http").createServer(app);

/******************************************************************************/

app.use(require('express').static(__dirname + '/public'));

app.get('/', (req, res) => {
console.log('neozeiur');
    res.sendFile(__dirname + '/index.html');
});

server.listen(80);
