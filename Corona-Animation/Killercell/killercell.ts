namespace coronaVirusAnimation {
    export class KillerCell extends Moveable {

        

        constructor(_position?: Vector) {
            
            super(_position); 
            

            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);


            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
            this.radius = 20;
        }

        public draw(): void {
            console.log("KillerCells");
            crc2.save();
            crc2.translate(this.position.x, this.position.y); 
            
           
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



    }
}