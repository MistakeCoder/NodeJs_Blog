
const express = require('express');
var handlebars = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;


// // Import service app
// const serviceApp = require('./service');

// // Sử dụng các route từ serviceApp
// app.use(serviceApp);

app.use(express.static('src/public'));

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src\\resources\\views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    console.log(req.query.q);
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


