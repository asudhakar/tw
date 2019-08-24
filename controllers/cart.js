const uuidv1 = require('uuid/v1');
class Cart{
    constructor(){
        this.dish = [];
        this.value = 0;
    }

    add(selectedDish){
        this.dish.push(selectedDish);
        this.updateCartValue();
    }

    updateCartValue(){
        let total = 0;
        for (let index = 0; index < this.dish.length; index++) {
            total += this.dish[index].rate;
        }
        this.value = total;
    }

}

module.exports = Cart;
