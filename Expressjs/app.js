const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Use built-in body parser

app.use('/add-user', (req, res, next) => {
    res.send(`<form method="POST" action='/user'>
        <input type="text" name="user" placeholder="Enter text"/>
        <button type="submit">Submit</button>
    </form>`);
});

app.use('/user', (req, res) => {
    console.log(req.body.user); 
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.status(204).end();
    }
    console.log('In path /');
    res.send('<h1>Home Page</h1>');
});

app.listen(3000, () => console.log('Server is running at 3000'));
