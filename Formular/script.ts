console.log("Verknüpft"); 

let addButtonItem: HTMLElement; 
let addButtonTask: HTMLElement; 
let chooseItem: HTMLElement; 
let cloneDiv: HTMLElement; 
let householdTask: HTMLElement; 
let cloneDivTask: HTMLElement; 


window.addEventListener("load", function(): void {

    addButtonItem = document.querySelector("#addItem");
    addButtonTask = document.querySelector("#addTask"); 
    chooseItem = this.document.querySelector("#chooseItem"); 
    cloneDiv = document.querySelector("#cloneDiv"); 
    householdTask = document.querySelector("#householdTask");
    cloneDivTask = document.querySelector("#cloneDivTask");



    addButtonItem.addEventListener("click", addNewRowShopping);
    addButtonTask.addEventListener("click", addNewRowTask );
 

});

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