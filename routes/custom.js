var express = require('express');
var router = express.Router();
const execute = require('child_process').exec;
var config = require('../config/config');
const responseConverter = require('../core/responseConverter');

// http://localhost:3000/api/custom/?command=ls
router.get('/', (request, response) => {
    var command = request.query.command;
    console.log(command);
    execute(command, (error, output, outputError) => {
        response.json(responseConverter(error, output, outputError));
    });
});

module.exports = router;