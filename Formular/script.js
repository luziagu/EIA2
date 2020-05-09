console.log("Verknüpft");
var addButtonItem;
var addButtonTask;
var chooseItem;
var cloneDiv;
var householdTask;
var cloneDivTask;
window.addEventListener("load", function () {
    addButtonItem = document.querySelector("#addItem");
    addButtonTask = document.querySelector("#addTask");
    chooseItem = this.document.querySelector("#chooseItem");
    cloneDiv = document.querySelector("#cloneDiv");
    householdTask = document.querySelector("#householdTask");
    cloneDivTask = document.querySelector("#cloneDivTask");
    addButtonItem.addEventListener("click", addNewRowShopping);
    addButtonTask.addEventListener("click", addNewRowTask);
});
function addNewRowShopping() {
    console.log("Ich wurde geklickt");
    var p = document.getElementById("chooseItem");
    var p_prime = p.cloneNode(true);
    document.getElementById("cloneDiv").appendChild(p_prime);
}
function addNewRowTask() {
    console.log("Ich wurde geklickt");
    var p = document.getElementById("householdTask");
    var p_prime = p.cloneNode(true);
    document.getElementById("cloneDivTask").appendChild(p_prime);
}
//# sourceMappingURL=script.js.map