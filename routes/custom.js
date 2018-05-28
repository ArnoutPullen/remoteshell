var express = require('express');
var router = express.Router();
const exec = require('child_process').exec;
var config = require('../config/config');

// http://localhost:3000/api/custom/?command=ls
router.get('/', (req, res) => {
    exec(req.query.command, (err, stdout, stderr) => {
        // res.json(response(err, stdout, stderr));
        if (stdout.includes("\n")) {
            stdout = stdout.split("\n");
        }
        res.json({
            "error": err,
            "response": stdout,
            "stderror": stderr
        });
    });
});

module.exports = router;