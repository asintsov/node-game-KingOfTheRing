var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
const { isNullOrUndefined } = require('util');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 4000);
app.use('/static', express.static(__dirname + '/static'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'sb.html'));
});

// Запуск сервера
server.listen(4000, function() {
    console.log('Запускаю сервер на порте 4000');
});

var states = {
    blue: 
    {   action: null,
        life: null,
        block: null,
        x: null,
        face: null,
        fist: null,
        back: null
    },
    red:
    {   action: null,
        life: null,
        block: null,
        x: null,
        face: null,
        fist: null,
        back: null
    }
};

var corners = {blue: false, red: false};
io.on('connection', function(socket) {
    socket.on('new player', function(corner) {
        switch(corner){
            case 'BLUE':
                if (!corners.blue){
                    console.log("blue")
                    corners.blue = true;
                    socket.emit('corner', 'BLUE');
                    socket.on('state', (state) => {
                        states.blue = state;
                    })
                    socket.on('hit', (hit) => {
                        states.red.life -= hit * states.red.block
                        if (!states.red.life){
                            io.sockets.emit('win', 'BLUE')
                        }
                    })
                }
                else{

                }
                break
            case 'RED':
                if(!corners.red){
                    console.log("red")
                    corners.red = true;
                    socket.emit('corner', 'RED');
                    socket.on('state', (state) => {
                        states.red = state;
                    })
                    socket.on('hit', (hit) => {
                        states.blue.life -= hit * states.blue.block
                        if (!states.blue.life){
                            io.sockets.emit('win', 'RED')
                        }
                    })
                }
                else{
                    
                }
                break
        }
    });
    socket.on('disconnect', function(){
        //игра прерывается
    });
});

setInterval(function() {
  io.sockets.emit('states', states);

}, 1000 / 20);
