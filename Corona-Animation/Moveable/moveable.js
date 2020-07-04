"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable");
            if (_position)
                this.position = _position.copy();
            else
                this.velocity = new coronaVirusAnimation.Vector(0, 0);
            this.radius = 5;
            this.velocity = new coronaVirusAnimation.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
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
    coronaVirusAnimation.Moveable = Moveable;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=moveable.js.map