namespace coronaVirus {

    
    console.log("load");
    interface Vector {
        x: number;
        y: number;
    }
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D; 

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas"); 
        if (!canvas)
            return; 
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d"); 

        
        drawBackground();
        drawHumanCell({x: 350, y: 170},  {x: 250, y: 250});  

    }

    function drawBackground(): void {
        console.log("Background");

        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
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

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawHumanCell (_position: Vector, _size: Vector ): void {

        console.log("Cloud", _position, _size);
        let nParticles: number = 30; 
        let radiusParticle: number = 60; 
        let particle: Path2D = new Path2D(); 
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle); 

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); 
        gradient.addColorStop(0, "HSLA(70%, 130%, 180%, 0.5)"); 
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

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