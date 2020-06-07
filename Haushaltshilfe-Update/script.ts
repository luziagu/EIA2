namespace haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let totalcost: number = 0;
    //let url: string = "index.html"; 
    let serverUrl: string = "https://haushaltshilfe-app.herokuapp.com/"; 

    async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("Data.json"); 
        let offer: string = await response.text(); 
        let data: Data = JSON.parse(offer); 

        generateContent(data);

        console.log("verknüpft"); 

        let einkauf: HTMLInputElement = <HTMLInputElement>document.querySelector("#Einkaufen");
        let haushalt: HTMLInputElement = <HTMLInputElement>document.querySelector("#Householdtasks");

        let fieldeinkauf: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("#fieldeinkauf");
        let fieldhaus: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("#fieldhaus");

        let geteinkauf: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttoneinkauf");
        let gethaushalt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonhausarbeiten");
       
        //let fertigeBestellung: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonFertig");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#buttonFertig"); 
        console.log(submit); 
        //let addButtonItem: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addItem");

        einkauf.addEventListener("click", showfieldset);
        haushalt.addEventListener("click", showfieldset);

        geteinkauf.addEventListener("click", handleChange);
        gethaushalt.addEventListener("click", handleChange);

        submit.addEventListener("click", sendInOrder); 

       

        //addButtonItem.addEventListener("click", addNewRowShopping);


        function showfieldset(): void {

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
    
    async function sendInOrder(_event: Event): Promise<void> {
            console.log("Send order"); 
            let formData: FormData = new FormData(document.forms[0]);
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            let response: Response = await fetch(serverUrl + "?" + query.toString()) ; 
            let responseText: string = await response.text(); 
            alert("Dein gesamter Einkauf kostet: " + totalcost.toFixed(2) + "€" + "Das hast du bestellt: " + responseText ); 

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
    

    function handleChange(): void {

        let diveinkauf: HTMLDivElement = <HTMLDivElement>document.querySelector("#diveinkauf");
        let divhaushalt: HTMLDivElement = <HTMLDivElement>document.querySelector("#divhaushalt");
        let gesamt: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#gesamt");

        let showButton: HTMLButtonElement= <HTMLButtonElement>document.querySelector("#show");
        let hideButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#hide");
        showButton.addEventListener("click", showDatabaseContent);
        hideButton.addEventListener("click", hideDatabaseContent);

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            console.log(entry); 
            if (item === null) { continue; }

            console.log("entry[1]:", entry[1]); 
            
            let amount: number = Number(formData.get("Amount"));
            let price: number = Number(item.getAttribute("price"));
            

            console.log(item);
            console.log("Item: ", item.value);
            console.log("Price: ", price);
            console.log("Amount: ", amount);
            let prices: number;


            let span1: HTMLSpanElement = document.createElement("span");
            let span2: HTMLSpanElement = document.createElement("span");
            let span3: HTMLSpanElement = document.createElement("span");
            let span4: HTMLSpanElement = document.createElement("span");
           
           
            let orderorder: HTMLDivElement = document.createElement("div");

            let deletebutton: HTMLButtonElement = document.createElement("button");
            deletebutton.classList.add("far", "fa-trash-alt");

            switch  (entry[0]) {
                case "groceries":
                
                    let store: string = String(formData.get("store"));
                    prices = amount * price;
                    deletebutton.addEventListener("click", function (): void {
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
                    span2.innerHTML =  " " + amount + " mal am Tag" + " | ";
                    span3.innerHTML = " Preis: " + prices + "€";

                    console.log(item);

                    deletebutton.addEventListener("click", function (): void {
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

                    deletebutton.addEventListener("click", function (): void {
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

                    deletebutton.addEventListener("click", function (): void {
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

        
        

        function deleteanorder(_prices: number, _event: any, _gesamt: any): void {
            totalcost -= _prices;
            _gesamt.innerHTML = "" + totalcost.toFixed(2);
            console.log(totalcost);
            let deletespan: Node = <Node>_event.target;
            let getparentdiv: Node = <Node>deletespan.parentNode;
            let getgrandparentdiv: Node = <Node>getparentdiv.parentNode;
            getgrandparentdiv.removeChild(getparentdiv);
        }
      

    }
    async function showDatabaseContent(_event: Event): Promise<void> {

        let response: Response = await fetch(URL + "?" + "getOrders=yes");
        let databaseContent: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#databaseContent");
        databaseContent.innerHTML = "";
        let responseText: string = await response.text();
        let replace: string = responseText.replace(/\\|{|}|"|/g, "");
        console.log(replace);
        for (let entry of replace) {
            switch (entry) {
                case ("_"):
                    databaseContent.innerHTML += "<br>"  + entry;
                    break;
                case ("["):
                    break;
                case ("]"):
                    break;
                case (","):
                    databaseContent.innerHTML += "<br>";
                    break;
                case (":"):
                    databaseContent.innerHTML += entry + " ";
                    break;
                default:
                    databaseContent.innerHTML += "" + entry;
                    break;
            }
        }
        console.log(responseText);

    }
    
    function hideDatabaseContent(): void { //Das Formelement wird durch die ID aufgerufen und dann soll der Inhalt leer sein. 
        let databaseContent: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#databaseContent");
        databaseContent.innerHTML = "";
        
    }



}