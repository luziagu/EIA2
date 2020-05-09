console.log("Verknüpft");
var addButtonItem;
var addButtonTask;
window.addEventListener("load", function () {
    addButtonItem = document.querySelector("#addItem");
    addButtonTask = document.querySelector("#addTask");
    addButtonItem.addEventListener("click", addNewRow);
    addButtonTask.addEventListener("click", addNewRow);
});
function addNewRow() {
    console.log("Ich wurde geklickt");
}
//# sourceMappingURL=script.js.map