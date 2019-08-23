class Shop{
    constructor(name, id){
        this.id = id;
        this.name = name;
        this.cuisine = [];
    }

    addCuisine(dish){
        this.cuisine.push(dish);
    }
}

module.exports = Shop;
