
console.log("verknüpft"); 

let randomWord: HTMLElement;
let startGame: HTMLElement; 
let sequences: string [] = ["Furtwangen", "Corona", "Entwicklung Interaktiver Anwedungen"];
let enterWord: string [] = []; 

document.addEventListener("load", function(): void {

    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame"); 


    startGame.addEventListener("click", function(): void {
        shufflecharacters();
        
    });

    randomWord.addEventListener("click", function(): void {
        
        console.log("ich wurde geklickt"); 
    });

});



function shufflecharacters(): void {
    let tmp, rand;
    for (var i: number = 0; i < sequences.length; i++) {
      rand = Math.floor(Math.random() * sequences.length);
      tmp = sequences[i]; 
      sequences[i] = sequences[rand]; 
      sequences[rand] = tmp;
    }
    console.log("gemischt");
}