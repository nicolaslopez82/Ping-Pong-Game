import { SVG_NS, KEYS, PROPERTIES } from '../settings';

export default class Paddle{

    constructor(boardHeight, width, height, x, y, up, down){
        this._boardHeight = boardHeight;
        this._width = width;
        this._height = height;
        this._x = x;
        this._y = y;
        this._up = up;
        this._down = down;     

        this._speed = PROPERTIES.speed;
        this._score = 0;

        this._keyPressed = {};
        document.addEventListener('keydown', event => {
            
            if(event.key === this._up || event.key === this._down){
                this._keyPressed[event.key] = true;
            }
            
            if(this._keyPressed[event.key] == true){
                console.log(event);
                switch(event.key){
                    case this._up: //don't move up, if is already 0.
                    this._y = Math.max(0, this._y - this._speed);
                        break;
            
                    case this._down:
                    this._y = Math.min(this._boardHeight - 56, this._y + this._speed);
                        break;	
                }
            }
            this.keyPressed[event.key] = false;
        });

        document.addEventListener('keyup', event => {            
                this._keyPressed[event.key] = false;            
        });

    }    

    getHeight(){
        return this._height;
    }

    increaseScore(){
        this._score++;
    }

    getScore(){
        return this._score;
    }  

    coordinates(){
        const leftX = this._x;
        const rightX = this._x + this._width;
        const topY = this._y;
        const bottomY = this._y + this._height;
        return [leftX, rightX, topY, bottomY];
    }

    render(svg){
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'width', this._width);
        rect.setAttributeNS(null, 'height', this._height);
        rect.setAttributeNS(null, 'x', this._x);
        rect.setAttributeNS(null, 'y', this._y);
        svg.appendChild(rect);
    }

}