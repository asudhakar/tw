const route = require('express').Router();
const Shop = require('./../controllers/shop');
const Cuisine = require('./../controllers/cuisine');
const Dish = require('./../controllers/dish');
const Rating = require('./../controllers/rating')

route.post('/', (req, res) => {
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
    res.send('added');
});

route.get('/', (req, res) => {
    res.send(shops);
});

route.get('/search', (req, res) => {
    res.send(shops.searchByName(req.params.name));
});

route.post('/review', (req, res) =>{
    let rating = req.body.rating;
    ratingObj = new Rating(rating);
    shop = shops.searchById(req.body.shopId);
    if(shop[0]){
        if(shop[0].addRating(ratingObj)){
            res.send('added');
        }else{
            res.send('please enter rating values properly');
        }
    }else{
        res.send('shop not found');
    }
});

route.get('/dishes', (req, res) => {
    res.send(shops.getAllDishes());
});


module.exports = route;
