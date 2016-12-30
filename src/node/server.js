var
    express = require('express'),
    expressApp = express(),
    server = require('http').Server(expressApp),
    io = require('socket.io')(server, {origins: 'localhost:*'})
    ;

expressApp.get('/tic', function (req, res) {
    io.sockets.emit('time', req.query.time);
    res.json('OK');
});

expressApp.listen(6400, '0.0.0.0');

server.listen(8080);
