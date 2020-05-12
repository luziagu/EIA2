"use strict";
console.log("verknüpft");
let randomWord;
let startGame;
let inputWord;
let inputTimeWatch;
let inputTimeGame;
let currentSequence;
let hiddenCharacters;
let mainGame;
let sequences = ["Betthupferl", "Hokuspokus", "Mucksmäuschenstill", "Purzelbaum", "Wolkenkuckucksheim"];
let sequence = "";
let enterWord = "";
let timeWatch;
let timeGame;
let timer = false;
window.addEventListener("load", function () {
    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame");
    inputWord = document.querySelector("#enterWord");
    currentSequence = document.querySelector("#mainWord");
    mainGame = document.querySelector("#mainGame");
    startGame.addEventListener("click", beginWithGame);
    randomWord.addEventListener("click", chooseRandomWord);
    inputWord.addEventListener("keydown", inputOwnWord);
    mainGame.addEventListener("click", hideCharacters);
});
function chooseRandomWord() {
    console.log("Ich wurde geklickt");
    shufflecharacters();
    sequence = sequences[1];
    currentSequence.innerHTML = sequence;
    /* let firstWordSequences: string = sequences.pop();
     sequence.push(sequences[1]);
     console.log(sequence);  */
}
function inputOwnWord(e) {
    if (e.keyCode === 13) {
        sequence = inputWord.value;
        inputWord.value = "";
    }
    console.log(sequence);
    currentSequence.innerHTML = sequence;
}
function shufflecharacters() {
    let tmp, rand;
    for (var i = 0; i < sequences.length; i++) {
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
function beginWithGame() {
    console.log("Let the games begin");
    //setTimer(); 
    var singleCharacters = sequence.split("");
    var tmp, rand;
    for (var i = 0; i < singleCharacters.length; i++) {
        rand = Math.floor(Math.random() * singleCharacters.length);
        tmp = singleCharacters[i];
        singleCharacters[i] = singleCharacters[rand];
        singleCharacters[rand] = tmp;
    }
    console.log(singleCharacters);
    for (let i = 0; i < singleCharacters.length; i++) {
        mainGame.innerHTML += "<span ID='openCharacters'>" + singleCharacters[i] + "</span>";
    }
}
function hideCharacters(_event) {
    let clickCharacter = _event.target;
    clickCharacter.classList.add(".hiddenCharacters");
    alert("Ups, irgendwas stimmt hier noch nicht. Naja immerhin kannst du ein Wort mischen - macht ja eigentlich auch spaß, oder?");
}
//# sourceMappingURL=script.js.map