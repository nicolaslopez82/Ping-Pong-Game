import { SVG_NS, PROPERTIES } from '../settings';
import Game from './Game';

export default class Ball{

    constructor (radius, width, height, direction){
        this._ping = new Audio('public/sounds/pong-01.wav');
        this._sound = true;
        this._radius = radius;
        this._boardWidth = width;
        this._boardHeigth = height;
        this._direction = direction;
        this._color = 'white';
        this._colorPallet = ["white", "chartreuse", "deeppink", "fuchsia", "greenyellow"];
        this._speed = PROPERTIES.ballDirections;                        
        this.reset();
        document.addEventListener('keydown', event => {
            if(event.key === ''){
                this.reset();
            }            
        });        
    }

    reset(){
        this._x = this._boardWidth / 2;
        this._y = this._boardHeigth / 2;        
        this._vy = 0;
        while(this._vy === 0){
            this._vy = Math.floor(Math.random() * 10 - 5) + (this._speed);
        }
        this._vx = this._direction * (6 - Math.abs(this._vy) + (this._speed));
    }

    wallCollision(){
        const hitTop = (this._y - this._radius <= 0);
        const hitBottom = (this._y + this._radius >= this._boardHeigth);

        if(hitTop || hitBottom){
            this._vy *= -1;            
        }   

    }

    paddleCollision(player1, player2){
        if(this._vx > 0){
            //check for player2                        
            const [left, right, top, bottom] = player2.coordinates();        
            const hit = (this._x + this._radius >= left) 
                        && (this._y <= bottom)
                        && (this._y >= top);
            if(hit){
                this._vx *= -1;
                this._ping.play();
                this._color = this._colorPallet[Math.floor(Math.random() * 5)];
                this._radius = Math.floor(Math.random() * 5) + 5;                  
            }

        }else{
            //check for player1
            const [left, right, top, bottom] = player1.coordinates();
            const hit = (this._x - this._radius <= right) 
                        && (this._y <= bottom)
                        && (this._y >= top);

            if(hit){
                this._vx *= -1;
                this._ping.play();
                this._color = this._colorPallet[Math.floor(Math.random() * 5)];
                this._radius = Math.floor(Math.random() * 5) + 5;                
            }
        }
    }

    checkScore(player1, player2){
        const hitLeft = (this._x - this._radius <= 0);
        const hitRight = (this._x + this._radius >= this._boardWidth);        
        if(hitLeft){
            player2.increaseScore();            
            this.reset();
            this._direction *= -1;                        
        }else if(hitRight){
            player1.increaseScore();
            this.reset();
            this._direction *= -1;                
        }
    }

    render(svg, player1, player2){        
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this._radius);
        circle.setAttributeNS(null, 'cx', this._x);
        circle.setAttributeNS(null, 'cy', this._y);
        circle.setAttributeNS(null, 'fill', this._color);
        svg.appendChild(circle);
        this.wallCollision();
        this.paddleCollision(player1, player2);
        this.checkScore(player1, player2);
        this._x = this._x + this._vx;
        this._y = this._y + this._vy;
    }
}