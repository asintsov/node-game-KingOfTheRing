import {GameSingle} from './classes/game.single.class.js'

function start_singleplayer(corner){
    let game = new GameSingle(corner);
    game.Play();
    game.number = game.GetRandomInt(5)
}

export{start_singleplayer}