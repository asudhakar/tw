const uuidv1 = require('uuid/v1');
class Rating{
    constructor(id, rating){
        this.id = uuidv1();
        this.rate = rating;
    }
}

module.exports = Rating;
