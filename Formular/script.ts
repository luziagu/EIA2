console.log("Verknüpft"); 

let addButtonItem: HTMLElement; 
let addButtonTask: HTMLElement; 


window.addEventListener("load", function(): void {

    addButtonItem = document.querySelector("#addItem");
    addButtonTask = document.querySelector("#addTask"); 
     



    addButtonItem.addEventListener("click", addNewRow);
    addButtonTask.addEventListener("click", addNewRow );
 

});

function addNewRow (): void {

console.log("Ich wurde geklickt"); 
}