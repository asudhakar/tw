const route = require('express').Router();
const Cart = require('./../controllers/cart');

const dishes = [
    {
        "id": "7a4523d1-c622-11e9-b031-7551a4ab25f1",
        "name": "Omlette",
        "rate": 20
    },
    {
        "id": "7a44fcc0-c622-11e9-b031-7551a4ab25f1",
        "name": "Fish Fry",
        "rate": 100
    },
    {
        "id": "7a4523d0-c622-11e9-b031-7551a4ab25f1",
        "name": "Prawn Fry",
        "rate": 300
    }
];


route.post('/cart', (req, res) => {
    let cart = new Cart();
    let dishId = req.body.dishId;
    dish = {
        "id": "7a4523d0-c622-11e9-b031-7551a4ab25f1",
        "name": "Prawn Fry",
        "rate": 300
    };
    cart.add(dish);
});


module.exports = route;
