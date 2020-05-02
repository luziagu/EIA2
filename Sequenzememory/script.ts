
console.log("verknüpft"); 

let randomWord: HTMLElement;
let startGame: HTMLElement; 
let inputWord: HTMLInputElement;
let inputTimeWatch: HTMLInputElement; 
let inputTimeGame: HTMLInputElement;


let sequences: string [] = ["Betthupferl", "Hokuspokus", "mucksmäuschenstill", "Purzelbaum", "Wolkenkuckucksheim"];
let enterWord: string; 
let timeWatch: number; 
let timeGame: number; 


window.addEventListener("load", function(): void {

    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame"); 
    inputWord = document.querySelector("#enterWord"); 



    startGame.addEventListener("click", beginWithGame);
    randomWord.addEventListener("click", chooseRandomWord);
    inputWord.addEventListener ("keydown", inputOwnWord); 
    

});

function chooseRandomWord(): void {
     console.log("Ich wurde geklickt"); 
    
     shufflecharacters();
    
  

}

function inputOwnWord(e: any): void {

    
    if (e.keyCode === 13) {
        enterWord = inputWord.value; 
        inputWord.value = "";
    }

    console.log(enterWord);
}


function shufflecharacters(): void {


    let tmp: string, rand: number;
    for (var i: number = 0; i < sequences.length; i++) {
      rand = Math.floor(Math.random() * sequences.length);
      tmp = sequences[i]; 
      sequences[i] = sequences[rand]; 
      sequences[rand] = tmp;
    }
    
    console.log(sequences); 
    console.log("Array wurde gemischelt");
}


function beginWithGame(): void {
    console.log("Let the games begin");

    


}