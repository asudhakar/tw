const uuidv1 = require('uuid/v1');
class Cart{
    constructor(){
        this.dish = [];
        this.value = 0;
    }

    add(selectedDish){
        this.dish.push(selectedDish);
    }


}

module.exports = Cart;
