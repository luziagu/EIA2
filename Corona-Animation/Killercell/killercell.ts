namespace coronaVirusAnimation {
    export class KillerCell {

        position: Vector;
        radius: number;
        velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.radius = 20;


            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
        }

        draw(_position: Vector): void {
            console.log("KillerCells");

            
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();

            crc2.moveTo(0, 0);
            crc2.arc(0, 0, this.radius, 0, Math.PI * 1.6);
            crc2.lineTo(0, 0);
            crc2.closePath();
            
            crc2.fillStyle = "#FFDAB9"; 
            crc2.lineWidth = 2;
            crc2.strokeStyle = "#FFDAB9";
    
            
            crc2.stroke();
            crc2.fill();
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