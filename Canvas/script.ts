console.log("start"); 

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
console.log(crc2); 
crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

