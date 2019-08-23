const route = require('express').Router();
const Shops = require('./../controllers/Shops');
const Shop = require('./../controllers/Shop');
const Cuisine = require('./../controllers/Cuisine');
const Dish = require('./../controllers/Dish');
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



// route.get('/:id', (req, res) => {
//     res.send(shops.searchById(req.params.id));
// });


route.get('/:name', (req, res) => {
    res.send(shops.searchByName(req.params.name));
});




module.exports = route;
