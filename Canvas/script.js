"use strict";
console.log("start");
window.addEventListener("load", init);
function init() {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    //Farbverlauf:
    let gradient = crc2.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.3, "black");
    gradient.addColorStop(.4, "red");
    gradient.addColorStop(.5, "red");
    gradient.addColorStop(0.7, "gold");
    gradient.addColorStop(1, "gold");
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, 200, 100);
    //Formen udn Linien 
    crc2.fillStyle = "#FF0000";
    crc2.fillRect(0, 0.3, crc2.canvas.width, crc2.canvas.height);
    crc2.beginPath();
    crc2.arc(120, 70, 40, 0, 1.5 * Math.PI); //Links/Rechts-Höhe-Größe-Form des Kreises 
    crc2.strokeStyle = "yellow";
    crc2.closePath(); // Was macht closePath? 
    crc2.stroke();
    crc2.beginPath();
    crc2.ellipse(100, 80, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
    crc2.strokeStyle = "pink";
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(75, 50); //Eckige Formen lassen sich darstellen 
    crc2.lineTo(110, 75); //mithilfe von line to
    crc2.lineTo(110, 25);
    crc2.closePath();
    crc2.stroke();
    let path = new Path2D(); // new Path2D: individuelles Pfadobjekt zu erzeugen und die 
    // Pfadanweisung darauf auszuführen. Pfad wird gespeichert und im Laufe des Programms wiederverwendet werden. 
    //ohne das der Algorithmus zur PFaderstellung wieder durchlaufen werden muss. 
    path.arc(60, 60, 50, 0, 2 * Math.PI);
    crc2.stroke(path);
    //Pattern 
    /*let pattern: CanvasRenderingContext = document.createElement('canvas').getContext('2d');
    pattern.canvas.width = 40;
    pattern.canvas.height = 20;
    
    pattern.fillStyle = '#fec';
    pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
    pattern.moveTo(0, 10);
    pattern.lineTo(10, 10);
    pattern.lineTo(20, 0);
    pattern.lineTo(30, 0);
    pattern.lineTo(40, 10);
    pattern.lineTo(30, 20);
    pattern.lineTo(20, 20);
    pattern.lineTo(10, 10);
    pattern.stroke();
    
    crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
    crc2.fillRect(0, 0, canvas.width, canvas.height);*/
}
//# sourceMappingURL=script.js.map