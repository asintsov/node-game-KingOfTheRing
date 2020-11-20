class Boxer {
    images;
    image;
    parametrs;
    state;
    oponent;

    constructor() {
        this.images = new Map();
        this.parametrs = {damage: 10, arm: 160, speed: 30, actionFactor: 1};
        this.state = {}
    }
    getImage(){return this.image;}
    setImage(){this.image = this.images.get(this.state.action);}
    setOponent(oponent){ this.oponent = oponent;}
    setState(state){
        this.state.action = state.action == undefined ? this.state.action : state.action;
        this.state.life = state.life == undefined ? this.state.life : state.life;
        this.state.block = state.block == undefined ? this.state.block : state.block;
        this.state.x = state.x == undefined ? this.state.x : state.x;
        this.state.face = state.face == undefined ? this.state.face : state.face;
        this.state.fist = state.fist == undefined ? this.state.fist : state.fist;
        this.state.back = state.back == undefined ? this.state.back : state.back;
        this.setImage();
    };
    getAction(){return this.state.action;}
    getLife(){return this.state.life;}
    getBlock(){return this.state.block;}
    getX(){return this.state.x;}
    getFace(){return this.state.face;}
    getFist(){return this.state.fist;}
    getBack(){return this.state.back;}
    getDamage(){return this.parametrs.damage;}

    action(command){
        this.setState({action : command});
        switch(command){
            case 'STAND':
                this.setState({block : 1, fist : this.state.face});
                break;
            case 'FRONTHIT':
                this.setState({fist : this.state.face + this.parametrs.arm * this.parametrs.actionFactor});
                break;
            case 'UPPERHIT':
                this.setState({fist : this.state.face + this.parametrs.arm * this.parametrs.actionFactor});
                break;
            case 'LOWERHIT':
                this.setState({fist : this.state.face + this.parametrs.arm * this.parametrs.actionFactor});
                break;
            case 'BLOCK':
                this.setState({block : 0, fist : this.state.face});
                break;
            case 'RIGHT':
                this.move('RIGHT');
                break;
            case 'LEFT':
                this.move('LEFT');
                break;
        }
    }

    move(destination){
        let speed = this.parametrs.speed;
        switch(destination){
            case 'RIGHT':
                speed *= 1;
                break;
            case 'LEFT':
                speed *= -1;
                break;
        }
        this.setState({
            x : this.state.x + speed,
            face : this.state.face + speed,
            fist : this.state.fist + speed,
            back : this.state.back + speed 
        });
        if (this.state.back < 0 || this.state.back > 640 || this.state.face < 0 || this.state.face > 640){
            this.setState({
                x : this.state.x - speed,
                face : this.state.face - speed,
                fist : this.state.fist - speed,
                back : this.state.back - speed 
            });
        }
    }
}

export {Boxer};