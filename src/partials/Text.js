import { SVG_NS } from '../settings.js';

export default class Text {
    constructor(x, y, size) {
      this._x = x;
      this._y = y;
      this._size = size;
    }
    
    winner(svg, playerNumber) {

      // winner's text color
      if (playerNumber === 1) {
        this._color = 'greenyellow';
      } else {
        this._color = 'fuchsia';
      }
        //Winner text
        const winner = document.createElementNS(SVG_NS, 'text');
        winner.textContent = `Player ${playerNumber} wins!`;
        winner.setAttributeNS(null, 'x', this._x);
        winner.setAttributeNS(null, 'y', this._y);
        winner.setAttributeNS(null, 'fill', this._color);
        winner.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        winner.setAttributeNS(null, 'font-size', this._size);
        svg.appendChild(winner);        
    }
  }