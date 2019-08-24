class Users{
    constructor(){
        this.users = [];
    }

    add(user){
        this.users.push(user);
    }

    login(username, password){
        return this.users.filter( (user) => user.username == username && user.password == password );
    }
    sayHello(){
        return "hello";
    }
}
module.exports = Users;

