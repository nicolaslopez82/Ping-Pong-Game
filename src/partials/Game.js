import { SVG_NS, KEYS, PROPERTIES } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Bullet from './Bullet';

export default class Game{

	constructor(element, width, height){
        //Properties
		this.element = element;
		this.width = width;
        this.height = height;
        this.gameElement = document.getElementById(this.element);
        
        this.paddleWidth = 8;
        this.paddleHeigth = 56;
        this.boardGap = PROPERTIES.gap;
        this.ballRadius = 8;        
        this.board = new Board(this.width, this.height);
        this.pause = false;
        this.scoreFontSize = 60;        
        
        //Players
        this.player1 = new Paddle(
            this.height,
            this.paddleWidth,
            this.paddleHeigth,
            this.boardGap,
            ((this.height - this.paddleHeigth) / 2),
            KEYS.p1up,
            KEYS.p1down
        );

        this.player2 = new Paddle(
            this.height,
            this.paddleWidth,
            this.paddleHeigth,
            (this.width - this.boardGap - this.paddleWidth),
            ((this.height - this.paddleHeigth) / 2),
            KEYS.p2up,
            KEYS.p2down
        );

        //Game Objects
        //const [left, right, top, bottom] = this.player1.coordinates();a
        //this.bullet = new Bullet(15, 5, (left + this.player1.width ), (top + ( this.player1.height  / 2) ) );
        this.bullet = new Bullet(15, 5);
        this.ball1 = new Ball(this.ballRadius, this.width, this.height, 1); 
        //this.ball2 = new Ball(this.ballRadius, this.width, this.height, -1);  
        this.score1 = new Score(this.width / 2 - 50, 30, this.scoreFontSize);
        this.score2 = new Score(this.width /2 + 25, 30, this.scoreFontSize);
        document.addEventListener('keydown', event => {            
            switch(event.key){
                case KEYS.spaceBar: 
                this.pause = !this.pause;
                    break;    	
            }
        }); 
    }   
	
	render(){

        if(this.pause){
            return;
        }

        //Create SVG
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);        
        this.gameElement.appendChild(svg);        

        //Render Game Objects
        this.board.render(svg);    	
        this.player1.render(svg);
        this.player2.render(svg);
        this.ball1.render(svg, this.player1, this.player2);
        //this.ball2.render(svg, this.player1, this.player2);
        this.score1.render(svg, this.player1.getScore());
        this.score2.render(svg, this.player2.getScore());    

        const [left, right, top, bottom] = this.player1.coordinates();

        //this.bullet.render(svg);
        this.bullet.render(svg, (left + this.player1.width ), (top + ( this.player1.height  / 2) ) );
        
    }

}