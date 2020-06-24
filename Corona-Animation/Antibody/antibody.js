"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Antibody {
        constructor(_position) {
            this.position = _position;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(2, 5);
            this.rotation = Math.random() * 360;
        }
        draw(_position) {
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(_position.x, _position.y);
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
        move(_timeslice) {
            // Offset = Geschwindigkeit
            let offset = new coronaVirusAnimation.Vector(this.velocity.x, this.velocity.y);
            // Mit der Zeit multiplizieren
            offset.x *= 0;
            offset.y *= _timeslice;
            // Zu der Posiition addieren 
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += coronaVirusAnimation.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += coronaVirusAnimation.crc2.canvas.height;
            if (this.position.x > coronaVirusAnimation.crc2.canvas.width)
                this.position.x -= coronaVirusAnimation.crc2.canvas.width;
            if (this.position.y > coronaVirusAnimation.crc2.canvas.height)
                this.position.y -= coronaVirusAnimation.crc2.canvas.height;
        }
    }
    coronaVirusAnimation.Antibody = Antibody;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=antibody.js.map