import { SVG_NS, KEYS, PROPERTIES } from '../settings';

export default class Paddle{

    constructor(boardHeight, width, height, x, y, up, down){
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.up = up;
        this.down = down;     

        this.speed = PROPERTIES.speed;
        this.score = 0;

        this.keyPressed = {};
        document.addEventListener('keydown', event => {
            
            if(event.key == this.up || event.key == this.down){
                this.keyPressed[event.key] = true;
            }
            
            if(this.keyPressed[event.key] == true){
                console.log(event);
                switch(event.key){
                    case this.up: //don't move up, if is already 0.
                    this.y = Math.max(0, this.y - this.speed);
                        break;
            
                    case this.down:
                    this.y = Math.min(this.boardHeight - 56, this.y + this.speed);
                        break;	
                }
            }

            this.keyPressed[event.key] = false;
            
        });

        document.addEventListener('keyup', event => {
            
                this.keyPressed[event.key] = false;
            
            console.log(event);                    
        });

    }    

    getHeight(){
        return this.height;
    }

    increaseScore(){
        this.score++;
    }

    getScore(){
        return this.score;
    }  

    coordinates(){
        const leftX = this.x;
        const rightX = this.x + this.width;
        const topY = this.y;
        const bottomY = this.y + this.height;
        return [leftX, rightX, topY, bottomY];
    }

    render(svg){
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'fill', 'white');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        svg.appendChild(rect);
    }

}