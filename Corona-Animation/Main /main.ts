namespace coronaVirusAnimation {

    
    console.log("load");


    let coronas: Corona [] = [];
    let particles: Particle [] = [];
    let antibodys: Antibody[] = []; 
    //let humanCells: Humancell [] = [];
    
    let backgroundImage: ImageData; 
    
    export let crc2: CanvasRenderingContext2D; 

   

    window.addEventListener("load", handleLoad);

    export function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas"); 
        if (!canvas)
            return; 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); 

        
        drawBackground();
        createCorona(7);

        

        window.setInterval(animation, 20); 

    }

    function drawBackground(): void {
        console.log("Background");

        //Pattern - Hintergrund 
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
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

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function createCorona(_nCorona: number): void {

        console.log("Create Corona"); 
        for (let i: number = 0; i < _nCorona; i++){
            let corona: Corona = new Corona(1.0); 
            coronas.push(corona); 
        }

    }

    
    

    function createHumanCell (_position: Vector, _size: Vector ): void {

        //Zeichenen der Cellen sowie das dunlizieren dieser 
        console.log("HumanCell", _position, _size);
        let nParticles: number = 40; 
        let radiusParticle: number = 20; 
        let particle: Path2D = new Path2D(); 
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle); 

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); 
        gradient.addColorStop(0, "midnightblue");
        gradient.addColorStop(0.3, "#E6E6FA");
        gradient.addColorStop(0.5, "#E6E6FA");
        gradient.addColorStop(0.7, "#E6E6FA");
        gradient.addColorStop(1, "#E6E6FA");
        


        crc2.save(); 

        crc2.translate(_position.x, _position.y); 

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save(); 
            let x: number = (Math.random() - 0.5) * _size.x; 
            let y: number = -(Math.random() * _size.y); 
            crc2.translate(x, y); 
            crc2.fill(particle); 
            crc2.restore(); 
        }
        crc2.restore();

    }
    


   

    

    






}