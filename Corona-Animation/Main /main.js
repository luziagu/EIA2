"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    console.log("load");
    let coronas = [];
    let particles = [];
    let antibodys = [];
    let killercells = [];
    //let humanCells: Humancell [] = [];
    let backgroundImage;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        coronaVirusAnimation.crc2 = canvas.getContext("2d");
        drawBackground();
        createCorona(7);
        createAntibody(15);
        createKillerCell(5);
        createParticel(50);
        window.setInterval(animation, 20);
    }
    coronaVirusAnimation.handleLoad = handleLoad;
    function drawBackground() {
        console.log("Background");
        //Pattern - Hintergrund 
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
    }
    function createCorona(_nCorona) {
        console.log("Create Corona");
        for (let i = 0; i < _nCorona; i++) {
            let corona = new coronaVirusAnimation.Corona(1.0);
            coronas.push(corona);
        }
    }
    function createAntibody(_nAntibody) {
        console.log("Create Antibody");
        for (let i = 0; i < _nAntibody; i++) {
            let antibody = new coronaVirusAnimation.Antibody(1.0);
            antibodys.push(antibody);
        }
    }
    function createKillerCell(_nKiller) {
        console.log("Create Antibody");
        for (let i = 0; i < _nKiller; i++) {
            let Killercell = new Killer(1.0);
            killercells.push(Killercell);
        }
    }
    function createParticel(_nParticel) {
        console.log("Create Particel");
        for (let i = 0; i < _nParticel; i++) {
            let particel = new coronaVirusAnimation.Particle(1.0);
            particles.push(particel);
        }
    }
    function createHumanCell(_position, _size) {
        //Zeichenen der Cellen sowie das dunlizieren dieser 
        console.log("HumanCell", _position, _size);
        let nParticles = 40;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = coronaVirusAnimation.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "midnightblue");
        gradient.addColorStop(0.3, "#E6E6FA");
        gradient.addColorStop(0.5, "#E6E6FA");
        gradient.addColorStop(0.7, "#E6E6FA");
        gradient.addColorStop(1, "#E6E6FA");
        coronaVirusAnimation.crc2.save();
        coronaVirusAnimation.crc2.translate(_position.x, _position.y);
        coronaVirusAnimation.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            coronaVirusAnimation.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            coronaVirusAnimation.crc2.translate(x, y);
            coronaVirusAnimation.crc2.fill(particle);
            coronaVirusAnimation.crc2.restore();
        }
        coronaVirusAnimation.crc2.restore();
    }
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=main.js.map