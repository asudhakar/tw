const route = require('express').Router();
const Cart = require('./../controllers/cart');
const Users = require('./../controllers/users');
const User = require('./../controllers/user');

// const dishes = [
//     {
//         "id": "7a4523d1-c622-11e9-b031-7551a4ab25f1",
//         "name": "Omlette",
//         "rate": 20
//     },
//     {
//         "id": "7a44fcc0-c622-11e9-b031-7551a4ab25f1",
//         "name": "Fish Fry",
//         "rate": 100
//     },
//     {
//         "id": "7a4523d0-c622-11e9-b031-7551a4ab25f1",
//         "name": "Prawn Fry",
//         "rate": 300
//     }
// ];

route.post('/register', (req, res) => {
    let user = new User();
    user.add(req.body.username, req.body.password);
    Users.add(user);
    res.send('user registered');
});


route.post('/login', (req, res) => {

});

route.post('/cart', (req, res) => {
    let cart = new Cart();
    let dish = getDishByID(req.body.dishId);
    cart.add(dish);
    res.send(cart);
});

route.get('/dish', (req, res) => {
    res.send(dishes);
});

function getDishByID(id){
    return dishes.filter( (dish) => dish.id == id);
}


module.exports = route;
