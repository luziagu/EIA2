"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class KillerCell extends coronaVirusAnimation.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(5, 10);
            this.radius = 20;
        }
        draw() {
            console.log("KillerCells");
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(this.position.x, this.position.y);
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.moveTo(0, 0);
            coronaVirusAnimation.crc2.arc(0, 0, this.radius, 0, Math.PI * 1.6);
            coronaVirusAnimation.crc2.lineTo(0, 0);
            coronaVirusAnimation.crc2.closePath();
            coronaVirusAnimation.crc2.fillStyle = "#FFDAB9";
            coronaVirusAnimation.crc2.lineWidth = 2;
            coronaVirusAnimation.crc2.strokeStyle = "#FFDAB9";
            coronaVirusAnimation.crc2.stroke();
            coronaVirusAnimation.crc2.fill();
            coronaVirusAnimation.crc2.restore();
        }
    }
    coronaVirusAnimation.KillerCell = KillerCell;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=killercell.js.map