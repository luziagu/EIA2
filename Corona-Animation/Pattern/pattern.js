"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    class Pattern {
        constructor(_position) {
            this.position = _position;
        }
        draw(_position) {
            //    console.log("drawpattern");
            coronaVirusAnimation.crc2.save();
            let pattern = document.createElement("canvas").getContext("2d");
            pattern.canvas.width = 100;
            pattern.canvas.height = 40;
            pattern.fillStyle = "#FFA07A";
            pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
            pattern.moveTo(0, 20);
            pattern.lineTo(20, 20);
            pattern.lineTo(40, 0);
            pattern.lineTo(60, 0);
            pattern.lineTo(100, 20);
            pattern.lineTo(60, 40);
            pattern.lineTo(40, 40);
            pattern.lineTo(20, 20);
            pattern.strokeStyle = "#E9967A";
            pattern.stroke();
            pattern.closePath();
            //Punkt in Zelle
            pattern.beginPath();
            pattern.arc(50, 20, 2, 0, 2 * Math.PI);
            pattern.fillStyle = "#88888844";
            pattern.fill();
            coronaVirusAnimation.crc2.fillStyle = coronaVirusAnimation.crc2.createPattern(pattern.canvas, "repeat");
            coronaVirusAnimation.crc2.fillRect(0, 0, coronaVirusAnimation.crc2.canvas.width, coronaVirusAnimation.crc2.canvas.height);
            // fill primary canvas with pattern
            coronaVirusAnimation.crc2.save();
            coronaVirusAnimation.crc2.restore();
        }
    }
    coronaVirusAnimation.Pattern = Pattern;
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=pattern.js.map