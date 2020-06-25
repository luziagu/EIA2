"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Particle extends coronaVirusAnimation.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(100, 200);
            this.radius = (Math.random() * 7) + 1;
        }
        draw() {
            console.log("draw Particle");
            let gradient = coronaVirusAnimation.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
            coronaVirusAnimation.crc2.closePath();
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(1, "#ffcc01");
            coronaVirusAnimation.crc2.fillStyle = gradient;
            coronaVirusAnimation.crc2.fill();
            coronaVirusAnimation.crc2.restore();
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.x *= 0;
            offset.y *= _timeslice * 1.2;
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += coronaVirusAnimation.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += coronaVirusAnimation.crc2.canvas.height;
            }
            if (this.position.x > coronaVirusAnimation.crc2.canvas.width) {
                this.position.x -= coronaVirusAnimation.crc2.canvas.width;
            }
            if (this.position.y > coronaVirusAnimation.crc2.canvas.height) {
                this.position.y -= coronaVirusAnimation.crc2.canvas.height;
            }
        }
    }
    coronaVirusAnimation.Particle = Particle;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=particles.js.map