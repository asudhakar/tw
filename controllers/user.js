const uuidv1 = require('uuid/v1');
class User{
    constructor(){
        this.address;
        this.cart;
        this.order;
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
