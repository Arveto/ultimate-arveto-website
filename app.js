const app = require('express')();
const http = require("http");
const https = require('https');
const path = require('path');

const fs = require('fs');

let options = {
	key: fs.readFileSync('/etc/letsencrypt/live/arveto.io/privkey.pem', 'utf8'),
	cert: fs.readFileSync('/etc/letsencrypt/live/arveto.io/fullchain.pem', 'utf8'),
}


app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();

});


/******************************************************************************/

app.use(require('express').static(__dirname + '/public'));

app.use(require('express').static(__dirname + '/henrotte'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/henrotte', (req, res) => {
  console.log("oui")
    res.sendFile(__dirname + '/index.html');
});

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


const url = require('url');

const mysql = require('mysql');

const databaseWrapper = require('./db_wrapper.js');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sos'
};
const database = new databaseWrapper.Database(mysql, config);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static('public'));


/*********************************************/

  //MAIN

  serve();

/*********************************************/



function serve() {

  app.post('/login', function(req, res) {

    console.log("login " + req.body.login +" : "+ req.body.password);

    let query = 'SELECT id FROM users WHERE login = ? AND password = ?;';
    database.query(query, [req.body.login, req.body.password])
    .then (rows => {
      console.log(rows);
      if(rows.length > 0) {
        console.log("login successful");

        res.json({message: 'gg', result: 'ok', id: rows[0]});
      } else {
        console.log("login error");

        res.json({message: 'wrong creds bro', result: 'error'})
      }
    });

  });

  app.post('/signup', function(req, res) {
    let query = 'INSERT INTO users(login, password, finame, faname) VALUES (?, ?, ?, ?)';
    database.query(query, [req.body.login, req.body.password, req.body.finame, req.body.faname])
    .then (rows => {
      res.json({message: 'ur signed up bro', result: 'ok', id: rows[0]});
    });
  });

  app.post('/listalerts', function(req, res) {
    let query = 'SELECT id, date, lat, lng WHERE user_id = ?';
    database.query(query, [req.body.id])
    .then (rows => {
      if(rows.length > 0) {
        console.log("seeded alerts for id " + req.body.id);

        res.json({message: 'here ur alerts', result: 'ok', alerts: rows});
      } else {
        console.log("no alerts for id " + req.body.id);

        res.json({message: 'no alerts for u', result: 'error'})
      }
    });
  });

  app.post('/listallalerts', function(req, res) {
    let query = 'SELECT id, (select finame from users where id = user_id) as finame, (select faname from users where id = user_id) as faname, date, lat, lng FROM alerts';
    database.query(query)
    let query = 'SELECT id, (select finame from users where id = user_id) as finame, (select faname from users where id = user_id) as faname, date, lat, lng';
    database.query(query)
    .then (rows => {
      if(rows.length > 0) {
        res.json({message: 'here ur alerts', result: 'ok', alerts: rows});
      } else {
        res.json({message: 'no alerts for u', result: 'error'})
      }
    });
  });

  app.post('/newalerts', function(req, res) {
    let query = 'INSERT INTO alerts(user_id, date, lat, lng) VALUES (?, ?, ?, ?)';
    database.query(query, [req.body.id, req.body.date, req.body.latitude, req.body.longitude])
    .then (rows => {
      if(rows.length > 0) {
        res.json({message: 'here ur alerts', result: 'ok', alerts: rows});
      } else {
        res.json({message: 'no alerts for u', result: 'error'})
      }
    });
  });

  app.post('/newalert', function(req, res) {
    let query = 'INSERT INTO alerts(user_id, date, lat, lng) VALUES (?, ?, ?, ?)';
    database.query(query, [req.body.id, req.body.date, req.body.latitude, req.body.longitude])
    .then (rows => {
        console.log("added alert for id " + req.body.id);

        res.json({message: 'ok i added ur alert', result: 'ok'});
    });
  });

  app.post('/isadmin', function(req, res) {


    let query = 'SELECT admin FROM users WHERE id = ?';
    database.query(query, [req.body.id])
    .then (rows => {
    console.log(rows)
      if(rows[0].admin) {
        res.json({message: 'ok ur admin boi', result: true});
      } else {
        res.json({message: 'nop', result: false})
      }
    });

  });

  app.post('/isadmin', function(req, res) {

    console.log("is admin " + req.body.login +" : "+ req.body.password);

    let query = 'SELECT admin FROM users WHERE id = ?;';
    database.query(query, [req.body.id])
    .then (rows => {
      if(rows[0].admin) {
        res.json({message: 'ok ur admin boi', result: true});
      } else {
        res.json({message: 'nop', result: false})
      }
    });

  });

  app.post('*', function(req, res) {
    res.json({message: 'Fais pas ta pute'})
  });


}
