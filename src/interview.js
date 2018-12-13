const inventory = {
    "items": [
        { "almonds": 10 }, //value is quantity
        { "apples": 20 },
        { "cheese": 3 },
        { "hamburger": 10 },
        { "kale": 2 },
        { "soda": 30 }
    ]
};

const prices = {
    "discount": {
        "apples": .1,
        "kale": .15,
        "soda": .05
    },
    "perUnitPrice": {
        "almonds": 2.99,
        "apples": 1.98,
        "cheese": 4.49,
        "hamburger": 3.98,
        "kale": .99,
        "soda": 1.25
    }
};
const getTotalValueOfInventory = function (inventory, prices) {
    //get the items & their associated quantities
    let items = inventory.items;
    
    let sum = 0;
    
    for (var i = 0; i < items.length; i++) {
        const item = items[i]; //item = {"almods": 10};
        const itemName = Object.keys(item)[0];
        let unitPrice = prices.perUnitPrice[itemName];
   
        if (prices.discount[itemName] !== undefined) {
            let discount = prices.discount[itemName];
            unitPrice = (1 - discount) * unitPrice;
        }
        sum += unitPrice * item[itemName];
    }
    
    return sum;

}


console.log(getTotalValueOfInventory(inventory, prices));