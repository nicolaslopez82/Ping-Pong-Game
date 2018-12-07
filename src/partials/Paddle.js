import { SVG_NS } from '../settings';

export default class Paddle{

    constructor(boardHeight, width, height, x, y, up, down){
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.up = up;
        this.down = down;     

        this.speed = 10;
        this.score = 0;
        document.addEventListener('keydown', event => {
            console.log(event);
            switch(event.key){
                case this.up: //don't move up, if is already 0.
                this.y = Math.max(0, this.y - this.speed);
                    break;
        
                case this.down:
                this.y = Math.min(this.boardHeight, this.y + this.speed);
                    break;	
            }
        });
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