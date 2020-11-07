import {Game} from './game.class.js'

class GameMultiplayer extends Game{
    _socket
    
    constructor(corner, socket){
        super(corner);
        this._socket = socket;
    }


    _Hit(){
        if (this._boxers.blue.getFist() > this._boxers.red.getFace()){
            if (this._boxers.red.getLife() >= 0){
                this._socket.emit('hit', this._boxers.blue.getDamage());
                this._boxers.red.setState({action : 'DAMAGE'});
                this._Sleep(20).then(() => {this._boxers.red.setState({action : 'STAND'});});
            }
        }
        if (this._boxers.red.getFist() < this._boxers.blue.getFace()){
            if (this._boxers.blue.getLife() >= 0){
                this._socket.emit('hit', this._boxers.red.getDamage());
                this._boxers.blue.setState({action : 'DAMAGE'});
                this._Sleep(20).then(() => {this._boxers.blue.setState({action : 'STAND'});});
            }
        }
    };


    Play(){
        let state = {};
        this._socket.on('states', (states) => {
            this._boxers.blue.setState(states.blue);
            this._boxers.red.setState(states.red);
        });
        this._socket.on('win', (winner) => {
            this._Win(winner)
        });
        this._timer = setInterval(() => {  
            state = this._player.state;
            this._socket.emit('state', state);
            this._Update();
        }, 1000 / 65);
        window.addEventListener("resize", () => {this._Resize();}); 
        window.addEventListener("keydown", (e) => { this._KeyDown(e);}); 
        window.addEventListener("keyup", () => { this._KeyUp();}); 
    }
}

export {GameMultiplayer};