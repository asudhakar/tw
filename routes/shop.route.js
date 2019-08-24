const route = require('express').Router();
const Shops = require('./../controllers/shops');
const Shop = require('./../controllers/shop');
const Cuisine = require('./../controllers/cuisine');
const Dish = require('./../controllers/dish');
const Rating = require('./../controllers/rating')
const shops = new Shops();

route.get('/', (req, res) => {
    const fishFry = new Dish('Fish Fry', 100);
    const prawnFry = new Dish('Prawn Fry', 300);
    const omlette = new Dish('Omlette', 20);
    const seaFoods = new Cuisine('Sea Foods');
    const normalFoods = new Cuisine('Normal Foods');
    const foodAtFinger = new Shop('food at finger');

    seaFoods.addDish(fishFry);
    seaFoods.addDish(prawnFry);
    normalFoods.addDish(omlette);
    foodAtFinger.addCuisine(normalFoods);
    foodAtFinger.addCuisine(seaFoods);

    shops.add(foodAtFinger);
    res.send(shops);
});

route.get('/:name', (req, res) => {
    res.send(shops.searchById(req.params.name));
});

route.post('/review', (req, res) =>{
    let rating = req.body.rating;
    ratingObj = new Rating(rating);
    shop = shops.searchById(req.body.shopId);
    if(shop){
        shop.addRating(ratingObj);
        res.send('added');
    }else{
        res.send('shop not found')
    }
});


module.exports = route;
