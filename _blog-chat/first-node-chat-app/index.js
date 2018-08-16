// require进来这3个
var app = require('express')();
var fs = require('fs');
var http = require('http').Server(app);
var https = require('https');
var io = require('socket.io')(http);
var iossl = require('socket.io')(https);

var privateKey = fs.readFileSync('./tmp/3_qmen.space.key', 'utf8');
var certificate = fs.readFileSync('./tmp/2_qmen.space.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

// var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 3000;
var SSLPORT = 3001;


// 路由
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


// 一旦连接上
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

iossl.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        iossl.emit('chat message', msg);
    });
});


// 监听端口
http.listen(3000, function () {
    console.log('listening on *:3000');
});

httpsServer.listen(SSLPORT, function () {
    console.log('HTTPS Server is running on: *:%s', SSLPORT);
});
