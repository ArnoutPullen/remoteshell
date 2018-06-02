var express = require('express');
var router = express.Router();
const execute = require('child_process').exec;
const responseConverter = require('../core/responseConverter');

// All files
router.get('/', (request, response) => {
    var command = 'ls /';
    if (request.query.folder != null) {
        command += request.query.folder;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

// Create file
router.post('/create', (request, response) => {
    var command = '';
    if (request.body.type == 'folder') {
        command += 'mkdir ';
    } else if (request.body.type == 'file') {
        command += 'touch ';
    }
    if (request.body.folder != null) {
        command += `/${request.body.folder}`;
    }
    if (request.body.name != null) {
        command += `/${request.body.name}`;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

// Rename file/folder
router.post('/rename', (request, response) => {
    var command = 'mv ';
    if (request.body.old != null) {
        command += request.body.old;
    }
    if (request.body.new != null) {
        command += request.body.new;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

// Delete file/folder
router.post('/delete', (request, response) => {
    var command = 'rm ';
    if (request.body.name != null) {
        command += `/${request.body.name}`;
    }
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

module.exports = router;