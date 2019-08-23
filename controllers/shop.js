class Shop{
    constructor(shopName){
        this.shopName = shopName;
        this.stock = [];
    }


    Stock(dish){
        this.stock.push(dish);
        dish.shops.push(this.shopName);
    }

}

module.exports = Shop;
