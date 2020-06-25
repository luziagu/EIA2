"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class HumanCell extends coronaVirusAnimation.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.radius = 15;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        draw() {
            // console.log("drawHumanCell");
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(this.position.x, this.position.y);
            let gradient = coronaVirusAnimation.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            coronaVirusAnimation.crc2.closePath();
            gradient.addColorStop(0, "midnightblue");
            gradient.addColorStop(0.1, "#E6E6FA");
            gradient.addColorStop(1, "#E6E6FA");
            coronaVirusAnimation.crc2.fillStyle = "#E6E6FA";
            coronaVirusAnimation.crc2.lineWidth = 1;
            coronaVirusAnimation.crc2.strokeStyle = "#E6E6FA";
            coronaVirusAnimation.crc2.stroke();
            coronaVirusAnimation.crc2.fill();
            coronaVirusAnimation.crc2.restore();
        }
    }
    coronaVirusAnimation.HumanCell = HumanCell;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=humanCell.js.map