console.log("verknüpft"); 

let sequences: string [] = ["Furtwangen", "Corona", "Entwicklung Interaktiver Anwedungen"];

function chooseRandomWord(_Event: Event): void {
   let randomWordButton: HTMLElement = document.getElementById("randomWord"); 
   randomWordButton.addEventListener("click", chooseWord);

}

function chooseWord(): void {
 
    console.log("Ich wurde geklickt."); 

}