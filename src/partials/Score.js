import { SVG_NS } from '../settings';

export default class Score{

    constructor(x, y, size){
        this._x = x;
        this._y = y;
        this._size = size;
    }

        //All render for the board
        render(svg, score){

            //Create your element set properties.
            let text = document.createElementNS(SVG_NS, 'text');
            text.setAttributeNS(null, 'x', this._x);
            text.setAttributeNS(null, 'y', this._y);
            text.setAttributeNS(null, 'fill', 'white');
            text.setAttributeNS(null, 'font-size', 12);
            text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
            text.textContent = score;
            
            svg.appendChild(text);
           
        }
}