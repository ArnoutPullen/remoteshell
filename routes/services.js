var express = require('express');
var router = express.Router();
const execute = require('child_process').exec;
const responseConverter = require('../core/responseConverter');

// All services
router.get('/', (request, response) => {
    var command = 'service --status-all';
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

// Get status service
router.get('/:service', (request, response) => {
    var command = 'service ';
    if (request.params.service != null) {
        command += `${request.params.service} status`;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

// Start service
router.get('/:service/start', (request, response) => {
    var command = 'service ';
    if (request.params.service != null) {
        command += `${request.params.service} start`;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

// Restart service
router.get('/:service/restart', (request, response) => {
    var command = 'service ';
    if (request.params.service != null) {
        command += `${request.params.service} restart`;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

// Stop service
router.get('/:service/stop', (request, response) => {
    var command = 'service ';
    if (request.params.service != null) {
        command += `${request.params.service} stop`;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

module.exports = router;