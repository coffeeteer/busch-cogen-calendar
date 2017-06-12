var http = require('http');
var express = require('express');
var logger = require('morgan');

const app = express();

app.use(express.static('./public'));
app.use(logger('combined'));

app.get('/', (req, res) => {
	res.sendFile('index.html');
	// res.sendFile('./public/app.html', { root: __dirname });
});

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
})