const uuidv1 = require('uuid/v1');
class Address{
    constructor(){
        this.address = [];
    }

    add(address){
        let addressID = uuidv1();
        this.address[addressID] = [];
        this.address[addressID]['address'] = address;
    }



}

module.exports = Address;
