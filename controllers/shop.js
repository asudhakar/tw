class Shop{
    constructor(shopName){
        this.shopName = [];
        this.shopDishType = [];
        // this.stock = [];
    }

    add(shopName){
        this.shopName.push(shopName);
    }
    addDishType(dishType){
        console.log(this.shopName);
        // this.shopDishType[this.shopName].push(dishType);
        // dishType.shops.push(this.shopName);
    }


    // Stock(dish){
    //     this.stock.push(dish);
    //     dish.shops.push(this.shopName);
    // }

}

module.exports = Shop;
