const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const userRoutes=require('./routes/User')
const main=require('./routes/Main')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes)

app.use(main)
app.listen(3000, () => console.log('Server is running at 3000'));
