import { SVG_NS, KEYS, PROPERTIES } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Bullet from './Bullet';
import Text from './Text';

export default class Game {

    constructor(element, width, height) {
        //Properties
        this._element = element;
        this._width = width;
        this._height = height;
        this._gameElement = document.getElementById(this._element);

        this._paddleWidth = 8;
        this._paddleHeigth = 56;
        this._boardGap = PROPERTIES.gap;
        this._ballRadius = 8;
        this._board = new Board(this._width, this._height);
        this._pause = false;
        this._scoreFontSize = 60;
        this._reset = false;

        // Multiple keyboard pressed.
        this._keyPressed = {};

        document.addEventListener('keydown', (event) => {
            this._keyPressed[event.key] = true;
        }, false);

        document.addEventListener('keyup', (event) => {
            this._keyPressed[event.key] = false;
        }, false);

        // Pause game pressed.
        document.addEventListener('keydown', event => {
            if (event.key === KEYS.pause) {
                this._pause = !this._pause;
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === KEYS.reset) {
                this._reset = !this._reset;
            }
        });

        //Players
        this._player1 = new Paddle(
            this._height,
            this._paddleWidth,
            this._paddleHeigth,
            this._boardGap,
            ((this._height - this._paddleHeigth) / 2),
            KEYS.p1up,
            KEYS.p1down
        );

        this._player2 = new Paddle(
            this._height,
            this._paddleWidth,
            this._paddleHeigth,
            (this._width - this._boardGap - this._paddleWidth),
            ((this._height - this._paddleHeigth) / 2),
            KEYS.p2up,
            KEYS.p2down
        );

        //Game Objects
        this._bullet_p1 = new Bullet(15, 5);
        this._bullet_p2 = new Bullet(15, 5);
        this._ball1 = new Ball(this._ballRadius, this._width, this._height, 1);
        this._ball2 = new Ball(this._ballRadius, this._width, this._height, -1);
        this._score1 = new Score(this._width / 2 - 50, 30, this._scoreFontSize);
        this._score2 = new Score(this._width / 2 + 25, 30, this._scoreFontSize);
		this._text = new Text(this._width/2 - 120, this._height/2 - 20, this._scoreFontSize / 2);
    }


    reset(){
        this._bullet_p1 = new Bullet(15, 5);
        this._bullet_p2 = new Bullet(15, 5);
        this._ballRadius = 8;
        this._ball1 = new Ball(this._ballRadius, this._width, this._height, 1);
        this._ball2 = new Ball(this._ballRadius, this._width, this._height, -1);
        this._score1 = new Score(this._width / 2 - 50, 30, this._scoreFontSize);
        this._score2 = new Score(this._width / 2 + 25, 30, this._scoreFontSize);
        this._text = new Text(this._width/2 - 120, this._height/2 - 20, this._scoreFontSize / 2);
        this._player1.resetScore();
       this._player1._x = this._boardGap;
        this._player1._y = ((this._height - this._paddleHeigth) / 2);
        this._player2.resetScore();
        this._player2._x = (this._width - this._boardGap - this._paddleWidth);
        this._player2._y = ((this._height - this._paddleHeigth) / 2);
    }

    render() {

        //Reset Game
        if(this._reset){
            this._reset = !this._reset;
            this._pause = false;
            this.reset();
        }

        if (this._keyPressed[KEYS.spaceBar]) {
			this._pause = !this._pause;
        }

        if(this._pause || this._player1.getScore() >= 10 || this._player2.getScore() >= 10){
            return;
        }

        //Create SVG
        this._gameElement.innerHTML = '';
        let svg = document.createElementNS(SVG_NS, 'svg');
        svg.setAttributeNS(null, 'width', this._width);
        svg.setAttributeNS(null, 'height', this._height);
        svg.setAttributeNS(null, 'viewBox', `0 0 ${this._width} ${this._height}`);
        this._gameElement.appendChild(svg);

        //Render Game Objects
        this._board.render(svg);
        this._player1.render(svg, this._keyPressed, true);
        this._player2.render(svg, this._keyPressed, false);
        this._ball1.render(svg, this._player1, this._player2);
        this._ball2.render(svg, this._player1, this._player2);
        this._score1.render(svg, this._player1.getScore());
        this._score2.render(svg, this._player2.getScore());

        if(this._player1.getScore() == 10) {
			this._text.winner(svg, 1);
			this._pause = true;
		}

		if(this._player2.getScore() == 10) {
			this._text.winner(svg, 2);
            this._pause = true;
		}

        //Bullet for Player1
        //const [left_p1, right_p1, top_p1, bottom_p1] = this._player1.coordinates();
        //this.bullet.render(svg);
        //this._bullet_p1.render(svg, (left_p1 + this._player1._width), (top_p1 + (this._player1._height / 2)));

        //Bullet for Player2
        //const [left_p2, right_p2, top_p2, bottom_p2] = this._player2.coordinates();
        //this.bullet.render(svg);
        //this._bullet_p2.render(svg, (left_p2 - this._bullet_p2._width), (top_p2 + (this._player2._height / 2)));
    }

}
