"use strict";
console.log("Verknüpft");
let addButtonItem;
let addButtonTask;
let chooseItem;
let cloneDiv;
let householdTask;
let cloneDivTask;
let slider;
window.addEventListener("load", function () {
    addButtonItem = document.querySelector("#addItem");
    addButtonTask = document.querySelector("#addTask");
    chooseItem = this.document.querySelector("#chooseItem");
    cloneDiv = document.querySelector("#cloneDiv");
    householdTask = document.querySelector("#householdTask");
    cloneDivTask = document.querySelector("#cloneDivTask");
    slider = document.querySelector("#mass");
    slider.addEventListener("input", displayMass);
    addButtonItem.addEventListener("click", addNewRowShopping);
    addButtonTask.addEventListener("click", addNewRowTask);
    chooseItem.addEventListener("change", outputChange);
    householdTask.addEventListener("change", outputChange);
});
function displayMass(_event) {
    console.log("Input verändert");
    let progress = document.querySelector("progress");
    let amount = _event.target.value;
    progress.value = parseFloat(amount);
}
function addNewRowShopping() {
    console.log("Ich wurde geklickt");
    let p = document.getElementById("chooseItem");
    let p_prime = p.cloneNode(true);
    document.getElementById("cloneDiv").appendChild(p_prime);
}
function addNewRowTask() {
    console.log("Ich wurde geklickt");
    let p = document.getElementById("householdTask");
    let p_prime = p.cloneNode(true);
    document.getElementById("cloneDivTask").appendChild(p_prime);
}
function outputChange() {
    let formData = new FormData(document.forms[0]);
    console.log(formData);
    for (let entry of formData) {
        console.log(entry);
    }
}
//# sourceMappingURL=script.js.map