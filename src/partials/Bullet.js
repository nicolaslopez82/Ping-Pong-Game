import { SVG_NS, KEYS } from '../settings';

export default class Bullet {
    constructor(width, height){
        this._width = width;
        this._height = height;
        this._x;
        this._y;
        this._direction = 1;
        // this._vx = 0;
        // this._vy = 0;
        //this.reset();
        document.addEventListener('keydown', event => {
            if(event.key === ''){
                this.reset();
            }            
        }); 

        document.addEventListener('keydown', event => {
            console.log(event);
            switch(event.key){
                case KEYS.shotLeft: 
                //Bullet moving to the right.
                //this.y = Math.max(0, this.y - this.speed);
                    break;
        
                case KEYS.shotRight:
                //Bullet moving to the left.
                //this.y = Math.min(this.boardHeight - 56, this.y + this.speed);
                    break;	
            }
        });
    }

    reset(){
        this._vy = 0;
        while(this._vy === 0){
            this._vy = Math.floor(Math.random() * 10 - 15);
        }
        this._vx = this._direction * (6 - Math.abs(this._vy));
    }

    render(svg, x, y){
        // this.x = this.x + this.vx;
        // this.y = this.y + this.vy;    
        this._x = x;
        this._y = y;               
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this._width);
        rect.setAttributeNS(null, 'height', this._height);
        rect.setAttributeNS(null, 'x', this._x);
        rect.setAttributeNS(null, 'y', this._y);
        // rect.setAttributeNS(null, 'x', this.x);
        // rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'fill', 'fuchsia');

        svg.appendChild(rect);

        // this.wallCollision();
        // this.paddleCollision(player1, player2);
        // this.checkScore(player1, player2);
        // this.x = this.x + this.vx;
        // this.y = this.y + this.vy;
    }
}