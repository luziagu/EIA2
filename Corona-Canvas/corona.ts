namespace coronaVirus {

    
    console.log("load");
    interface Vector {
        x: number;
        y: number;
    }
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
        
        drawBackground();

    }

    function drawBackground(): void {
        console.log("Background");

        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 420;
        pattern.fillStyle = "pink";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(40, 0);
        pattern.lineTo(50, 0);
        pattern.lineTo(100, 20);
        pattern.lineTo(50, 40);
        pattern.lineTo(40, 40);
        pattern.lineTo(20, 20);
        pattern.stroke();
        pattern.closePath();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }


}