const uuidv1 = require('uuid/v1');
class Shops{
    constructor(){
        this.shop = [];
    }

    newShop(shopName, dishType){
        let shopID = uuidv1();
        this.shop[shopID] = [];
        this.shop[shopID]['name'] = shopName;
        this.shop[shopID]['dishType'] = dishType.dishType;
        this.shop[shopID]['rating'] = [];
    }

    search(shopName){
        for (var shopID in this.shop) {
            if (this.shop.hasOwnProperty(shopID)) {
                if(this.shop[shopID]['name'] == shopName)
                    return shopID;
            }
        }
    }

    addRatingTo(shopID, rating){
        this.shop[shopID]['rating'].push(rating);
    }

}
module.exports = Shops;
