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
    res.send(shops.searchByName(req.params.name));
});

route.post('/review', (req, res) =>{
    let rating = new Rating(req.body.rating);
    if(1 < rating && rating < 5){
        shop = shops.searchById(req.body.shopId);
        console.log(shop);
        shop.rating.push(rating);
        shops.update(req.body.shopId, shop);
    }
    res.send('added');
});


module.exports = route;
