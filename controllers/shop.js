const uuidv1 = require('uuid/v1');
class Shop{
    constructor(name){
        this.id = uuidv1();
        this.name = name;
        this.rating = [];
        this.userRatingCount = 0;
        this.avgRating = 0;
        this.cuisine = [];
    }

    addRating(rating){
        if(1 < rating["value"] && rating["value"] < 6){
            this.rating.push(rating);
            this.addUserRatingCount();
            this.calculateAvg();
            return true;
        }else{
            return false;
        }
    }

    addUserRatingCount(){
        ++this.userRatingCount;
    }

    calculateAvg(){
        let totalAvg = 0;
        for (let index = 0; index < this.rating.length; index++) {
            totalAvg += this.rating[index].value;

        }
        this.avgRating = Math.round(totalAvg/this.userRatingCount);
    }

    addCuisine(dish){
        this.cuisine.push(dish);
    }
}

module.exports = Shop;
