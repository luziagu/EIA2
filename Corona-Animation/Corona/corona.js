"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Corona extends coronaVirusAnimation.Moveable {
        constructor(_position) {
            super(_position);
            this.infected = false;
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.radius = 5;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity = coronaVirusAnimation.Vector.getRandom(5, 10);
        }
        draw() {
            // console.log("draw Corona");
            // crc2.restore();
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(this.position.x, this.position.y);
            //Zeichen der Stängel 
            for (let i = 0; i < 11; i++) {
                coronaVirusAnimation.crc2.beginPath();
                coronaVirusAnimation.crc2.rotate(20);
                coronaVirusAnimation.crc2.moveTo(0, 0);
                coronaVirusAnimation.crc2.lineTo(0, 40);
                coronaVirusAnimation.crc2.strokeStyle = "#B43104";
                coronaVirusAnimation.crc2.lineWidth = 2;
                coronaVirusAnimation.crc2.stroke();
                coronaVirusAnimation.crc2.closePath();
            }
            //Zeichnen des Kreises 
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            coronaVirusAnimation.crc2.fillStyle = "#ae2d16";
            coronaVirusAnimation.crc2.fill();
            coronaVirusAnimation.crc2.closePath();
            coronaVirusAnimation.crc2.restore();
        }
        move(_timeslice) {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    super.move(_timeslice * 2);
                }
                else {
                    super.move(_timeslice);
                }
            }
        }
        isInfected() {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    coronaVirusAnimation.Corona = Corona;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=corona.js.map