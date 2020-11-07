import {GameMultiplayer} from './classes/game.multiplayer.class.js'

function start_multiplayer(corner){
    var socket = io();
    socket.emit('new player', corner);
    socket.on('corner', (corner) => {
        const game = new GameMultiplayer(corner, socket);
        game.Play();
    });
}

export{start_multiplayer}