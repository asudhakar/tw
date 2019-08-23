const Shop = require('./controllers/shop');
const Dish = require('./controllers/dish');

let pastha = new Dish('Pastha', 'https://abc.com/1.png');
let chickenCurry = new Dish('Chicken Curry', 'https://abc.com/2.png');

let EatlyExpress = new Shop('EatlyExpress');
EatlyExpress.Stock(chickenCurry);
EatlyExpress.Stock(pastha);

let EatlyExpress1 = new Shop('EatlyExpress1');
EatlyExpress1.Stock(pastha);

console.log(dish.search());

// function SearchController(input){

// }



// console.log(EatlyExpress);
