"use strict";
var coronaVirus;
(function (coronaVirus) {
    console.log("load");
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
    }
    function drawBackground() {
        console.log("Background");
    }
})(coronaVirus || (coronaVirus = {}));
//# sourceMappingURL=corona.js.map