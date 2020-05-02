console.log("verknüpft");
var randomWord;
var startGame;
var inputWord;
var inputTimeWatch;
var inputTimeGame;
var sequences = ["Betthupferl", "Hokuspokus", "mucksmäuschenstill", "Purzelbaum", "Wolkenkuckucksheim"];
var enterWord;
var timeWatch;
var timeGame;
window.addEventListener("load", function () {
    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame");
    inputWord = document.querySelector("#enterWord");
    startGame.addEventListener("click", beginWithGame);
    randomWord.addEventListener("click", chooseRandomWord);
    inputWord.addEventListener("keydown", inputOwnWord);
});
function chooseRandomWord() {
    console.log("Ich wurde geklickt");
    shufflecharacters();
}
function inputOwnWord(e) {
    if (e.keyCode === 13) {
        enterWord = inputWord.value;
        inputWord.value = "";
    }
    console.log(enterWord);
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
function beginWithGame() {
    console.log("Let the games begin");
}
//# sourceMappingURL=script.js.map