import {Boxer} from './boxer.class.js'

class Ring{
    image;
    constructor(){
        this.image = document.getElementById('ring-img');
    }
    getImage(){return this.image;}
}

class BlueBoxer extends Boxer{
    constructor(hitEvent){
        super(hitEvent);
        this.images.set('START', document.getElementById("boxer-blue-img-start"));
        this.images.set('STAND', document.getElementById("boxer-blue-img-stand"));
        this.images.set('FRONTHIT', document.getElementById("boxer-blue-img-fronthit"));
        this.images.set('UPPERHIT', document.getElementById("boxer-blue-img-upperhit"));
        this.images.set('LOWERHIT', document.getElementById("boxer-blue-img-lowerhit"));
        this.images.set('BLOCK', document.getElementById("boxer-blue-img-block"));
        this.images.set('DAMAGE', document.getElementById("boxer-blue-img-damage"));
        this.images.set('WIN', document.getElementById("boxer-blue-img-win"));
        this.images.set('LOSE', document.getElementById("boxer-blue-img-lose"));
        this.images.set('RIGHT', document.getElementById("boxer-blue-img-stand"));
        this.images.set('LEFT', document.getElementById("boxer-blue-img-stand"));
        this.state = {
            action: 'START',
            life: 150,
            block: 1,
            x: 0,
            face: 150,
            fist: 0,
            back: 0
        }; 
        this.setImage(); 
    }
}

class RedBoxer extends Boxer{
    constructor(hitEvent){
        super(hitEvent);
        this.images.set('START', document.getElementById("boxer-red-img-start"));
        this.images.set('STAND', document.getElementById("boxer-red-img-stand"));
        this.images.set('FRONTHIT', document.getElementById("boxer-red-img-fronthit"));
        this.images.set('UPPERHIT', document.getElementById("boxer-red-img-upperhit"));
        this.images.set('LOWERHIT', document.getElementById("boxer-red-img-lowerhit"));
        this.images.set('BLOCK', document.getElementById("boxer-red-img-block"));
        this.images.set('DAMAGE', document.getElementById("boxer-red-img-damage"));
        this.images.set('WIN', document.getElementById("boxer-red-img-win"));
        this.images.set('LOSE', document.getElementById("boxer-red-img-lose"));
        this.images.set('RIGHT', document.getElementById("boxer-red-img-stand"));
        this.images.set('LEFT', document.getElementById("boxer-red-img-stand"));
        this.parametrs.actionFactor = -1;
        this.state = {
            action: 'START',
            life: 150,
            block: 1,
            x: 326,
            face: 490,
            fist: 490,
            back: 640
        };
        this.setImage();
    }
}

class Scale{
    images;
    boxer;
    constructor(boxer){
        this.images = new Map();
        this.boxer = boxer;
    }
    getScale(){
        return this.images.get(this.boxer.getLife());
    }
}

class BlueScale extends Scale{
    constructor(boxer){
        super(boxer);
        this.images.set(150,document.getElementById("scale-blue-img-150"));
        this.images.set(140,document.getElementById("scale-blue-img-140"));
        this.images.set(130,document.getElementById("scale-blue-img-130"));
        this.images.set(120,document.getElementById("scale-blue-img-120"));
        this.images.set(110,document.getElementById("scale-blue-img-110"));
        this.images.set(100,document.getElementById("scale-blue-img-100"));
        this.images.set(90,document.getElementById("scale-blue-img-90"));
        this.images.set(80,document.getElementById("scale-blue-img-80"));
        this.images.set(70,document.getElementById("scale-blue-img-70"));
        this.images.set(60,document.getElementById("scale-blue-img-60"));
        this.images.set(50,document.getElementById("scale-blue-img-50"));
        this.images.set(40,document.getElementById("scale-blue-img-40"));
        this.images.set(30,document.getElementById("scale-blue-img-30"));
        this.images.set(20,document.getElementById("scale-blue-img-20"));
        this.images.set(10,document.getElementById("scale-blue-img-10"));
        this.images.set(0,document.getElementById("scale-blue-img-10"));
    }
}

class RedScale extends Scale{
    constructor(boxer){
        super(boxer);
        this.images.set(150,document.getElementById("scale-red-img-150"));
        this.images.set(140,document.getElementById("scale-red-img-140"));
        this.images.set(130,document.getElementById("scale-red-img-130"));
        this.images.set(120,document.getElementById("scale-red-img-120"));
        this.images.set(110,document.getElementById("scale-red-img-110"));
        this.images.set(100,document.getElementById("scale-red-img-100"));
        this.images.set(90,document.getElementById("scale-red-img-90"));
        this.images.set(80,document.getElementById("scale-red-img-80"));
        this.images.set(70,document.getElementById("scale-red-img-70"));
        this.images.set(60,document.getElementById("scale-red-img-60"));
        this.images.set(50,document.getElementById("scale-red-img-50"));
        this.images.set(40,document.getElementById("scale-red-img-40"));
        this.images.set(30,document.getElementById("scale-red-img-30"));
        this.images.set(20,document.getElementById("scale-red-img-20"));
        this.images.set(10,document.getElementById("scale-red-img-10"));
        this.images.set(0,document.getElementById("scale-red-img-10"));
    }
}

export {Ring, BlueBoxer, RedBoxer, BlueScale, RedScale};