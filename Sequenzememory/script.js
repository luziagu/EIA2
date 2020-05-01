console.log("verknüpft");
var randomWord;
var startGame;
var sequences = ["Furtwangen", "Corona", "Entwicklung Interaktiver Anwedungen"];
var enterWord = [];
document.addEventListener("load", function () {
    randomWord = document.querySelector("#randomWord");
    startGame = document.querySelector("#startGame");
    startGame.addEventListener("click", function () {
        shufflecharacters();
    });
    randomWord.addEventListener("click", function () {
        console.log("ich wurde geklickt");
    });
});
function shufflecharacters() {
    var tmp, rand;
    for (var i = 0; i < sequences.length; i++) {
        rand = Math.floor(Math.random() * sequences.length);
        tmp = sequences[i];
        sequences[i] = sequences[rand];
        sequences[rand] = tmp;
    }
    console.log("gemischt");
}
//# sourceMappingURL=script.js.map