const Shops = require('./controllers/shop');
const DishType = require('./controllers/DishType');


let shops = new Shops();



let dishType = new DishType();
dishType.add('pastha');
dishType.add('chettinad');
shops.newShop('shop1', dishType);



let dishType2 = new DishType();
dishType2.add('pastha');
dishType2.add('chettinad');
shops.newShop('shop2', dishType2);


shopID = shops.search('shop1');
if(shopID){
    shops.addRatingTo(shopID, 5);
    shops.addRatingTo(shopID, 4);
    shops.addRatingTo(shopID, 5);

    console.log(shops.shop[shopID]);
}else{
    console.log('not found');
}
