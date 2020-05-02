
console.log("verknüpft"); 

let randomWord: HTMLElement;
let startGame: HTMLElement; 
let inputWord: HTMLInputElement;
let inputTimeWatch: HTMLInputElement; 
let inputTimeGame: HTMLInputElement;
let currentSequence: HTMLElement; 
let hiddenCharacters: HTMLElement; 





let sequences: string [] = ["Betthupferl", "Hokuspokus", "mucksmäuschenstill", "Purzelbaum", "Wolkenkuckucksheim"];
let sequence: string = ""; 
let enterWord: string; 
let timeWatch: string; 
let timeGame: string; 
let timer: boolean = false; 


window.addEventListener("load", function(): void {

    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame"); 
    inputWord = document.querySelector("#enterWord"); 
    currentSequence = document.querySelector("#mainWord"); 



    startGame.addEventListener("click", beginWithGame);
    randomWord.addEventListener("click", chooseRandomWord);
    inputWord.addEventListener ("keydown", inputOwnWord); 
    

});

function chooseRandomWord(): void {
     console.log("Ich wurde geklickt"); 
    
     shufflecharacters();
     sequence = sequences[1];
     currentSequence.innerHTML = sequence;

     
    /* let firstWordSequences: string = sequences.pop();
     sequence.push(sequences[1]);
     console.log(sequence);  */
    
     
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

/*function setTimer(): void {
    timeWatch = inputTimeWatch.value; 
    timeGame = inputTimeGame.value; 
    let timerWatch: number = setInterval(hideCharacters, 3000); 
}*/

function beginWithGame(): void {
    console.log("Let the games begin");
    //setTimer(); 

    var singleCharacters: string[] = sequence.split("");

    var tmp: string, rand: number;
    for (var i: number = 0; i < singleCharacters.length; i++) {
        rand = Math.floor(Math.random() * singleCharacters.length);
        tmp = singleCharacters[i]; 
        singleCharacters[i] = singleCharacters[rand]; 
        singleCharacters[rand] = tmp;
        }
    console.log(singleCharacters);
    


}

function hideCharacters(): void {

    let element: HTMLElement = document.createElement("span"); 
    element.classList.add("#hiddenCharacters");
    element.setAttribute("style", "float: left");

}