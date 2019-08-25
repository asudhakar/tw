const route = require('express').Router();
const Cart = require('./../controllers/cart');
const Users = require('./../controllers/users');
const User = require('./../controllers/user');
const users = new Users();

route.post('/register', (req, res) => {
    let user = new User();
    user.add(req.body.username, req.body.password);
    users.add(user);
    res.send('user registered');
});


route.post('/login', (req, res) => {

});



module.exports = route;
