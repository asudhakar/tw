const uuidv1 = require('uuid/v1');
class Address{
    constructor(address){
        let addressID = uuidv1();
        this.id = addressID;
        this.address = address;
    }

}

module.exports = Address;
