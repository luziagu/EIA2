namespace haushaltshilfe {

    export function generateContent(_data: Data): void {
        console.log(_data);

        /* for of oder for in ? Assoziatives Arry: immer schlüssel und Wert bei for in bekommt man in der VAriablen bekommt man die Schlüssel 
        for of: hier bekommt man den Wert in For-In und For-Of, kann in diesen Variablen kein Typ angegeben werden*/
        for (let category in _data) {

            //console.log(category); //Prüfung: Läuft die Schleife? 
            let items: Item[] = _data[category];
            let group: HTMLElement | null = null;
            switch (category) {
                case "einkauf":
                    group = createRadio(items, category);
                    break;
                case "Groceries":
                    group = createList(items, category);
                    break;
                case "Store":
                    group = createList(items, category);
                    break;
                case "fieldhaus":
                    group = createMultiple(items, category);
                    break;


                default:
                    break;
            }


            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);

            //Block wird definiert durch die gescheifte KLammer - Groups kann nicht imn selben Gültigkeitsbereich sein 


        }

    }

    

    function createRadio(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLElement = document.createElement("div"); 
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input"); 
            radio.type = "radio"; 
            radio.setAttribute("price", item.price.toFixed(2)); //tofixes = string  = zwie Nachkommerstellen
            radio.value = item.name; 
            radio.name = _category; 
            radio.id = item.name; 

            let label: HTMLLabelElement = document.createElement("label"); 
            label.textContent = item.name; 
            label.htmlFor = item.name; 

            group.appendChild(radio); 
            group.appendChild(label); 
        }
        return group;

    }


    function createList(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        let input: HTMLInputElement = document.createElement("input");
        let datalist: HTMLDataListElement = document.createElement("datalist");
        datalist.id = _category;
        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("name", item.name);
            option.value = item.name;

            group.appendChild(input);
            group.appendChild(datalist);
            datalist.appendChild(option);

        }
        return group;

    }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        
        //anderer Namespace: let Group ist anders definiert und getrennt von der ersten Variable Group 
        let group: HTMLElement = document.createElement("div"); 
       
        //for in oder for of? for of - damit man direkt auf INtems zugreifen kann. 
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input"); 
            checkbox.type = "checkbox"; 
            checkbox.setAttribute("price", item.price.toFixed(2)); //tofixes = string  = zwie Nachkommerstellen
            checkbox.value = item.name; 
            checkbox.name = _category; 
            checkbox.id = item.name; 

            let label: HTMLLabelElement = document.createElement("label"); 
            label.textContent = item.name; 
            label.htmlFor = item.name; 

            group.appendChild(checkbox); 
            group.appendChild(label); 
        }
        return group;


    }

}