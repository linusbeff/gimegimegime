const express = require('express');
let app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.use(express.static(__dirname + '/pub'))


io.on('connection', function (socket) {
  socket.on('new', function (data) {
    console.log(data);
    io.emit('toClient',data);
  })
})
