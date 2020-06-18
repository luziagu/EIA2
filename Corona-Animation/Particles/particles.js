"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Particles {
        constructor(_position) {
            this.position = _position;
            this.rotate = Math.random() * 360;
        }
        move(_timeslice) {
            let speed = new coronaVirusAnimation.Vector(this.velocity.x, this.velocity.y);
            //Die Geschwindigkeit wird mit der Zeit multipliziert 
            speed.x *= 0;
            speed.y *= _timeslice * 2;
            //Ausgerechnete Geschindigkeit und Zeit soll mit der Position addiert werden:
            this.position.add(speed);
            //Position soll immer auf dem Canvas liegen, deswegen überprüfung: 
            if (this.position.x < 0)
                this.position.x += coronaVirusAnimation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += coronaVirusAnimation.crc2.canvas.height;
            if (this.position.x > coronaVirusAnimation.crc2.canvas.width)
                this.position.x -= coronaVirusAnimation.crc2.canvas.width;
            if (this.position.y > coronaVirusAnimation.crc2.canvas.height)
                this.position.y -= coronaVirusAnimation.crc2.canvas.height;
        }
        draw(_position, _size) {
            coronaVirusAnimation.crc2.save();
            let circle = 2 * Math.PI;
            let nParticles = 90;
            let radiusParticle = 4;
            let particle = new Path2D();
            let gradient = coronaVirusAnimation.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(_position.x, _position.y, radiusParticle, 0, this.rotate, circle);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(1, "#ffcc01");
            coronaVirusAnimation.crc2.fillStyle = gradient;
            coronaVirusAnimation.crc2.translate(_position.x, _position.y);
            coronaVirusAnimation.crc2.restore();
            for (let drawn = 0; drawn < nParticles; drawn++) {
                coronaVirusAnimation.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                coronaVirusAnimation.crc2.translate(x, y);
                coronaVirusAnimation.crc2.fill(particle);
                coronaVirusAnimation.crc2.restore();
            }
        }
    }
    coronaVirusAnimation.Particles = Particles;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=particles.js.map