var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    var command = 'services --status-all';
    exec(command, (err, stdout, stderr) => {
        if (stdout.includes("\n")) {
            stdout = stdout.split("\n");
        }
        res.json(response(err, stdout, stderr));
    });
});

router.get('/:service', (req, res) => {
    var command = 'services ';
    if (req.params.service != null) {
        command += req.params.service;
    }
    exec(command, (err, stdout, stderr) => {
        if (stdout.includes("\n")) {
            stdout = stdout.split("\n");
        }
        res.json(response(err, stdout, stderr));
    });
});

router.get('/:service/start', (req, res) => {
    var command = 'services ';
    if (req.params.service != null) {
        command += `${req.params.service} start`;
    }
    exec(command, (err, stdout, stderr) => {
        if (stdout.includes("\n")) {
            stdout = stdout.split("\n");
        }
        res.json(response(err, stdout, stderr));
    });
});

router.get('/:service/restart', (req, res) => {
    var command = 'services ';
    if (req.params.service != null) {
        command += `${req.params.service} restart`;
    }
    exec(command, (err, stdout, stderr) => {
        if (stdout.includes("\n")) {
            stdout = stdout.split("\n");
        }
        res.json(response(err, stdout, stderr));
    });
});

router.get('/:service/stop', (req, res) => {
    var command = 'services ';
    if (req.params.service != null) {
        command += `${req.params.service} stop`;
    }
    exec(command, (err, stdout, stderr) => {
        if (stdout.includes("\n")) {
            stdout = stdout.split("\n");
        }
        res.json(global.response(err, stdout, stderr));
    });
});

module.exports = router;