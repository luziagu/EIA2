/*console.log("Verknüpft"); 

let addButtonItem:  HTMLElement | null;
let addButtonTask:  HTMLElement | null; 
let chooseItem: HTMLElement; 
let cloneDiv: HTMLElement; 
let householdTask: HTMLElement; 
let cloneDivTask: HTMLElement; 
let slider: HTMLElement;


window.addEventListener("load", function(): void {

    generateContent(data);

    addButtonItem = <HTMLElement>document.querySelector("#addItem");
    addButtonTask = <HTMLElement> document.querySelector("#addTask"); 
    chooseItem = <HTMLElement>this.document.querySelector("#chooseItem"); 
    cloneDiv = <HTMLElement>document.querySelector("#cloneDiv"); 
    householdTask = <HTMLElement> document.querySelector("#householdTask");
    cloneDivTask = <HTMLElement>document.querySelector("#cloneDivTask");
    slider = <HTMLElement>document.querySelector("#mass");


    slider.addEventListener("input", displayMass);
    addButtonItem.addEventListener("click", addNewRowShopping);
    addButtonTask.addEventListener("click", addNewRowTask );
    chooseItem.addEventListener("change", outputChange); 
    householdTask.addEventListener("change", outputChange); 
    
    

    
});

function displayMass(_event: Event): void {
    console.log("Input verändert"); 
    let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
    let amount: string = (<HTMLInputElement>_event.target).value;
    progress.value = parseFloat(amount);
}

function addNewRowShopping (): void {
    console.log("Ich wurde geklickt"); 


    let p:  HTMLElement | null; 
    p = document.getElementById("chooseItem");
    if (p) {
    let p_prime: Node | null = p.cloneNode(true); 
    let cloneDiv = <HTMLElement> document.getElementById("cloneDiv"); 
    cloneDiv.appendChild(p_prime);
    }
    
    
}

function addNewRowTask (): void {
    console.log("Ich wurde geklickt"); 

    let p:  HTMLElement | null; 
    p = document.getElementById("householdTask");
    if (p) {
    let p_prime: Node | null = p.cloneNode(true); 
    let cloneDiv = <HTMLElement> document.getElementById("cloneDivTask"); 
    cloneDiv.appendChild(p_prime);
    }

    if (p.cloneNode(true)) {
        var inputChange = document.getElementsByName("Radiogroup2"); 
        inputChange.setAttribute("id", "Radiogroup3"); 
    }
}

function outputChange (): void {


    let diveinkauf: HTMLDivElement = <HTMLDivElement>document.querySelector("#diveinkauf");
    let divhaushalt: HTMLDivElement = <HTMLDivElement>document.querySelector("#divhaushalt");
    let gesamt: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#bestellung");

    let formData: FormData = new FormData(document.forms[0]); 
    console.log(formData); 

    for (let entry of formData) {
        console.log(entry); 
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
    }
}*/