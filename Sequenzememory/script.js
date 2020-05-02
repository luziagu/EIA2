console.log("verknüpft");
var randomWord;
var startGame;
var inputWord;
var inputTimeWatch;
var inputTimeGame;
var currentSequence;
var hiddenCharacters;
var mainGame;
var sequences = ["Betthupferl", "Hokuspokus", "Mucksmäuschenstill", "Purzelbaum", "Wolkenkuckucksheim"];
var sequence = "";
var enterWord = "";
var timeWatch;
var timeGame;
var timer = false;
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
    var tmp, rand;
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
    for (var i_1 = 0; i_1 < singleCharacters.length; i_1++) {
        mainGame.innerHTML += "<span ID='openCharacters'>" + singleCharacters[i_1] + "</span>";
    }
}
function hideCharacters(_event) {
    var clickCharacter = _event.target;
    clickCharacter.classList.add(".hiddenCharacters");
    alert("Ups, irgendwas stimmt hier noch nicht. Naja immerhin kannst du ein Wort mischen - macht ja eigentlich auch spaß, oder?");
}
//# sourceMappingURL=script.js.map