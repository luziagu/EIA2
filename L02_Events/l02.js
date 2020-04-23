var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("start");
    var chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function smartphoneLetters(_event) {
        var lettersSmartphone = ["A", "B", "C"];
    }
    function handleLoad(_event) {
        var mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        //console.log(_event);
        var x = _event.offsetX;
        var y = _event.offsetY;
        var mail = _event.target;
        var letter = document.createElement("span");
        mail.appendChild(letter);
        letter.addEventListener("click", deleteLetter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
    }
    function chooseCharacter(_event) {
        // console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        var target = _event.target;
        var parent = target.parentNode;
        parent.removeChild(target);
        _event.stopPropagation();
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=l02.js.map