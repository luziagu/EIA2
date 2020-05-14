namespace haushaltshilfe {
    window.addEventListener("load", handleLoad);
    let totalcost: number = 0;

    function handleLoad(_event: Event): void {

        generateContent(data);

        console.log("verknüpft"); 

        let einkauf: HTMLInputElement = <HTMLInputElement>document.querySelector("#einkauf");
        let haushalt: HTMLInputElement = <HTMLInputElement>document.querySelector("#haushalt");

        let fieldeinkauf: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("#fieldeinkauf");
        let fieldhaus: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("#fieldhaus");

        let geteinkauf: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttoneinkauf");
        let gethaushalt: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonhausarbeiten");
       
        //let addButtonItem: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addItem");

        einkauf.addEventListener("click", showfieldset);
        haushalt.addEventListener("click", showfieldset);

        geteinkauf.addEventListener("click", handleChange);
        gethaushalt.addEventListener("click", handleChange);
       

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

    
    

    function handleChange(): void {

        let diveinkauf: HTMLDivElement = <HTMLDivElement>document.querySelector("#diveinkauf");
        let divhaushalt: HTMLDivElement = <HTMLDivElement>document.querySelector("#divhaushalt");
        let gesamt: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#bestellung");

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            console.log(entry); 

            

            let price: number = Number(item.getAttribute("price"));
            let amount: number = Number(formData.get("Amount"));

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

            if  (entry[0] == "Groceries") {
                
                let store: string = String(formData.get("Store"));
                prices = amount * price;
                deletebutton.addEventListener("click", function (): void {
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



             
            } else if (entry[1] == "Staubsaugen" || entry[1] == "Wäsche" || entry[1] == "Wischen") {

                prices = price * amount;
                span1.innerHTML = " " + entry[1] + ":";
                span2.innerHTML = " in " + amount + " Zimmer/n";
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
            }

            console.log(gesamt);
            console.log(totalcost);
            gesamt.innerHTML = totalcost.toFixed(2);


        }

        let fertigeBestellung: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#buttonFertig");
        fertigeBestellung.addEventListener("click", sendInOrder); 

        function sendInOrder(): void {
            
            alert("Deine Bestellung wurde versendet und befindet sich bald auf dem Weg zu dir nach Hause"); 
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


}