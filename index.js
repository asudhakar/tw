const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const shopRoute = require('./routes/shop.route');
const userRoute = require('./routes/user.route');
const Shops = require('./controllers/shops');
const User = require('./controllers/user');

const shops = new Shops();
const user = new User();




app.use(bodyParser());

app.use('/shop', shopRoute);
app.use('/user', userRoute);


app.listen(3001);




// const Shops = require('./controllers/shop');
// const DishType = require('./controllers/DishType');


// let shops = new Shops();



// let dishType = new DishType();
// dishType.add('pastha');
// dishType.add('chettinad');
// shops.newShop('shop1', dishType);



// let dishType2 = new DishType();
// dishType2.add('pastha');
// dishType2.add('chettinad');
// shops.newShop('shop2', dishType2);

// console.log(shops);

// shopID = shops.search('shop1');
// if(shopID){
//     shops.addRatingTo(shopID, 5);
//     shops.addRatingTo(shopID, 4);
//     shops.addRatingTo(shopID, 5);

//     console.log(shops.shop[shopID]);
// }else{
//     console.log('not found');
// }


// app.listen(3000, () => {
//     console.log('running on ' + 3000)
// });

