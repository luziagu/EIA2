"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        scale(_scale) {
            this.x *= _scale;
            this.y *= _scale;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    coronaVirusAnimation.Vector = Vector;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=Vektor.js.map