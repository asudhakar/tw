const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const shopRoute = require('./routes/shop.route');
const userRoute = require('./routes/user.route');


app.use(bodyParser());

app.use('/shop', shopRoute);
app.use('/user', userRoute);


app.listen(3001);

