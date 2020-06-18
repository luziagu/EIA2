"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Corona {
        constructor(_position) {
            this.position = _position;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(20, 70);
        }
        move(_timeslice) {
            let speed = new coronaVirusAnimation.Vector(this.velocity.x, this.velocity.y);
            speed.scale(_timeslice);
            this.position.add(speed);
            if (this.position.x < -30)
                this.position.x += coronaVirusAnimation.crc2.canvas.width;
            if (this.position.y < -30)
                this.position.y += coronaVirusAnimation.crc2.canvas.height;
            if (this.position.x > coronaVirusAnimation.crc2.canvas.width + 30)
                this.position.x -= coronaVirusAnimation.crc2.canvas.width;
            if (this.position.y > coronaVirusAnimation.crc2.canvas.height + 30)
                this.position.y -= coronaVirusAnimation.crc2.canvas.height;
        }
        draw(_position) {
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(_position.x, _position.y);
            for (let drawn = 0; drawn < 10; drawn++) {
                coronaVirusAnimation.crc2.beginPath();
                coronaVirusAnimation.crc2.rotate(20);
                coronaVirusAnimation.crc2.moveTo(0, 0);
                coronaVirusAnimation.crc2.lineTo(0, 40);
                coronaVirusAnimation.crc2.strokeStyle = "#B43104";
                coronaVirusAnimation.crc2.lineWidth = 2;
                coronaVirusAnimation.crc2.stroke();
                coronaVirusAnimation.crc2.closePath();
            }
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            coronaVirusAnimation.crc2.fillStyle = "#ae2d16";
            coronaVirusAnimation.crc2.fill();
            coronaVirusAnimation.crc2.closePath();
            coronaVirusAnimation.crc2.restore();
        }
    }
    coronaVirusAnimation.Corona = Corona;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=corona.js.map