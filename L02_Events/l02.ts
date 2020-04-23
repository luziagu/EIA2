

namespace L02_BlackmailerCompanion {
    console.log("start");
    let chosenCharacter: string = "A";
    window.addEventListener("load", handleLoad);

    function smartphoneLetters(_event: PointerEvent):void {

        let lettersSmartphone: string [] = ["A", "B", "C"];
        
    }

    

    function handleLoad(_event: Event): void {
        let mail: HTMLElement = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }

    function placeLetter(_event: MouseEvent): void {
        //console.log(_event);
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let mail: HTMLElement = <HTMLElement>_event.target; 
        let letter: HTMLSpanElement = document.createElement("span");

        mail.appendChild(letter);
        letter.addEventListener("click", deleteLetter);
       

        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";

        
    }

    function chooseCharacter(_event: KeyboardEvent): void {
        // console.log(_event);
        chosenCharacter = _event.key;
    }
 
    function deleteLetter(_event: MouseEvent): void {
         let target: Node = <Node>_event.target; 
         let parent: Node = <Node>target.parentNode; 
         parent.removeChild(target);
         _event.stopPropagation();

    }



}


   