namespace coronaVirusAnimation {
    export class Pattern {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(_position: Vector): void {
        //    console.log("drawpattern");
            crc2.save();
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

            

            // fill primary canvas with pattern
            crc2.save(); 
            crc2.restore();
        }
    }
}