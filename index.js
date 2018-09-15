const express = require('express');
const app = express();
var cors = require('cors');
var config = require('./config');
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: 'http://localhost:4200'}));

// Register Routes
app.use(config.api.prefix + '/files', require('./routes/files'));
app.use(config.api.prefix + '/services', require('./routes/services'));
app.use(config.api.prefix + '/custom', require('./routes/custom'));

// Default Route
app.get('/', (request, response) => {
	response.send(`Use prefix ${config.api.prefix} instead`);
});

// Route not found handler
app.get('*', (request, response) => {
	response.send(`Route not found '${request.params[0]}'`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});