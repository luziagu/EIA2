
/*console.log("verknüpft"); 

let randomWord: HTMLElement;
let startGame: HTMLElement; 
let inputWord: HTMLInputElement;
let inputTimeWatch: HTMLInputElement; 
let inputTimeGame: HTMLInputElement;
let currentSequence: HTMLElement; 
let hiddenCharacters: HTMLElement; 
let mainGame: HTMLElement; 





let sequences: string [] = ["Betthupferl", "Hokuspokus", "Mucksmäuschenstill", "Purzelbaum", "Wolkenkuckucksheim"];
let sequence: string = ""; 
let enterWord: string = "";  
let timeWatch: string; 
let timeGame: string; 
let timer: boolean = false; 


window.addEventListener("load", function(): void {

    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame"); 
    inputWord = document.querySelector("#enterWord"); 
    currentSequence = document.querySelector("#mainWord");
    mainGame = document.querySelector("#mainGame"); 



    startGame.addEventListener("click", beginWithGame);
    randomWord.addEventListener("click", chooseRandomWord);
    inputWord.addEventListener ("keydown", inputOwnWord); 
    mainGame.addEventListener("click", hideCharacters); 
    

});

function chooseRandomWord(): void {
     console.log("Ich wurde geklickt"); 
    
     shufflecharacters();
     sequence = sequences[1];
     currentSequence.innerHTML = sequence;

     
    /* let firstWordSequences: string = sequences.pop();
     sequence.push(sequences[1]);
     console.log(sequence);  
    
     
}

/*
function inputOwnWord(e: any): void {

    
    if (e.keyCode === 13) {
        sequence = inputWord.value; 
        inputWord.value = "";
    }

    console.log(sequence);
    
    currentSequence.innerHTML = sequence;
   
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
/*
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

    for (let i: number = 0; i < singleCharacters.length; i++) {
    
    mainGame.innerHTML += "<span ID='openCharacters'>" + singleCharacters[i] + "</span>";
    
    }
    


}

function hideCharacters(_event: MouseEvent): void {
    

    let clickCharacter: HTMLElement = <HTMLElement>_event.target; 
    clickCharacter.classList.add(".hiddenCharacters");
    
    alert("Ups, irgendwas stimmt hier noch nicht. Naja immerhin kannst du ein Wort mischen - macht ja eigentlich auch spaß, oder?"); 
   
}*/