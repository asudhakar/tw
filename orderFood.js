
const Dishes = require('./controllers/dish');
const Cart = require('./controllers/cart');
const User = require('./controllers/user');


let dishes = new Dishes();

dishes.add('pastha', 100);
dishes.add('pastha1', 50);
dishes.add('pastha2', 20);

// console.log(dish);

let userCart = new Cart();
userCart.add(dishes.dish[dishes.getDishId('pastha')]);
userCart.add(dishes.dish[dishes.getDishId('pastha1')]);
userCart.add(dishes.dish[dishes.getDishId('pastha')]);

let userCart1 = new Cart();
userCart1.add(dishes.dish[dishes.getDishId('pastha2')]);
userCart1.add(dishes.dish[dishes.getDishId('pastha1')]);
userCart1.add(dishes.dish[dishes.getDishId('pastha')]);

let sudhakar = new User();
sudhakar.addAddress('first floor, chennai');
sudhakar.Checkout(userCart1);

console.log(userCart);






