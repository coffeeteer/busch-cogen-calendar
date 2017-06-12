var http = require('http');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var Promise = require('es6-promise').Promise;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//connect to the mongoDB
var db = require('mongoskin').db("localhost/testdb", { w: 0});
    db.bind('event');

const app = express();

// app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('./public')));

app.use(logger('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));


app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html');
	// res.sendFile('./public/index.html', { root: __dirname });
});

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
});