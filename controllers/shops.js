class Shops{

    constructor(){
        this.shops = [];
    }

    add(shop){
        this.shops.push(shop);
    }

    searchById(id){
        return this.shops.filter( (shop) => shop.id == id);
    }

    update(id, shop){
        this.deleteById(id);
        this.add(shop);
    }

    getAllDishes(){
        let dishes = [];
        for (let shopIndex = 0; shopIndex < this.shops.length; shopIndex++) {
            let cuisine = this.shops[shopIndex].cuisine;
            for (let cuisineIndex = 0; cuisineIndex < cuisine.length; cuisineIndex++) {
                let selectedShopDishes = cuisine[cuisineIndex].dishes;
                for (let dishIndex = 0; dishIndex < selectedShopDishes.length; dishIndex++) {
                    dishes.push(selectedShopDishes[dishIndex]);
                }
            }
        }
        return dishes;
    }

    searchByName(name){
        let shopps = this.shops.filter( (shop) => {
            let str = shop.name.toLowerCase();
            if(str.indexOf(name.toLowerCase()) != -1){
                return shop.name;
            }
        });
        return shopps;
    }

    deleteById(id){
        this.shops = this.shops.filter( (shop) => shop.id != id);
    }

    // search(key = ''){
    //     const searchedResult = this.shops.filter((shop)=>{
    //         if(shopKeyword && shop.getName().lowercase().indexOf(shopKeyword) === -1){
    //             return;
    //         }

    //         const searchedCuisine = shop.getCuisine().filter((cuisine) => {
    //             const searchedDishes = cuisine.getDishes().filter((dish) => {
    //                 if(dishKeyword && dish.getName().lowercase().indexOf(dishKeyword) === -1){
    //                     return;
    //                 }
    //             })
    //         })
    //     });
    // }
}

module.exports = Shops;

