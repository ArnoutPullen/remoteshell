const express = require('express');
const app = express();
const exec = require('child_process').exec;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const config = require('./config/config');
const port = process.env.port || 3000;

// Routes
// require('./routes/files')(app);
// require('./routes/services')(app);
// require('./routes/custom')(app);

app.use('/api/files', require('./routes/files'));
app.use('/api/services', require('./routes/services'));
app.use('/api/custom', require('./routes/custom'));

response = (error, output, stderror) => {
	if (output.includes("\n")) {
		output = output.split("\n");
	}
	return {
		"error": error,
		"response": output,
		"stderror": stderror
	};
};

function response(error, output, stderror) {
	if (output.includes("\n")) {
		output = output.split("\n");
	}
	return {
		"error": error,
		"response": output,
		"stderror": stderror
	};
}

function checkPlatform() {
	// 'aix', 'android', 'darwin'(macos), 'freebsd', 'linux', 'openbsd', 'sunos', 'win32'(windows), 'cygwin'
	$platform = process.platform;
	return $platform;
}

app.get('/', (req, res) => {
	// console.log(config.schema.ubuntu.diretory.create);
	// console.log();
	res.send(checkPlatform());
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
