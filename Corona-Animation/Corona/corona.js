"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Corona {
        constructor(_position) {
            this.position = _position;
            this.radius = 10;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        draw(_position) {
            // console.log("draw Corona");
            // crc2.restore();
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(_position.x, _position.y);
            //Zeichen der Stängel 
            for (let i = 0; i < 10; i++) {
                coronaVirusAnimation.crc2.beginPath();
                coronaVirusAnimation.crc2.rotate(20);
                coronaVirusAnimation.crc2.moveTo(0, 0);
                coronaVirusAnimation.crc2.lineTo(0, 40);
                coronaVirusAnimation.crc2.strokeStyle = "#B43104";
                coronaVirusAnimation.crc2.lineWidth = 2;
                coronaVirusAnimation.crc2.stroke();
                coronaVirusAnimation.crc2.closePath();
            }
            coronaVirusAnimation.crc2.restore();
            //Zeichnen des Kreises 
            coronaVirusAnimation.crc2.beginPath();
            coronaVirusAnimation.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            coronaVirusAnimation.crc2.fillStyle = "#ae2d16";
            coronaVirusAnimation.crc2.fill();
            coronaVirusAnimation.crc2.closePath();
        }
        move(_timeslice) {
            let offset = new coronaVirusAnimation.Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += (coronaVirusAnimation.crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += coronaVirusAnimation.crc2.canvas.height;
            if (this.position.x > (coronaVirusAnimation.crc2.canvas.width))
                this.position.x -= (coronaVirusAnimation.crc2.canvas.width);
            if (this.position.y > coronaVirusAnimation.crc2.canvas.height)
                this.position.y -= coronaVirusAnimation.crc2.canvas.height;
        }
    }
    coronaVirusAnimation.Corona = Corona;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=corona.js.map