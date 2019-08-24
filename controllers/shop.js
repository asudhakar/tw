const uuidv1 = require('uuid/v1');
class Shop{
    constructor(name){
        this.id = uuidv1();
        this.name = name;
        this.rating = [];
        this.userRatingCount = 0;
        this.cuisine = [];
    }

    addRating(rating){
        if(0 < rating["value"] && rating["value"] < 6){
            this.rating.push(rating);
            this.addUserRatingCount();
            return true;
        }else{
            return false;
        }
    }

    addUserRatingCount(){
        ++this.userRatingCount;
    }

    addCuisine(dish){
        this.cuisine.push(dish);
    }
}

module.exports = Shop;
