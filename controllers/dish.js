const uuidv1 = require('uuid/v1');
class Dish{
    constructor(name, rate){
        this.id = uuidv1();
        this.name = name;
        this.rate = rate;
    }

    getName(){
        return this.name;
    }
}

module.exports = Dish;
