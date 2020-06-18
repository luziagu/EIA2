namespace coronaVirusAnimation {
    export class Corona {
        position: Vector; 
        velocity: Vector; 

        constructor(_position: Vector) {
            this.position = _position; 
            this.velocity = new Vector(0, 0); 
            this.velocity.random(20, 70); 

        }

        move(_timeslice: number): void {

            let speed: Vector = new Vector(this.velocity.x, this.velocity.y);
            speed.scale(_timeslice); 
            this.position.add(speed);
           
            if (this.position.x < - 30)
                this.position.x += crc2.canvas.width;
            if (this.position.y < - 30)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width + 30)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height + 30)
                this.position.y -= crc2.canvas.height;
        }

        draw(_position: Vector): void {
            crc2.save();
            crc2.translate(_position.x, _position.y);

            for (let drawn: number = 0; drawn < 10; drawn++) {
                crc2.beginPath(); 
                crc2.rotate(20); 
                crc2.moveTo( 0,  0); 
                crc2.lineTo( 0,   40); 
                crc2.strokeStyle = "#B43104"; 
                crc2.lineWidth = 2; 
                crc2.stroke(); 
                crc2.closePath(); 
            }

            crc2.beginPath();
            crc2.arc( 0,  0 , 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#ae2d16";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

    }
}