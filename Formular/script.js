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
    generateContent(data);
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
    let p;
    p = document.getElementById("chooseItem");
    if (p) {
        let p_prime = p.cloneNode(true);
        let cloneDiv = document.getElementById("cloneDiv");
        cloneDiv.appendChild(p_prime);
    }
}
function addNewRowTask() {
    console.log("Ich wurde geklickt");
    let p;
    p = document.getElementById("householdTask");
    if (p) {
        let p_prime = p.cloneNode(true);
        let cloneDiv = document.getElementById("cloneDivTask");
        cloneDiv.appendChild(p_prime);
    }
    if (p.cloneNode(true)) {
        var inputChange = document.getElementsByName("Radiogroup2");
        inputChange.setAttribute("id", "Radiogroup3");
    }
}
function outputChange() {
    let formData = new FormData(document.forms[0]);
    console.log(formData);
    for (let entry of formData) {
        console.log(entry);
    }
}
//# sourceMappingURL=script.js.map