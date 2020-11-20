import {Ring, BlueBoxer, RedBoxer, BlueScale, RedScale} from './classes.js'
import {blueWinEvent, redWinEvent} from '../sb.js'

class Game{
    _canvas
    _сntxt
    _ring
    _boxers
    _scales
    _corner;
    _player;
    _oponent;
    _keyFlag
    _timer;
    _keycodes 
    
    constructor(corner){
        this._canvas = document.getElementById("canvas");
        this._cntxt = this._canvas.getContext('2d');
        this._ring = new Ring();
        this._boxers = {
            blue: new BlueBoxer(),
            red: new RedBoxer()
        };
        this._scales = {
            blue: new BlueScale(this._boxers.blue),
            red: new RedScale(this._boxers.red)
        };
        this._corner = corner;
        switch(this._corner){
            case 'BLUE':
                this._player = this._boxers.blue;
                this._oponent = this._boxers.red;
                break;
            case 'RED':
                this._player = this._boxers.red;
                this._oponent = this._boxers.blue;
                break;
        }
        this._player.setOponent(this._oponent);
        this._oponent.setOponent(this._player);       
        this._keyDownFlag = false;
        this._timer = 0
        this._keycodes = {
            fronthit: 87, // клавиша 'w'
            block: 83,    // клавиша 's'
            upperhit: 81, // клавиша 'q'
            lowerhit: 65, // клавиша 'a'
            moveright: 39,// клавиша 'ArrowRight'
            moveleft: 37  // клавиша 'ArrowLeft'
        }
    }

    _Sleep(time) {return new Promise((resolve) => setTimeout(resolve, time));}

    _Resize(){
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }

    _Draw(){
        this._cntxt.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._cntxt.drawImage(this._ring.getImage(), 0, 0);
        this._cntxt.drawImage(this._boxers.blue.getImage(), this._boxers.blue.getX(), 0);
        this._cntxt.drawImage(this._boxers.red.getImage(), this._boxers.red.getX(), 0 );
        this._cntxt.drawImage(this._scales.blue.getScale(), 10, 0);
        this._cntxt.drawImage(this._scales.red.getScale(), 420, 0);
    }

    _Update(){
        this._Resize();
        this._Draw();
    }

    _KeyDown(e){
        if (!this._keyDownFlag){
            switch(e.keyCode)
            {
                case this._keycodes.fronthit:
                    this._player.action('FRONTHIT');
                    this._keyDownFlag = true;
                    this._Hit();
                    break;
                case this._keycodes.block:
                    this._player.action('BLOCK');
                    break;
                case this._keycodes.upperhit:
                    this._player.action('UPPERHIT');
                    this._keyDownFlag = true;
                    this._Hit();
                    break;
                case this._keycodes.lowerhit:
                    this._player.action('LOWERHIT');
                    this._keyDownFlag = true;
                    this._Hit();
                    break;
                case this._keycodes.moveright:
                    this._player.action('RIGHT');
                    break;
                case this._keycodes.moveleft:
                    this._player.action('LEFT');
                    break;
            }
        }
    }
    _KeyUp(){ 
        this._player.action('STAND');
        this._keyDownFlag = false
    }

    Play(){}

    _Hit(){};
    
    _Win(winner){
        clearInterval(this._timer);
        switch(winner){
             case 'BLUE':
                window.dispatchEvent(blueWinEvent);
                break;
             case 'RED':
                window.dispatchEvent(redWinEvent);
                break;
        }
    }
}

export {Game}