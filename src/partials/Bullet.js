import { SVG_NS, KEYS } from '../settings';

export default class Bullet {
    constructor(width, height){
        this._width = width;
        this._height = height;
        this._x;
        this._y;
        this._direction = 1;
    }

    reset(){
        this._vy = 0;
        while(this._vy === 0){
            this._vy = Math.floor(Math.random() * 10 - 15);
        }
        this._vx = this._direction * (6 - Math.abs(this._vy));
    }

    render(svg, x, y){
        this._x = x;
        this._y = y;
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this._width);
        rect.setAttributeNS(null, 'height', this._height);
        rect.setAttributeNS(null, 'x', this._x);
        rect.setAttributeNS(null, 'y', this._y);
        rect.setAttributeNS(null, 'fill', 'fuchsia');

        svg.appendChild(rect);
    }
}
