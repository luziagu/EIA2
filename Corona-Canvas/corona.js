"use strict";
var coronaVirus;
(function (coronaVirus) {
    console.log("load");
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        drawBackground();
    }
    function drawBackground() {
        console.log("Background");
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 420;
        pattern.fillStyle = "pink";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(40, 0);
        pattern.lineTo(50, 0);
        pattern.lineTo(100, 20);
        pattern.lineTo(50, 40);
        pattern.lineTo(40, 40);
        pattern.lineTo(20, 20);
        pattern.stroke();
        pattern.closePath();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
})(coronaVirus || (coronaVirus = {}));
//# sourceMappingURL=corona.js.map