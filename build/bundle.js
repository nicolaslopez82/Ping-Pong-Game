!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={p1up:"a",p1down:"z",p2up:"ArrowUp",p2down:"ArrowDown",spaceBar:" ",shotleft:"f",shotright:"p",reset:"r"},e.PROPERTIES={gap:10,speed:15,ballspeed:0,ballDirections:0}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0),s=c(i(11)),o=c(i(12)),a=c(i(13)),l=c(i(14)),h=c(i(15)),u=c(i(16));function c(t){return t&&t.__esModule?t:{default:t}}var d=function(){function t(e,i,n){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=e,this._width=i,this._height=n,this._gameElement=document.getElementById(this._element),this._paddleWidth=8,this._paddleHeigth=56,this._boardGap=r.PROPERTIES.gap,this._ballRadius=8,this._board=new s.default(this._width,this._height),this._pause=!1,this._scoreFontSize=60,this._reset=!1,this._keyPressed={},document.addEventListener("keydown",function(t){c._keyPressed[t.key]=!0},!1),document.addEventListener("keyup",function(t){c._keyPressed[t.key]=!1},!1),document.addEventListener("keydown",function(t){t.key===r.KEYS.pause&&(c._pause=!c._pause)}),document.addEventListener("keydown",function(t){t.key===r.KEYS.reset&&(c._reset=!c._reset)}),this._player1=new o.default(this._height,this._paddleWidth,this._paddleHeigth,this._boardGap,(this._height-this._paddleHeigth)/2,r.KEYS.p1up,r.KEYS.p1down),this._player2=new o.default(this._height,this._paddleWidth,this._paddleHeigth,this._width-this._boardGap-this._paddleWidth,(this._height-this._paddleHeigth)/2,r.KEYS.p2up,r.KEYS.p2down),this._bullet_p1=new h.default(15,5),this._bullet_p2=new h.default(15,5),this._ball1=new a.default(this._ballRadius,this._width,this._height,1),this._ball2=new a.default(this._ballRadius,this._width,this._height,-1),this._score1=new l.default(this._width/2-50,30,this._scoreFontSize),this._score2=new l.default(this._width/2+25,30,this._scoreFontSize),this._text=new u.default(this._width/2-120,this._height/2-20,this._scoreFontSize/2)}return n(t,[{key:"reset",value:function(){this._bullet_p1=new h.default(15,5),this._bullet_p2=new h.default(15,5),this._ballRadius=8,this._ball1=new a.default(this._ballRadius,this._width,this._height,1),this._ball2=new a.default(this._ballRadius,this._width,this._height,-1),this._score1=new l.default(this._width/2-50,30,this._scoreFontSize),this._score2=new l.default(this._width/2+25,30,this._scoreFontSize),this._text=new u.default(this._width/2-120,this._height/2-20,this._scoreFontSize/2),this._player1.resetScore(),this._player1._x=this._boardGap,this._player1._y=(this._height-this._paddleHeigth)/2,this._player2.resetScore(),this._player2._x=this._width-this._boardGap-this._paddleWidth,this._player2._y=(this._height-this._paddleHeigth)/2}},{key:"render",value:function(){if(this._reset&&(this._reset=!this._reset,this._pause=!1,this.reset()),this._keyPressed[r.KEYS.spaceBar]&&(this._pause=!this._pause),!(this._pause||this._player1.getScore()>=3||this._player2.getScore()>=3)){this._gameElement.innerHTML="";var t=document.createElementNS(r.SVG_NS,"svg");t.setAttributeNS(null,"width",this._width),t.setAttributeNS(null,"height",this._height),t.setAttributeNS(null,"viewBox","0 0 "+this._width+" "+this._height),this._gameElement.appendChild(t),this._board.render(t),this._player1.render(t,this._keyPressed,!0),this._player2.render(t,this._keyPressed,!1),this._ball1.render(t,this._player1,this._player2),this._ball2.render(t,this._player1,this._player2),this._score1.render(t,this._player1.getScore()),this._score2.render(t,this._player2.getScore()),3==this._player1.getScore()&&(this._text.winner(t,1),this._pause=!0),3==this._player2.getScore()&&(this._text.winner(t,2),this._pause=!0)}}}]),t}();e.default=d},function(t,e,i){"use strict";i(4);var n,r=i(2);var s=new((n=r)&&n.__esModule?n:{default:n}).default("game",512,256);!function t(){s.render(),requestAnimationFrame(t)}()},function(t,e,i){var n=i(5);"string"==typeof n&&(n=[[t.i,n,""]]);i(10)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(6)()).push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(7)+') format("woff"),url('+i(8)+') format("truetype"),url('+i(9)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e){var i={},n=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},r=n(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),s=n(function(){return document.head||document.getElementsByTagName("head")[0]}),o=null,a=0,l=[];function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],s=i[r.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](r.parts[o]);for(;o<r.parts.length;o++)s.parts.push(_(r.parts[o],e))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(_(r.parts[o],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function u(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],o={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(o):e.push(i[s]={id:s,parts:[o]})}return e}function c(t,e){var i=s(),n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),l.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function d(t){t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function f(t){var e=document.createElement("style");return e.type="text/css",c(t,e),e}function _(t,e){var i,n,r;if(e.singleton){var s=a++;i=o||(o=f(e)),n=b.bind(null,i,s,!1),r=b.bind(null,i,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return e.rel="stylesheet",c(t,e),e}(e),n=function(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}.bind(null,i),r=function(){d(i),i.href&&URL.revokeObjectURL(i.href)}):(i=f(e),n=function(t,e){var i=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),r=function(){d(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(e=e||{}).singleton&&(e.singleton=r()),void 0===e.insertAt&&(e.insertAt="bottom");var n=u(t);return h(n,e),function(t){for(var r=[],s=0;s<n.length;s++){var o=n[s];(a=i[o.id]).refs--,r.push(a)}t&&h(u(t),e);for(s=0;s<r.length;s++){var a;if(0===(a=r[s]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var p,y=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function b(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0);var s=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._width=e,this._height=i}return n(t,[{key:"render",value:function(t){var e=document.createElementNS(r.SVG_NS,"rect");e.setAttributeNS(null,"fill","#353535"),e.setAttributeNS(null,"width",this._width),e.setAttributeNS(null,"height",this._height);var i=document.createElementNS(r.SVG_NS,"line");i.setAttributeNS(null,"x1",this._width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this._width/2),i.setAttributeNS(null,"y2",this._height),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"stroke-dasharray",4),t.appendChild(e),t.appendChild(i)}}]),t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0);var s=function(){function t(e,i,n,s,o,a,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._boardHeight=e,this._width=i,this._height=n,this._x=s,this._y=o,this._up=a,this._down=l,this._speed=r.PROPERTIES.speed,this._score=0}return n(t,[{key:"up",value:function(){this._y=Math.max(this._y-this._speed,0)}},{key:"down",value:function(){this._y=Math.min(this._y+this._speed,this._boardHeight-this._height)}},{key:"getHeight",value:function(){return this._height}},{key:"increaseScore",value:function(){this._score++}},{key:"getScore",value:function(){return this._score}},{key:"resetScore",value:function(){this._score=0}},{key:"coordinates",value:function(){return[this._x,this._x+this._width,this._y,this._y+this._height]}},{key:"render",value:function(t,e,i){var n=document.createElementNS(r.SVG_NS,"rect"),s=i?"greenyellow":"deeppink";n.setAttributeNS(null,"fill",s),n.setAttributeNS(null,"width",this._width),n.setAttributeNS(null,"height",this._height),n.setAttributeNS(null,"x",this._x),n.setAttributeNS(null,"y",this._y),t.appendChild(n),e[this._up]&&this.up(),e[this._down]&&this.down()}}]),t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw s}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=i(2);(n=a)&&n.__esModule;var l=function(){function t(e,i,n,r){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._ping=new Audio("public/sounds/pong-01.wav"),this._sound=!0,this._radius=e,this._boardWidth=i,this._boardHeigth=n,this._direction=r,this._color="white",this._colorPallet=["white","chartreuse","deeppink","fuchsia","greenyellow"],this._speed=o.PROPERTIES.ballDirections,this.reset(),document.addEventListener("keydown",function(t){""===t.key&&s.reset()})}return s(t,[{key:"reset",value:function(){for(this._x=this._boardWidth/2,this._y=this._boardHeigth/2,this._vy=0;0===this._vy;)this._vy=Math.floor(10*Math.random()-5)+this._speed;this._vx=this._direction*(6-Math.abs(this._vy)+this._speed)}},{key:"wallCollision",value:function(){var t=this._y-this._radius<=0,e=this._y+this._radius>=this._boardHeigth;(t||e)&&(this._vy*=-1)}},{key:"paddleCollision",value:function(t,e){if(this._vx>0){var i=e.coordinates(),n=r(i,4),s=n[0],o=(n[1],n[2]),a=n[3];this._x+this._radius>=s&&this._y<=a&&this._y>=o&&(this._vx*=-1,this._ping.play(),this._color=this._colorPallet[Math.floor(5*Math.random())],this._radius=Math.floor(5*Math.random())+5)}else{var l=t.coordinates(),h=r(l,4),u=(h[0],h[1]),c=h[2],d=h[3];this._x-this._radius<=u&&this._y<=d&&this._y>=c&&(this._vx*=-1,this._ping.play(),this._color=this._colorPallet[Math.floor(5*Math.random())],this._radius=Math.floor(5*Math.random())+5)}}},{key:"checkScore",value:function(t,e){var i=this._x-this._radius<=0,n=this._x+this._radius>=this._boardWidth;i?(e.increaseScore(),this.reset(),this._direction*=-1):n&&(t.increaseScore(),this.reset(),this._direction*=-1)}},{key:"render",value:function(t,e,i){var n=document.createElementNS(o.SVG_NS,"circle");n.setAttributeNS(null,"r",this._radius),n.setAttributeNS(null,"cx",this._x),n.setAttributeNS(null,"cy",this._y),n.setAttributeNS(null,"fill",this._color),t.appendChild(n),this.wallCollision(),this.paddleCollision(e,i),this.checkScore(e,i),this._x=this._x+this._vx,this._y=this._y+this._vy}}]),t}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0);var s=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._x=e,this._y=i,this._size=n}return n(t,[{key:"render",value:function(t,e){var i=document.createElementNS(r.SVG_NS,"text");i.setAttributeNS(null,"x",this._x),i.setAttributeNS(null,"y",this._y),i.setAttributeNS(null,"fill","white"),i.setAttributeNS(null,"font-size",12),i.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),i.textContent=e,t.appendChild(i)}}]),t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0);var s=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._width=e,this._height=i,this._x,this._y,this._direction=1}return n(t,[{key:"reset",value:function(){for(this._vy=0;0===this._vy;)this._vy=Math.floor(10*Math.random()-15);this._vx=this._direction*(6-Math.abs(this._vy))}},{key:"render",value:function(t,e,i){this._x=e,this._y=i;var n=document.createElementNS(r.SVG_NS,"rect");n.setAttributeNS(null,"width",this._width),n.setAttributeNS(null,"height",this._height),n.setAttributeNS(null,"x",this._x),n.setAttributeNS(null,"y",this._y),n.setAttributeNS(null,"fill","fuchsia"),t.appendChild(n)}}]),t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=i(0);var s=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._x=e,this._y=i,this._size=n}return n(t,[{key:"winner",value:function(t,e){this._color=1===e?"greenyellow":"fuchsia";var i=document.createElementNS(r.SVG_NS,"text");i.textContent="Player "+e+" wins!",i.setAttributeNS(null,"x",this._x),i.setAttributeNS(null,"y",this._y),i.setAttributeNS(null,"fill",this._color),i.setAttributeNS(null,"font-family","Silkscreen Web"),i.setAttributeNS(null,"font-size",this._size),t.appendChild(i)}}]),t}();e.default=s}]);