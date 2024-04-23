
const express = require('express');
var handlebars = require('express-handlebars');
const route = require('./src/routes');

const path = require('path');
const app = express();
const port = 4000;
const db = require('./src/config/db');
db.connect();

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true })); //log data object
app.use(express.json());

route(app);

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


