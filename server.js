var http = require('http');
var express = require('express');
var logger = require('morgan');

const app = express();

app.use(express.static(__dirname + './public'));
app.use(logger('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));


app.get('/', (req, res) => {
	// res.sendFile(__dirname + 'index.html');
	res.sendFile('./public/index.html', { root: __dirname });
});

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
})