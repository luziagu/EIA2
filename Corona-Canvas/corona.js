"use strict";
var coronaVirus;
(function (coronaVirus) {
    console.log("load");
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawHumanCell({ x: 350, y: 170 }, { x: 450, y: 450 });
        showAntibodies({ x: 250, y: 370 });
        buildKillercells({ x: 250, y: 370 });
        drawParticles({ x: 20, y: 700 }, { x: 600, y: 600 });
    }
    function drawBackground() {
        console.log("Background");
        //Pattern
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawHumanCell(_position, _size) {
        console.log("HumanCell", _position, _size);
        let nParticles = 40;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "midnightblue");
        gradient.addColorStop(0.3, "#E6E6FA");
        gradient.addColorStop(0.5, "#E6E6FA");
        gradient.addColorStop(0.7, "#E6E6FA");
        gradient.addColorStop(1, "#E6E6FA");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawAntibodies(_position, _size) {
        //let nAntibodies: number = 15;
        //let antibodies: Path2D = new Path2D(); 
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 22, _position.y - 12);
        crc2.lineWidth = 2.5;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_position.x + 31, _position.y - 18, 12, 0.7, 1.4 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        /*for (let drawn: number = 0; drawn < nAntibodies; drawn++) {

            
            
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            buildAntibody.translate(x, y);
            buildAntibody.fill(antibodies);
           

        }
        */
        crc2.restore();
    }
    function showAntibodies(_position) {
        for (let drawn = 0; drawn < 7; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.4; //Variieren der Werte
            _position.y = 450 + (20 * Math.random());
            drawAntibodies(_position, { x: 450, y: 650 });
        }
    }
    function drawKillercell(_position, _size) {
        //let nKillerCell: number = 15;
        let radiusKillerCell = 25;
        //let KillerCell: Path2D = new Path2D(); 
        //let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusKillerCell); 
        /*crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.arc(_position.x, _position.y, radiusKillerCell, 0.2 * Math.PI, 1.8 * Math.PI, false);
        crc2.lineTo(_position.x, _position.y);
        crc2.stroke();
        //crc2.fillStyle = gradient;
        crc2.fillStyle = "darkred";
        //gradient.addColorStop(0, "darkblue");
        //gradient.addColorStop(1, "#B0C4DE");
        crc2.fill();
        crc2.closePath();
        crc2.save(); */
        crc2.beginPath();
        crc2.arc(100, 100, radiusKillerCell, 0.2 * Math.PI, 1.8 * Math.PI, false);
        crc2.lineTo(100, 100);
        crc2.closePath();
        crc2.fillStyle = "#FFDAB9";
        crc2.strokeStyle = "#FFDAB9";
        crc2.fill();
        crc2.stroke();
        crc2.save();
        /*for (let drawn: number = 0; drawn < nKillerCell; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(KillerCell);
            crc2.restore();
        }
        crc2.restore();*/
    }
    function buildKillercells(_position) {
        for (let drawn = 0; drawn < 5; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.8;
            _position.y = 400 + (20 * Math.random());
            drawKillercell(_position, { x: 450, y: 350 });
        }
    }
    function drawCoronaCell(_position) {
    }
    function drawParticles(_position, _size) {
        let nParticles = 90;
        let radiusParticle = 4;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(1, "#ffcc01");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(coronaVirus || (coronaVirus = {}));
//# sourceMappingURL=corona.js.map