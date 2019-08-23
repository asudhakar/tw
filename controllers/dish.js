const uuidv1 = require('uuid/v1');
class Dish{
    constructor(){
        this.dish = [];
    }

    add(name, price){
        let dishID = uuidv1();
        this.dish[dishID] = [];
        this.dish[dishID]['name'] = name;
        this.dish[dishID]['price'] = price;
    }

    getDishId(dishName){
        for (var dishId in this.dish) {
            if (this.dish.hasOwnProperty(dishId)) {
                if(this.dish[dishId]['name'] == dishName)
                    return dishId;
            }
        }
    }
}

module.exports = Dish;
