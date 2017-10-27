'use strict';
var port = process.env.PORT || 1337;
var app = require('express')();
var express = require('express');
var bodyParser = require("body-parser");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs')
var m = require('moment')

server.listen(port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// GET method route
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

// POST method route
app.post('/', function (req, res) {
    if (req.query && req.query.validationtoken) {
        console.log('Found validation token: ', req.query.validationtoken);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(req.query.validationtoken);
    }
    else {
        /* Write to file */
        // Write changes in a file
        var data = JSON.stringify(req.body.value);
        console.log(JSON.stringify(req.body.value))
        io.emit('list:changes', data);
        //res.send(req.body.value);
        const fileName = __dirname + '/public/webhooksLog.txt';
        fs.exists(fileName, (exists) => {
            let fileData = "";
            if (exists) {
                fileData = fs.readFileSync(fileName, 'utf8');
            }
            let txtFile = "";
            txtFile += `<b>Retrieved</b>: ${m().toISOString()}</br>`;
            txtFile += JSON.stringify(data);
            fileData = txtFile + '</br></br>' + fileData;
            fs.writeFileSync(fileName, fileData, { encoding: 'utf8' });
        });
        //if (typeof req.body.value !== "undefined" && req.body.value !== null) {
        //}
    }
});
