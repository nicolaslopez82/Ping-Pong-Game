import { SVG_NS, KEYS } from '../settings';

export default class Bullet {
    constructor(width, height, x, y){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.direction = 1;
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
        this.vy = 0;
        while(this.vy === 0){
            this.vy = Math.floor(Math.random() * 10 - 15);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy));
    }

    render(svg, x, y){
        // this.x = this.x + this.vx;
        // this.y = this.y + this.vy;    
        this.x = x;
        this.y = y;               
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
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