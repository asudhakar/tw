const uuidv1 = require('uuid/v1');
class User{
    constructor(){
        this.id
        this.username;
        this.password;
        this.address = [];
        this.cart = [];
        this.order = [];
    }

    add(username, password){
        this.id = uuidv1();
        this.username = username;
        this.password = password;
    }

    Checkout(cart){
        if(this.address){
            if(cart.value >= 200){
                this.cart = cart;
            }else{
                this.cart = cart;
                this.cart.value += 50;
            }
            return this.cart;
        }else{
            return "please enter the address to do checkout";
        }
    }

    addAddress(address){
        this.address = address;
    }
}

module.exports = User;
