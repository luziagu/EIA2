"use strict";
var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("start");
    let chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    /*function smartphoneLetters(_event: PointerEvent): void {

        let lettersSmartphone: string [] = ["A", "B", "C", "d"];
        lettersSmartphone.push =  document.getElementById("letters");

        
        
    }*/
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        //console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        let letter = document.createElement("span");
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
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
        _event.stopPropagation();
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=l02.js.map