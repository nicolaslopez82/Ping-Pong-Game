import { SVG_NS, PROPERTIES } from '../settings';
import Game from './Game';

export default class Ball{

    constructor (radius, width, height, direction){
        this.ping = new Audio('public/sounds/pong-01.wav');
        this.sound = true;
        this.radius = radius;
        this.boardWidth = width;
        this.boardHeigth = height;
        this.direction = direction;
        this.color = 'white';
        this.colorPallet = ["white", "chartreuse", "deeppink", "fuchsia", "greenyellow"];
        this.speed = PROPERTIES.ballspeed;
        this.reset();
        document.addEventListener('keydown', event => {
            if(event.key === ''){
                this.reset();
            }            
        });        
    }

    reset(){
        this.x = this.boardWidth / 2;
        this.y = this.boardHeigth / 2;        
        this.vy = 0;
        while(this.vy === 0){
            this.vy = Math.floor(Math.random() * 10 - 5) + (this.speed);
        }
        this.vx = this.direction * (6 - Math.abs(this.vy) + (this.speed));
    }

    wallCollision(){
        const hitTop = (this.y - this.radius <= 0);
        const hitBottom = (this.y + this.radius >= this.boardHeigth);

        if(hitTop || hitBottom){
            this.vy *= -1;            
        }

    }

    paddleCollision(player1, player2){
        if(this.vx > 0){
            //check for player2                        
            const [left, right, top, bottom] = player2.coordinates();        
            const hit = (this.x + this.radius >= left) 
                        && (this.y <= bottom)
                        && (this.y >= top);
            if(hit){
                this.vx *= -1;
                this.ping.play();
                this.color = this.colorPallet[Math.floor(Math.random() * 5)];
                this.radius = Math.floor(Math.random() * 5) + 5;  
                PROPERTIES.ballspeed++;              
            }

        }else{
            //check for player1
            const [left, right, top, bottom] = player1.coordinates();
            const hit = (this.x - this.radius <= right) 
                        && (this.y <= bottom)
                        && (this.y >= top);

            if(hit){
                this.vx *= -1;
                this.ping.play();
                this.color = this.colorPallet[Math.floor(Math.random() * 5)];
                this.radius = Math.floor(Math.random() * 5) + 5;
                PROPERTIES.ballspeed++; 
            }
        }
    }

    checkScore(player1, player2){
        const hitLeft = (this.x - this.radius <= 0);
        const hitRight = (this.x + this.radius >= this.boardWidth);
        this.speed = PROPERTIES.ballspeed;
        if(hitLeft){
            player2.increaseScore();            
            this.reset();
            this.direction *= -1;
        }else if(hitRight){
            player1.increaseScore();
            this.reset();
            this.direction *= -1;                   
        }
    }

    render(svg, player1, player2){        
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        circle.setAttributeNS(null, 'fill', this.color);
        svg.appendChild(circle);
        this.wallCollision();
        this.paddleCollision(player1, player2);
        this.checkScore(player1, player2);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}