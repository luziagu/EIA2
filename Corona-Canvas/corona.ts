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
        showAntibodies ({x: 250, y: 370});
        buildKillercells ({x: 50, y: 670}); 
        //drawCoronaCell ({x: 150, y: 150}); 
        buildCorona ({x: 10, y: 20}); 
        drawParticles({x: 40, y: 500},  {x: 600, y: 600}); 

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

    function drawHumanCell (_position: Vector, _size: Vector ): void {

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
    


    function drawAntibodies (_position: Vector, _size: Vector): void {

    
        //Zeichnen der Antikörper 

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


        crc2.restore();
        


    }

    function showAntibodies (_position: Vector): void {
        
        //Dublizieren der Antikörper 

        for (let drawn: number = 0; drawn < 7; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.4; //Variieren der Werte
            _position.y = 450 + (20 * Math.random());
     
            drawAntibodies(_position, {x: 450, y: 650});
        }
    }

    function drawKillercell (_position: Vector, _size: Vector): void {

        let radiusKillerCell: number = 25; 

        //Zeichnen einer Killerzelle 
        
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.arc(_position.x + 20, _position.y + 20, radiusKillerCell, 0.2 * Math.PI, 1.8 * Math.PI, false);
        crc2.lineTo(_position.x + 20, _position.y + 20);
        crc2.closePath();
        crc2.fillStyle = "#FFDAB9";
        crc2.strokeStyle = "#FFDAB9";
        crc2.fill();
        crc2.stroke();
        crc2.save();
        crc2.restore();
       
       
    }

    function buildKillercells (_position: Vector): void {

        for (let drawn: number = 0; drawn < 5; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.8;
            _position.y = 300 + (20 * Math.random());
     
            drawKillercell(_position, {x: 150 , y: 150});
        }
    }

    function drawCoronaCell (_position: Vector,  _size: Vector): void {
        
        crc2.translate(_position.x, _position.y); 
        //Zeichen der Stängel 
        for (let i: number = 0; i < 8; i++) {
            
            crc2.beginPath(); 
            crc2.rotate(20); 
            crc2.moveTo( 0,  0); 
            crc2.lineTo( 0,   10); 
            crc2.strokeStyle = "#B43104"; 
            crc2.lineWidth = 2; 
            crc2.stroke(); 
            crc2.closePath(); 
        }


        //Zeichnen des Kreises 
        crc2.beginPath();
        crc2.arc( 0,  0 , 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ae2d16";
        crc2.fill();
        crc2.closePath();
        //crc2.save(); 
        //crc2.translate(_position.x, _position.y); 
        //crc2.restore();


    }

    function buildCorona (_position: Vector): void {
        let radius: number; 
        let position: number = 20; 

        //Fünf Coronazellen sollen gezeichnet werden 
        for (let i: number = 0; i < 5; i++) {
            radius = 5;
            _position.x = position + radius;
            position = _position.x + radius;
            _position.y = 300 + (50 * Math.random());

            drawCoronaCell (_position, {x: 20, y: 20}); 
        }

        crc2.save(); 
        crc2.translate(_position.x, _position.y); 
        crc2.restore();
    }

    //Luftpartikel werden gezeichnet und dubliziert 
    function drawParticles (_position: Vector, _size: Vector ): void {

        let nParticles: number = 90; 
        let radiusParticle: number = 4; 
        let particle: Path2D = new Path2D(); 
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle); 

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); 
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(1, "#ffcc01");
        crc2.fillStyle = gradient;

        crc2.save(); 

        crc2.translate(_position.x, _position.y); 

        
        crc2.restore(); 

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save(); 
            let x: number = (Math.random() - 0.5) * _size.x; 
            let y: number = -(Math.random() * _size.y); 
            crc2.translate(x, y); 
            crc2.fill(particle); 
            crc2.restore(); 
        }
        //crc2.restore();

    }







}