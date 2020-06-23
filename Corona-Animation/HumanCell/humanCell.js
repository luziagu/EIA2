"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class HumanCell {
        constructor(_position) {
            this.position = _position;
            this.radius = 30;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.velocity.random(5, 10);
        }
        draw(_position) {
            // console.log("drawHumanCell");
            let gradient = coronaVirusAnimation.crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            coronaVirusAnimation.crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            gradient.addColorStop(0, "midnightblue");
            gradient.addColorStop(0.3, "#E6E6FA");
            gradient.addColorStop(0.5, "#E6E6FA");
            gradient.addColorStop(0.7, "#E6E6FA");
            gradient.addColorStop(1, "#E6E6FA");
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.translate(_position.x, _position.y);
            coronaVirusAnimation.crc2.fillStyle = gradient;
            coronaVirusAnimation.crc2.restore();
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
    coronaVirusAnimation.HumanCell = HumanCell;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=humanCell.js.map