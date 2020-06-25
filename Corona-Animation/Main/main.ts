namespace coronaVirusAnimation {

    
    console.log("load");

    export let crc2: CanvasRenderingContext2D; 
    

    let humanCells: HumanCell[] = [];
    let antibodies: Antibody[] = [];
    let particles: Particle[] = [];
    let killerCells: KillerCell[] = [];
    let coroni: Corona[] = [];
    let background: ImageData;

   

    window.addEventListener("load", handleLoad);

    export function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas"); 
        if (!canvas) {
            return; 
        }

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); 


        createBackground();
        createCells();
        
        window.setInterval(animate, 20);
       


    }

    function createBackground(): void {


        let x: number = 0;
        let y: number = 0;
        let position: Vector = new Vector(x, y);
        let pattern: Pattern = new Pattern(position);
        pattern.draw(position);

       

        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);


    }



    function createCells(): void {

        let x: number;
        let y: number;
        let nParticles: number = 100;
        let nCells: number = 15;
        let nAntibodies: number = 20;

        //Particles
        for (let i: number = 0; i < nParticles; i++) {

            x = (Math.random() * crc2.canvas.width);
            y = (Math.random() * crc2.canvas.height);

            let position: Vector = new Vector(x, y);
            let particle: Particle = new Particle(position);
            particle.draw();
            particles.push(particle);
        }

        //Antibodies
        for (let i: number = 0; i < nAntibodies; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let antibody: Antibody = new Antibody(position);
            antibody.draw();
            antibodies.push(antibody);
        }

        //HumanCells
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);
            let position: Vector = new Vector(x, y);
            let humancell: HumanCell = new HumanCell(position);
            humancell.draw();
            humanCells.push(humancell);
        }


        //KillerCells
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let killercell: KillerCell = new KillerCell(position);
            killercell.draw();
            killerCells.push(killercell);
        }



        //coronaCell
        for (let i: number = 0; i < nCells; i++) {
            x = (Math.random() * crc2.canvas.width);
            y = (100 + Math.random() * crc2.canvas.height / 1.5);

            let position: Vector = new Vector(x, y);
            let corona: Corona = new Corona(position);
            corona.draw();
            coroni.push(corona);
        }



    }

    function animate(): void {

       
        crc2.putImageData(background, 0, 0);

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

}