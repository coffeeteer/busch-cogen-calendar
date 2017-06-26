var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cogen'
});

connection.connect(function(err){
	if(err){
		console.error('Erroring connecting to MySQL');
		return;
	}
	console.log('Connection established!');
});

connection.query('SELECT * FROM events;', function(err, rows) {
	if(err) return err;

	// var body = req.params;
	console.log('Data received for Database \n');
	console.log(rows);
	
	// for (var i = 0; i < rows.length; i++) {
	//   // console.log(rows[i].text);
	//   //alert(rows[i].text)
	// };
});

connection.end(function(err){
	console.log('connection ended gracefully');
});

module.exports = {};