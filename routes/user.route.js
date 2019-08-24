const route = require('express').Router();
const Cart = require('./../controllers/cart');
const Users = require('./../controllers/users');
const User = require('./../controllers/user');

const users = new Users;

route.post('/register', (req, res) => {
    let user = new User();
    user.add(req.body.username, req.body.password);
    users.add(user);
    res.send('user registered');
});

route.get('/', (req, res) => {
    res.send(users);
});


route.post('/login', (req, res) => {
    let user = users.login(req.body.username, req.body.password);
    res.send((user[0])?user.id:'not_authendicated');
});






module.exports = route;
