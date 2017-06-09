var http = require('http');
var express = require('express');
// var bootstrapCalendar = require("bootstrap-calendar");

const app = express();

app.use(express.static('./public'));
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

const server = new http.Server(app);

const port = process.env.PORT || 3010;
server.listen(port, () => {
	console.log(`connected to port ${port}`);
})