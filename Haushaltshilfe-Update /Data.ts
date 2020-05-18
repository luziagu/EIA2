namespace haushaltshilfe {

    export interface Item {
        name: string; 
        items: string []; 
    }

    export interface Data {
        [category: string]: Item[]; 
    }


    export let data: Data = {

        fieldsets: [
            {name: "tasks", items: ["Einkaufen"]},
            {name: "tasks", items: ["Householdtasks"]}

        ],
       
        fieldeinkauf: [
            { name: "groceries", items: ["Butter", "2.3"]},
            { name: "groceries", items: ["Milch", "1.5"]},
            { name: "groceries", items: ["Mehl", "1.5"]},
            { name: "groceries", items: ["Zucker", "2.0"] },
            { name: "groceries", items: ["Wasser", "3.0"] },
            { name: "groceries", items: ["Salz", "1.0"]  },
            { name: "groceries", items: ["Brot", "2.0"]  },
            { name: "Amount", items: ["amountarticle"] },
            { name: "store", items: ["Aldi" ] },
            { name: "store", items: ["Lidl"]  },
            { name: "store", items: ["Rewe"]  },
            { name: "store", items: ["Edeka"]  }
           

        ],
      
        fieldhaus: [
            { name: "household", items: ["Gassi gehen", "10"]},
            { name: "household", items: ["Wäsche waschen", "10"]},
            { name: "household", items: ["Wische", "10"]},
            { name: "Amount", items: ["amountarticle"] }
    
        ]
    };


}