const express = require('express');
const app = express();
const exec = require('child_process').exec;

app.get('/', (req, res) => {
	exec('ls /', (err, stdout, stderr) => {
		res.json({
			"err": err,
			"stdout": stdout,
			"stderr": stderr
		});
	});
});

app.get('/api/files', (req, res) => {
	exec('ls /', (err, stdout, stderr) => {
		res.json({
			"err": err,
			"stdout": stdout,
			"stderr": stderr
		});
	});
});

app.get('/api/files/:folder', (req, res) => {
	exec('ls ' + req.params.folder, () => {
		res.json({
			"err": err,
			"stdout": stdout,
			"stderr": stderr
		});
	});
});

app.get('/api/custom', (req, res) => {
	exec(req.query.command, (err, stdout, stderr) => {
		res.json({
			"err": err,
			"stdout": stdout,
			"stderr": stderr
		});
	});
});

const port = process.env.port || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
