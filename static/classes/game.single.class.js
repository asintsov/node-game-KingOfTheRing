import {Game} from './game.class.js'

class GameSingle extends Game{
    _count

    constructor(corner){
        super(corner);
        this._count = 0
    }

    GetRandomInt(max) {return Math.floor(Math.random() * Math.floor(max));}

    _AutoKeyDown(rndm){
        switch(rndm){
            case 0:
                this._oponent.action('FRONTHIT');
                break;
            case 1:
                this._oponent.action('BLOCK');
                break;
            case 2:
                this._oponent.action('UPPERHIT');
                break;
            case 3:
                this._oponent.action('LOWERHIT');
                break;
            case 4 || 6 :
                this._oponent.action('RIGHT');
                break;
            case 5 || 7 :
                this._oponent.action('LEFT');
                break;
        }
        this._Hit()
    }

    _AutoKeyUp(){
        this._oponent.action('STAND');
    }


    _Hit(){
        if (this._boxers.blue.getFist() > this._boxers.red.getFace()){
            if (this._boxers.red.getLife() > 0){
                this._boxers.red.setState({action : 'DAMAGE'});
                this._Sleep(20).then(() => {this._boxers.red.setState({action : 'STAND'});});
                this._boxers.red.setState({life: this._boxers.red.getLife() - this._boxers.blue.getDamage() * this._boxers.red.getBlock()});
                if (this._boxers.red.getLife() == 0){
                    this._Win('BLUE');
                }
            }
        }
        if (this._boxers.red.getFist() < this._boxers.blue.getFace()){
            if (this._boxers.blue.getLife() > 0){
                this._boxers.blue.setState({action : 'DAMAGE'});
                this._Sleep(20).then(() => {this._boxers.blue.setState({action : 'STAND'});});
                this._boxers.blue.setState({life: this._boxers.blue.getLife() - this._boxers.red.getDamage() * this._boxers.blue.getBlock()});
                if (this._boxers.blue.getLife() == 0){
                    this._Win('RED');
                }
            }
        }
    }

    Play(){
        this._timer = setInterval(() => {
            this._count++;
            if (this._count % 25 == 0){
                let rndm = this.GetRandomInt(8);
                this._AutoKeyDown(rndm);
            }
            if (this._count % 35 == 0){
                this._AutoKeyUp();
            }
            this._Update();
        }, 1000 / 100);
        window.addEventListener("resize", () => {this._Resize();}); 
        window.addEventListener("keydown", (e) => { this._KeyDown(e);}); 
        window.addEventListener("keyup", () => { this._KeyUp();}); 
    }
}

export {GameSingle};