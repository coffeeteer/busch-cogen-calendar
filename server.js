var http = require('http');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var Promise = require('es6-promise').Promise;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// var index = require('./models/index.js');

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
});

//DHX Calendar **********************

/*Using MySQL for calendar*/
app.get('/data', function(req, res){
    console.log('hitting app.get("data")');
    connection.event.find().toArray(function(err, data){
        console.log('going through connection event');
        //set id property for all records
        for (var i = 0; i < rows.length; i++)
            rows[i].text;
            console.log('hitting app.get("data") for loop');
        //output response
        res.send(data);
    });
});


/*Using MySQL for calendar*/
//DHX Calendar ****************************************

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
});