namespace coronaVirusAnimation {

    export class HumanCell {

        position: Vector;
        radius: number;

        velocity: Vector;


        constructor(_position: Vector) {
            this.position = _position;

            this.radius = 15;



            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
        }

        draw(_position: Vector): void {
            // console.log("drawHumanCell");
            crc2.save();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, this.radius);
            
           
            crc2.beginPath();
            crc2.arc(_position.x, _position.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath(); 
            gradient.addColorStop(0, "midnightblue");
            gradient.addColorStop(0.3, "#E6E6FA");
            gradient.addColorStop(0.5, "#E6E6FA");
            gradient.addColorStop(0.7, "#E6E6FA");
            gradient.addColorStop(1, "#E6E6FA");
        
            crc2.fillStyle = gradient;
            crc2.fillStyle = gradient;
            crc2.lineWidth = 2;
            crc2.strokeStyle = "#E6E6FA";
            crc2.stroke();
            crc2.fill();
            crc2.restore();
            crc2.restore();
          
          
        }

        

        move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            offset.x *= _timeslice * 0.5;
            offset.y *= _timeslice;
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += (crc2.canvas.width);
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > (crc2.canvas.width))
                this.position.x -= (crc2.canvas.width);
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        
    }
}