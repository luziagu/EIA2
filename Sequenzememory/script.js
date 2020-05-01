console.log("verknüpft");
var sequences = ["Furtwangen", "Corona", "Entwicklung Interaktiver Anwedungen"];
function chooseRandomWord(_Event) {
    var randomWordButton = document.getElementById("randomWord");
    randomWordButton.addEventListener("click", chooseWord);
}
function chooseWord() {
    console.log("Ich wurde geklickt.");
}
//# sourceMappingURL=script.js.map