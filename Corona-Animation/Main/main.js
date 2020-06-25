"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    console.log("load");
    let humanCells = [];
    let antibodies = [];
    let particles = [];
    let killerCells = [];
    let coroni = [];
    let background;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        coronaVirusAnimation.crc2 = canvas.getContext("2d");
        createBackground();
        createCells();
        window.setInterval(animate, 20);
    }
    coronaVirusAnimation.handleLoad = handleLoad;
    function createBackground() {
        let x = 0;
        let y = 0;
        let position = new coronaVirusAnimation.Vector(x, y);
        let pattern = new coronaVirusAnimation.Pattern(position);
        pattern.draw(position);
        background = coronaVirusAnimation.crc2.getImageData(0, 0, coronaVirusAnimation.crc2.canvas.width, coronaVirusAnimation.crc2.canvas.height);
    }
    function createCells() {
        let x;
        let y;
        let nParticles = 100;
        let nCells = 15;
        let nAntibodies = 20;
        //Particles
        for (let i = 0; i < nParticles; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (Math.random() * coronaVirusAnimation.crc2.canvas.height);
            let position = new coronaVirusAnimation.Vector(x, y);
            let particle = new coronaVirusAnimation.Particle(position);
            particle.draw();
            particles.push(particle);
        }
        //Antibodies
        for (let i = 0; i < nAntibodies; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let antibody = new coronaVirusAnimation.Antibody(position);
            antibody.draw();
            antibodies.push(antibody);
        }
        //HumanCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let humancell = new coronaVirusAnimation.HumanCell(position);
            humancell.draw();
            humanCells.push(humancell);
        }
        //KillerCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let killercell = new coronaVirusAnimation.KillerCell(position);
            killercell.draw();
            killerCells.push(killercell);
        }
        //coronaCell
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let corona = new coronaVirusAnimation.Corona(position);
            corona.draw();
            coroni.push(corona);
        }
    }
    function animate() {
        coronaVirusAnimation.crc2.putImageData(background, 0, 0);
        for (let particle of particles) {
            particle.move(1 / 70);
            particle.draw();
        }
        for (let antibody of antibodies) {
            antibody.move(1 / 50);
            antibody.draw();
        }
        for (let humancell of humanCells) {
            humancell.move(1 / 20);
            humancell.draw();
        }
        for (let corona of coroni) {
            corona.move(1 / 10);
            corona.draw();
        }
        for (let killercell of killerCells) {
            killercell.move(1 / 80);
            killercell.draw();
        }
    }
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=main.js.map