var http = require('http');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var Promise = require('es6-promise').Promise;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cogen'
});

//connect to the mongoDB
// var db = require('mongoskin').db("mongodb://localhost:27017/cogen-employ", { w: 0});
//     db.bind('event');

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
// db.article.find().toArray(function(err, items) {
//         db.close();
// });

app.get('/init', function(req, res){
    db.event.insert({ 
        text:"My test event A", 
        start_date: new Date(2017,5,1),
        end_date:   new Date(2017,5,5), 
        color: '#cccccc'
    });
    db.event.insert({ 
        text:"One more test event", 
        start_date: new Date(2017,5,8),
        end_date:   new Date(2017,5,9),
        color: "#BADA55"
    });

    /*... skipping similar code for other test events...*/
    res.send("Test events were added to the database");
});


app.get('/data', function(req, res){
    db.event.find().toArray(function(err, data){
        //set id property for all records
        for (var i = 0; i < data.length; i++)
            data[i].id = data[i]._id;

        //output response
        res.send(data);
    });
});
//DHX Calendar ****************************************

/*---------- SQL Database -------------*/

// CREATE TABLE IF NOT Exists `shifts` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `start_date` datetime NOT NULL,
//   `end_date` datetime NOT NULL,
//   `text` varchar(255) NOT NULL,
//   PRIMARY KEY (`id`)
// )
// connection.connect(function(err){
// 	if(err){
// 		console.error('Erroring connecting to MySQL');
// 		return;
// 	}
// 	console.log('Connection established!');
// });

connection.query('SELECT events FROM cogen',function(err, rows) {
	if(err) return err;

	console.log('Data received for Database \n');
	console.log(rows);
});

connection.end(function(err){
	console.log('connection ended gracefully');
});

/*---------- SQL Database -------------*/

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
});