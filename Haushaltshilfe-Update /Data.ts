namespace haushaltshilfe {

    interface Item {
        name: string; 
        price: number;
    }

    export interface Data {
        [category: string]: Item[]; 
    }


    export let data: Data = {

        Groceries: [
            { name: "Butter", price: 2.3 },
            { name: "Milch", price: 2.1 },
            { name: "Mehl", price: 1 },
            { name: "Zucker", price: 2 },
            { name: "Eier", price: 3.5 },
            { name: "Salz", price: 0.5 },
            { name: "Brot", price: 5.0 }

        ],
        Extras: [
            { name: "Zeitung", price: 2.3},
            { name: "Brötchen", price: 2.1},
            { name: "Gutschein", price: 10}

        ]
    };


}