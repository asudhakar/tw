const route = require('express').Router();
const Cart = require('./../controllers/cart');

route.post('/cart', (req, res) => {
    let cart = new Cart();
    let dishId = req.body.dishId;
    dish = shops.getDishById(dishId);
    cart.add(dish);
    res.send(dishId);
});


module.exports = route;
