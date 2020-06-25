namespace coronaVirusAnimation {
    export class Antibody extends Moveable {
        

        rotation: number;

        constructor(_position?: Vector) {

            super(_position); 
            

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(2, 5);
            this.rotation = Math.random() * 360; 
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.rotate(this.rotation);
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 25);

            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;

            crc2.moveTo(0, 25);
            crc2.lineTo(15, 40);
            crc2.moveTo(0, 25);
            crc2.lineTo(-15, 40);

            crc2.stroke();
            crc2.closePath();
            crc2.restore();
            crc2.restore();
        }

      
    }
}