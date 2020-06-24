namespace coronaVirusAnimation {
    export class Corona {

        position: Vector;
        radius: number;
        //  gradient: CanvasGradient;
        velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.radius = 5;


            this.velocity = new Vector(0, 0);
            this.velocity.random(5, 10);
        }

        draw(_position: Vector): void {
            // console.log("draw Corona");

            
            // crc2.restore();
            crc2.save();
            crc2.translate(_position.x, _position.y); 
             //Zeichen der Stängel 
            for (let i: number = 0; i < 11; i++) {
            
                crc2.beginPath(); 
                crc2.rotate(20); 
                crc2.moveTo( 0, 0); 
                crc2.lineTo( 0,   40); 
                crc2.strokeStyle = "#B43104"; 
                crc2.lineWidth = 2; 
                crc2.stroke(); 
                crc2.closePath(); 
            }

            


        //Zeichnen des Kreises 
            crc2.beginPath();
            crc2.arc( 0,  0, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#ae2d16";
            crc2.fill();
            crc2.closePath();
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