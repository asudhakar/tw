const uuidv1 = require('uuid/v1');
class Shop{
    constructor(name, id){
        this.id = uuidv1();
        this.name = name;
        this.rating = [];
        this.avgRating = 0;
        this.cuisine = [];
    }

    addRating(rating){
        this.rating.push(rating);
    }

    addCuisine(dish){
        this.cuisine.push(dish);
    }
}

module.exports = Shop;
