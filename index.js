const Shop = require('./controllers/shop');
const DishType = require('./controllers/DishType');
// const Dish = require('./controllers/dish');

let pastha = new DishType('Pastha');
let chettinad = new DishType('Chettinad');

let shop = new Shop();
shop.add('EatlyExpress');
shop.addDishType(pastha);
shop.addDishType(chettinad);

shop.add('EatlyExpress1');
shop.addDishType(pastha);
// shop.addDishType(chettinad);

shop.search(shopName);

console.log(shop);

// function SearchController(input){

// }



// console.log(EatlyExpress);
