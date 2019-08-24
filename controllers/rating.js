const uuidv1 = require('uuid/v1');
class Rating{
    constructor(rating, userId){
        this.id = uuidv1();
        this.value = rating;
        this.userId = userId;
    }
}

module.exports = Rating;
