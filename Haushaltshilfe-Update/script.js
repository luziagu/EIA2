"use strict";
var haushaltshilfe;
(function (haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    let totalcost = 0;
    //let url: string = "index.html"; 
    let url = "http://localhost:5000";
    async function handleLoad(_event) {
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        haushaltshilfe.generateContent(data);
        console.log("verknüpft");
        let einkauf = document.querySelector("#Einkaufen");
        let haushalt = document.querySelector("#Householdtasks");
        let fieldeinkauf = document.querySelector("#fieldeinkauf");
        let fieldhaus = document.querySelector("#fieldhaus");
        let geteinkauf = document.querySelector("#buttoneinkauf");
        let gethaushalt = document.querySelector("#buttonhausarbeiten");
        //let fertigeBestellung: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonFertig");
        let submit = document.querySelector("button#buttonFertig");
        console.log(submit);
        //let addButtonItem: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addItem");
        einkauf.addEventListener("click", showfieldset);
        haushalt.addEventListener("click", showfieldset);
        geteinkauf.addEventListener("click", handleChange);
        gethaushalt.addEventListener("click", handleChange);
        submit.addEventListener("click", sendInOrder);
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
    }
    async function sendInOrder(_event) {
        console.log("Send order");
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert("Dein gesamter Einkauf kostet: " + totalcost.toFixed(2) + "€" + "Das hast du bestellt: " + responseText);
        //location.reload(); 
    }
    /*function addNewRowShopping (): void {
        console.log("Ich wurde geklickt");
    
        let p:  HTMLElement | null;
        p = document.getElementById("fieldeinkauf");
        if (p) {
        let p_prime: Node | null = p.cloneNode(true);
        let cloneDiv = <HTMLElement> document.getElementById("cloneDiv");
        cloneDiv.appendChild(p_prime);
        }
        
        
    }*/
    function handleChange() {
        let diveinkauf = document.querySelector("#diveinkauf");
        let divhaushalt = document.querySelector("#divhaushalt");
        let gesamt = document.querySelector("#gesamt");
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']");
            console.log(entry);
            if (item === null) {
                continue;
            }
            console.log("entry[1]:", entry[1]);
            let amount = Number(formData.get("Amount"));
            let price = Number(item.getAttribute("price"));
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
            switch (entry[0]) {
                case "groceries":
                    let store = String(formData.get("store"));
                    prices = amount * price;
                    deletebutton.addEventListener("click", function () {
                        deleteanorder(prices, event, gesamt);
                    });
                    span1.innerHTML = " " + amount;
                    span2.innerHTML = " " + entry[1];
                    span3.innerHTML = " Laden: " + store;
                    span4.innerHTML = " Preis: " + prices + "€";
                    diveinkauf.appendChild(orderorder);
                    orderorder.appendChild(deletebutton);
                    orderorder.appendChild(span1);
                    orderorder.appendChild(span2);
                    orderorder.appendChild(span3);
                    orderorder.appendChild(span4);
                    totalcost += prices;
                    break;
                case "Gassi gehen":
                    prices = price * amount;
                    span1.innerHTML = " " + entry[0] + ":";
                    span2.innerHTML = " " + amount + " mal am Tag" + " | ";
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
                    break;
                case "Wäsche waschen":
                    prices = price * amount;
                    span1.innerHTML = " " + entry[0] + ":";
                    span2.innerHTML = " " + amount + " mal in der Woche " + " | ";
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
                    break;
                case "Wischen":
                    prices = price * amount;
                    span1.innerHTML = " " + entry[0] + ":";
                    span2.innerHTML = " in " + amount + " Zimmer/n" + " | ";
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
                    break;
                default:
                    break;
            }
            console.log(gesamt);
            console.log(totalcost);
            gesamt.innerHTML = totalcost.toFixed(2);
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