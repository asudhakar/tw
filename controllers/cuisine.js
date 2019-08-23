class Cuisine{
    constructor(name){
        this.name = name;
        this.dishes = [];
    }

    addDish(dish){
        this.dishes.push(dish);
    }

    getDish(){
        return this.dishes;
    }
}

module.exports = Cuisine;
