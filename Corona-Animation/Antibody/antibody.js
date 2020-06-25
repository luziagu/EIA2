"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Antibody extends coronaVirusAnimation.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(2, 5);
            this.rotation = Math.random() * 360;
        }
        draw() {
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(this.position.x, this.position.y);
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.rotate(this.rotation);
            coronaVirusAnimation.crc2.moveTo(0, 0);
            coronaVirusAnimation.crc2.lineTo(0, 25);
            coronaVirusAnimation.crc2.strokeStyle = "black";
            coronaVirusAnimation.crc2.lineWidth = 2;
            coronaVirusAnimation.crc2.moveTo(0, 25);
            coronaVirusAnimation.crc2.lineTo(15, 40);
            coronaVirusAnimation.crc2.moveTo(0, 25);
            coronaVirusAnimation.crc2.lineTo(-15, 40);
            coronaVirusAnimation.crc2.stroke();
            coronaVirusAnimation.crc2.closePath();
            coronaVirusAnimation.crc2.restore();
            coronaVirusAnimation.crc2.restore();
        }
    }
    coronaVirusAnimation.Antibody = Antibody;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=antibody.js.map