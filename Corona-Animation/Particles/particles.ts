namespace coronaVirusAnimation  {

    export class Particles {
        position: Vector; 
        velocity: Vector; 
        rotate: number; 
        

        constructor(_position: Vector) {
            this.position = _position; 
            this.rotate = Math.random() * 360; 

        }

        move(_timeslice: number): void {
            let speed: Vector = new Vector(this.velocity.x, this.velocity.y); 
            //Die Geschwindigkeit wird mit der Zeit multipliziert 
            speed.x *= 0; 
            speed.y *= _timeslice * 2; 

            //Ausgerechnete Geschindigkeit und Zeit soll mit der Position addiert werden:

            this.position.add(speed);

            //Position soll immer auf dem Canvas liegen, deswegen überprüfung: 
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width; 
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
    
            this.position.y -= crc2.canvas.height;

        }

        draw(_position: Vector, _size: Vector): void {

            crc2.save(); 
            let circle: number = 2 * Math.PI;
            let nParticles: number = 90; 
            let radiusParticle: number = 4; 
            let particle: Path2D = new Path2D(); 
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle); 

            particle.arc(_position.x, _position.y, radiusParticle, 0, this.rotate, circle); 
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(1, "#ffcc01");
            crc2.fillStyle = gradient;

            

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
        }
    }

}