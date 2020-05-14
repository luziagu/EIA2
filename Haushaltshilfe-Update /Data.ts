namespace haushaltshilfe {

    export interface Item {
        name: string; 
        price: number;
    }

    export interface Data {
        [category: string]: Item[]; 
    }


    export let data: Data = {
        Input: [
            { name: "Einkaufen", price: 0}, 
            { name: "Householdtasks", price: 0}

        ],

        Groceries: [
            { name: "Butter", price: 2.3 },
            { name: "Milch", price: 2.1 },
            { name: "Mehl", price: 1 },
            { name: "Zucker", price: 2 },
            { name: "Eier", price: 3.5 },
            { name: "Salz", price: 0.5 },
            { name: "Brot", price: 5.0 }

        ],
        Store: [
            { name: "Edeka", price: 0},
            { name: "Rewe", price: 0},
            { name: "Lidl", price: 0},
            { name: "Aldi", price: 0}

        ],
        Householdtasks: [
            { name: "Staubsaugen", price: 10},
            { name: "Wäsche waschen", price: 10},
            { name: "Wischen", price: 10}

        ]
    };


}