namespace coronaVirusAnimation {
    export class Corona extends Moveable { 

        infected: boolean = false; 
       
    
        

        constructor(_position?: Vector) {

            super(_position); 


            if (_position)
            this.position = _position.copy();
            else 
            this.velocity = new Vector(0, 0);

            this.radius = 5;


            this.velocity = new Vector(0, 0);
            this.velocity = Vector.getRandom(5, 10);
        }

        public draw(): void {
            // console.log("draw Corona");

            
            // crc2.restore();
            crc2.save();
            crc2.translate(this.position.x, this.position.y); 
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


        public move(_timeslice: number): void {
            if (this.infected == false) {
                if (this.position.y < 250) {
                    super.move(_timeslice * 2); 
                }
                else {
                    super.move(_timeslice);
                }
            }
        }

        public isInfected(): boolean {
            if (this.position.y < 125) {
                return true;
            }
            else {
                return false; 
            }
        }


    


    }
}