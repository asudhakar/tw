const uuidv1 = require('uuid/v1');
class Rating{
    constructor(rating){
        this.id = uuidv1();
        this.value = rating;
    }
}

module.exports = Rating;
