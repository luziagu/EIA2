namespace coronaVirusAnimation {

    export class Particle extends Moveable {
        
     
      
       


        constructor(_position: Vector) {
            super(_position); 


            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.radius = (Math.random() * 7) + 1;

        
        }

        draw(): void {
            console.log("draw Particle");

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            crc2.save();
            

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);

            crc2.closePath();

            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 50%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
            gradient.addColorStop(1, "#ffcc01");

            crc2.fillStyle = gradient;
            
          
            
            crc2.fill();
            crc2.restore();
         

        }


        move(_timeslice: number): void {
            let offset: Vector = this.velocity.copy(); 
            offset.x *= 0; 
            offset.y *=  _timeslice * 1.2;
            this.position.add(offset); 

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

    }

}