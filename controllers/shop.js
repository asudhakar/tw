const uuidv1 = require('uuid/v1');
class Shop{
    constructor(name){
        this.id = uuidv1();
        this.name = name;
        this.rating = [];
        this.avgRating = 0;
        this.userCount = 0;
        this.cuisine = [];
    }

    addRating(rating){
        if(1 < rating.value && rating.value < 5){
            this.rating.push(rating);
            this.calculateAvg();
        }
    }

    calculateAvg(){
        ++this.userCount;
    }

    addCuisine(dish){
        this.cuisine.push(dish);
    }
}

module.exports = Shop;
