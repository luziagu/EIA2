"use strict";
var haushaltshilfe;
(function (haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let totalcost = 0;
    function handleLoad(_event) {
        haushaltshilfe.generateContent(haushaltshilfe.data);
        console.log("verknüpft");
        let einkauf = document.querySelector("#einkauf");
        let haushalt = document.querySelector("#haushalt");
        let fieldeinkauf = document.querySelector("#fieldeinkauf");
        let fieldhaus = document.querySelector("#fieldhaus");
        let geteinkauf = document.querySelector("#buttoneinkauf");
        let gethaushalt = document.querySelector("#buttonhausarbeiten");
        //let addButtonItem: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addItem");
        einkauf.addEventListener("click", showfieldset);
        haushalt.addEventListener("click", showfieldset);
        geteinkauf.addEventListener("click", handleChange);
        gethaushalt.addEventListener("click", handleChange);
        //addButtonItem.addEventListener("click", addNewRowShopping);
        function showfieldset() {
            if (einkauf.checked == true) {
                fieldeinkauf.disabled = false;
                fieldhaus.disabled = true;
                console.log("enable fieldset Einkauf");
            }
            else if (haushalt.checked == true) {
                fieldeinkauf.disabled = true;
                fieldhaus.disabled = false;
                console.log("enable fieldset Haushalt");
            }
        }
        /*function addNewRowShopping (): void {
            console.log("Ich wurde geklickt");
        
        
            let p:  HTMLElement | null = document.getElementById("fieldeinkauf");
            if (document.getElementById("addItem").clicked == true) {
            let p_prime: Node | null = p.cloneNode(true);
            let cloneDiv = <HTMLElement> document.getElementById("cloneDiv");
            cloneDiv.appendChild(p_prime);
            }
            
            
        }*/
    }
    function handleChange() {
        let diveinkauf = document.querySelector("#diveinkauf");
        let divhaushalt = document.querySelector("#divhaushalt");
        let gesamt = document.querySelector("#bestellung");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            console.log(entry);
            let price = Number(item.getAttribute("price"));
            let amount = Number(formData.get("Amount"));
            console.log(item);
            console.log("Item: ", item.value);
            console.log("Price: ", price);
            console.log("Amount: ", amount);
            let prices;
            let span1 = document.createElement("span");
            let span2 = document.createElement("span");
            let span3 = document.createElement("span");
            let span4 = document.createElement("span");
            let orderorder = document.createElement("div");
            let deletebutton = document.createElement("button");
            deletebutton.classList.add("far", "fa-trash-alt");
            if (entry[0] == "Groceries") {
                let store = String(formData.get("Store"));
                prices = amount * price;
                deletebutton.addEventListener("click", function () {
                    deleteanorder(prices, event, gesamt);
                });
                span1.innerHTML = " " + amount;
                span2.innerHTML = "" + entry[1];
                span3.innerHTML = " Laden: " + store;
                span4.innerHTML = " Preis: " + prices + "€";
                diveinkauf.appendChild(orderorder);
                orderorder.appendChild(deletebutton);
                orderorder.appendChild(span1);
                orderorder.appendChild(span2);
                orderorder.appendChild(span3);
                orderorder.appendChild(span4);
                totalcost += prices;
            }
            else if (entry[1] == "Staubsaugen" || entry[1] == "Wäsche" || entry[1] == "Wischen") {
                prices = price * amount;
                span1.innerHTML = " " + entry[1] + ":";
                span2.innerHTML = " in " + amount + " Zimmer/n";
                span3.innerHTML = " Preis: " + prices + "€";
                console.log(item);
                deletebutton.addEventListener("click", function () {
                    deleteanorder(prices, event, gesamt);
                });
                divhaushalt.appendChild(orderorder);
                orderorder.appendChild(deletebutton);
                orderorder.appendChild(span1);
                orderorder.appendChild(span2);
                orderorder.appendChild(span3);
                totalcost += prices;
            }
            console.log(gesamt);
            console.log(totalcost);
            gesamt.innerHTML = totalcost.toFixed(2);
        }
        let fertigeBestellung = document.querySelector("#buttonFertig");
        fertigeBestellung.addEventListener("click", sendInOrder);
        function sendInOrder() {
            alert("Deine Bestellung wurde versendet und befindet sich bald auf dem Weg zu dir nach Hause");
        }
        function deleteanorder(_prices, _event, _gesamt) {
            totalcost -= _prices;
            _gesamt.innerHTML = "" + totalcost.toFixed(2);
            console.log(totalcost);
            let deletespan = _event.target;
            let getparentdiv = deletespan.parentNode;
            let getgrandparentdiv = getparentdiv.parentNode;
            getgrandparentdiv.removeChild(getparentdiv);
        }
    }
})(haushaltshilfe || (haushaltshilfe = {}));
//# sourceMappingURL=script.js.map