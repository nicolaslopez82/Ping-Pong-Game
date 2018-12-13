import { SVG_NS, PROPERTIES } from '../settings';

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
    }    

    up() {
        this._y =  Math.max(this._y - this._speed, 0);
    }

 
    down() {
        this._y = Math.min(this._y + this._speed, this._boardHeight - this._height);
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

    resetScore(){
        this._score = 0;
    }  

    coordinates(){
        const leftX = this._x;
        const rightX = this._x + this._width;
        const topY = this._y;
        const bottomY = this._y + this._height;
        return [leftX, rightX, topY, bottomY];
    }

    render(svg, keyPressed, playerNumber1){
        
        let rect = document.createElementNS(SVG_NS, 'rect');
        let fillColor = playerNumber1 ? 'greenyellow' :  'deeppink';
      
        rect.setAttributeNS(null, 'fill', fillColor);
        rect.setAttributeNS(null, 'width', this._width);
        rect.setAttributeNS(null, 'height', this._height);
        rect.setAttributeNS(null, 'x', this._x);
        rect.setAttributeNS(null, 'y', this._y);
        svg.appendChild(rect);        

        if (keyPressed[this._up]) {
            this.up();
        }
        
        if (keyPressed[this._down]) {
        this.down();
        }
    }

}