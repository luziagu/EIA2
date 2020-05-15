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
                case "Groceries":
                    group = createSelect(items);
                    break;
                case "Store":
                    group = createSelect(items);
                    break;
                case "Householdtasks":
                    group = createMultiple(items);
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

    function createSelect(_items: Item[]): HTMLElement | null {
        return null;
    }

    function createMultiple(_items: Item[]): HTMLElement | null {
        return null;
    }

}