const express = require('express');
const app = express();
const exec = require('child_process').exec;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

app.get('/', (req, res) => {
	res.send('hello');
});

app.get('/api/files', (req, res) => {
	var query = 'ls /';
	if (req.query.folder != null) {
		query += req.query.folder;
	}
	exec(query, (err, stdout, stderr) => {
		if (stdout.includes("\n")) {
			stdout = stdout.split("\n");
		}
		res.json(response(err, stdout, stderr));
	});
});

app.get('/api/files/:folder', (req, res) => {
	exec('ls /' + req.query.folder, (err, stdout, stderr) => {
		res.json(response(err, stdout, stderr));
	});
});

app.post('/api/files/create', (req, res) => {
	var query = '';
	if(req.body.type == 'folder') {
		query += 'mkdir ';
	} else if(req.body.type == 'file') {
		query += 'touch ';
	}
	if(req.body.folder != null) {
		query += `/${req.body.folder}/`;
	}
	if(req.body.name != null) {
		query += req.body.name;
	}
	exec(query, (err, stdout, stderr) => {
		res.json(response(err, stdout, stderr));
	});
});

app.get('/api/custom', (req, res) => {
	exec(req.query.command, (err, stdout, stderr) => {
		res.json(response(err, stdout, stderr));
	});
});

const port = process.env.port || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
