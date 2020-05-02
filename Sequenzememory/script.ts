
console.log("verknüpft"); 

let randomWord: HTMLElement;
let startGame: HTMLElement; 
let inputWord: HTMLInputElement;
let inputTimeWatch: HTMLInputElement; 
let inputTimeGame: HTMLInputElement;
let characters: HTMLElement; 
let hiddenCharacters: HTMLElement; 




let sequences: string [] = ["Betthupferl", "Hokuspokus", "mucksmäuschenstill", "Purzelbaum", "Wolkenkuckucksheim"];
let sequence: string [] = []; 
let enterWord: string; 
let timeWatch: string; 
let timeGame: string; 
let timer: boolean = false; 


window.addEventListener("load", function(): void {

    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame"); 
    inputWord = document.querySelector("#enterWord"); 
    characters = document.querySelector("mainWord"); 



    startGame.addEventListener("click", beginWithGame);
    randomWord.addEventListener("click", chooseRandomWord);
    inputWord.addEventListener ("keydown", inputOwnWord); 
    

});

function chooseRandomWord(): void {
     console.log("Ich wurde geklickt"); 
    
     shufflecharacters();

     
     let firstWordSequences: string = sequences.pop();
     sequence.push(sequences[1]);
     console.log(sequence); 
     characters.innerHTML = "";
     

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

function setTimer(): void {
    timeWatch = inputTimeWatch.value; 
    timeGame = inputTimeGame.value; 
    let timerWatch: number = setInterval(hideCharacters, 3000); 
}

function beginWithGame(): void {
    console.log("Let the games begin");


}

function hideCharacters(): void {

    let element: HTMLElement = document.createElement("span"); 
    element.classList.add("#hiddenCharacters");
    element.setAttribute("style", "float: left");

}