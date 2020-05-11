console.log("Verknüpft"); 

let addButtonItem: HTMLElement; 
let addButtonTask: HTMLElement; 
let chooseItem: HTMLElement; 
let cloneDiv: HTMLElement; 
let householdTask: HTMLElement; 
let cloneDivTask: HTMLElement; 
let slider: HTMLElement;


window.addEventListener("load", function(): void {

    addButtonItem = document.querySelector("#addItem");
    addButtonTask = document.querySelector("#addTask"); 
    chooseItem = this.document.querySelector("#chooseItem"); 
    cloneDiv = document.querySelector("#cloneDiv"); 
    householdTask = document.querySelector("#householdTask");
    cloneDivTask = document.querySelector("#cloneDivTask");
    slider = document.querySelector("#mass");


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

    let p: HTMLElement = document.getElementById("chooseItem");
    let p_prime: Node = p.cloneNode(true); 
    document.getElementById("cloneDiv").appendChild(p_prime);
   
}

function addNewRowTask (): void {
    console.log("Ich wurde geklickt"); 

    let p: HTMLElement = document.getElementById("householdTask");
    let p_prime: Node = p.cloneNode(true); 
    document.getElementById("cloneDivTask").appendChild(p_prime);
   
}

function outputChange (): void {

    let formData: FormData = new FormData(document.forms[0]); 
    console.log(formData); 

    for (let entry of formData) {
        console.log(entry); 
    }
}