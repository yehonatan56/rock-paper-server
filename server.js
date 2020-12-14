const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);

const port = 4001;
const io = socketIO(server);
var users = 0;

io.on('connection' , () => {
    if (users >= 2) {
        users == 0;
    }
    users++;

    socket.on('output' , (output) => sockets.emit(`user output ${output}`));
});

server.listen(port , () => console.log('server jony'));