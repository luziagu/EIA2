namespace coronaVirus {

    
    console.log("load");
    interface Vector {
        x: number;
        y: number;
    }
    
    let crc2: CanvasRenderingContext2D; 

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas"); 
        if (!canvas)
            return; 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); 

        
        drawBackground();
        drawHumanCell({x: 350, y: 170},  {x: 450, y: 450}); 
        drawAntibodies({x: 250, y: 600}, {x: 450, y: 650}); 

    }

    function drawBackground(): void {
        console.log("Background");

        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 100;
        pattern.canvas.height = 40;
        pattern.fillStyle = "#FFF0F5";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(40, 0);
        pattern.lineTo(60, 0);
        pattern.lineTo(100, 20);
        pattern.lineTo(60, 40);
        pattern.lineTo(40, 40);
        pattern.lineTo(20, 20);


        pattern.strokeStyle = "#778899";
        pattern.stroke();
        pattern.closePath();

        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#88888844";
        pattern.fill();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawHumanCell (_position: Vector, _size: Vector ): void {

        console.log("HumanCell", _position, _size);
        let nParticles: number = 40; 
        let radiusParticle: number = 20; 
        let particle: Path2D = new Path2D(); 
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle); 

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); 
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(0.3, "#B0C4DE");
        gradient.addColorStop(0.5, "#B0C4DE");
        gradient.addColorStop(0.7, "#B0C4DE");
        gradient.addColorStop(1, "#B0C4DE");
        


        

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


    function drawAntibodies (_position: Vector, _size: Vector): void {

        let nAntibodies: number = 15;
        let antibodies: Path2D = new Path2D(); 

        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 22, _position.y - 12);
        crc2.lineWidth = 1;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 31, _position.y - 18, 12, 0.7, 1.4 * Math.PI);
        crc2.stroke();
        crc2.closePath();

        crc2.save(); 

        crc2.translate(_position.x, _position.y); 



        
        for (let drawn: number = 0; drawn < nAntibodies; drawn++) {

            crc2.save(); 
            let x: number = (Math.random() - 0.5) * _size.x; 
            let y: number = -(Math.random() * _size.y); 
            crc2.translate(x, y); 
            crc2.fill(antibodies); 
            crc2.restore(); 

        }
        crc2.restore();
        


    }



}