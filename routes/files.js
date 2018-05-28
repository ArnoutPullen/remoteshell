var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    var command = 'ls /';
    if (req.command.folder != null) {
        command += req.command.folder;
    }
    exec(command, (err, stdout, stderr) => {
        if (stdout.includes("\n")) {
            stdout = stdout.split("\n");
        }
        res.json(response(err, stdout, stderr));
    });
});

router.get('/:folder', (req, res) => {
    exec('ls /' + req.command.folder, (err, stdout, stderr) => {
        res.json(response(err, stdout, stderr));
    });
});

router.post('/create', (req, res) => {
    var command = '';
    if (req.body.type == 'folder') {
        command += 'mkdir ';
    } else if (req.body.type == 'file') {
        command += 'touch ';
    }
    if (req.body.folder != null) {
        command += `/${req.body.folder}/`;
    }
    if (req.body.name != null) {
        command += req.body.name;
    }
    exec(command, (err, stdout, stderr) => {
        res.json(response(err, stdout, stderr));
    });
});

module.exports = router;