"use strict";
var coronaVirusAnimation;
(function (coronaVirusAnimation) {
    console.log("load");
    coronaVirusAnimation.infected = true;
    let cells = [];
    /*let humanCells: HumanCell[] = [];
    let antibodies: Antibody[] = [];
    let particles: Particle[] = [];
    let killerCells: KillerCell[] = [];
    let coroni: Corona[] = [];*/
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
        let nParticles = 50;
        let nCells = 10;
        let nAntibodies = 15;
        //Particles
        for (let i = 0; i < nParticles; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (Math.random() * coronaVirusAnimation.crc2.canvas.height);
            let position = new coronaVirusAnimation.Vector(x, y);
            let particle = new coronaVirusAnimation.Particle(position);
            particle.draw();
            cells.push(particle);
        }
        //Antibodies
        for (let i = 0; i < nAntibodies; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let antibody = new coronaVirusAnimation.Antibody(position);
            antibody.draw();
            cells.push(antibody);
        }
        //HumanCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let humancell = new coronaVirusAnimation.HumanCell(position);
            humancell.draw();
            cells.push(humancell);
        }
        //KillerCells
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let killercell = new coronaVirusAnimation.KillerCell(position);
            killercell.draw();
            cells.push(killercell);
        }
        //coronaCell
        for (let i = 0; i < nCells; i++) {
            x = (Math.random() * coronaVirusAnimation.crc2.canvas.width);
            y = (100 + Math.random() * coronaVirusAnimation.crc2.canvas.height / 1.5);
            let position = new coronaVirusAnimation.Vector(x, y);
            let corona = new coronaVirusAnimation.Corona(position);
            corona.draw();
            cells.push(corona);
        }
    }
    function animate() {
        coronaVirusAnimation.crc2.putImageData(background, 0, 0);
        for (let Moveable of cells) {
            if (Moveable instanceof coronaVirusAnimation.Antibody || Moveable instanceof coronaVirusAnimation.Corona)
                Moveable.move(1 / 20);
            else if (Moveable instanceof coronaVirusAnimation.HumanCell)
                Moveable.move(1 / 20);
            else if (Moveable instanceof coronaVirusAnimation.Particle)
                Moveable.move(1 / 80);
            Moveable.draw();
        }
        //isInfected(); 
        /*for (let particle of particles) {
            particle.move(1 / 80);
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
        }*/
    }
    /* function isInfected(): void {
         for (let Moveable of cells ) {
             if (Moveable instanceof Corona && Moveable.isInfected()) {
 
                 reactionStarting(Moveable);
                 infectedHumanCell(Moveable.position.x);
             }
 
         }
 
     }
 
     function reactionStarting (_corona: Corona): void {
         _corona.isInfected = true;
         window.setTimeout(function(): void {
             reactionEnding(_corona);
         }, 3000);
     }
 
 
     function reactionEnding(_corona: Corona) {
         _corona.isInfected = false;
     }
 
 
     function infectedHumanCell(_position: number) {
 
         //Frage
     }*/
})(coronaVirusAnimation || (coronaVirusAnimation = {}));
//# sourceMappingURL=main.js.map