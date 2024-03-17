const express = require('express');
const app = express();
const port = 3000;

// Import service app
const serviceApp = require('./service');

// Sử dụng các route từ serviceApp
app.use(serviceApp);

app.get('/', (req, res) => {
    res.send('Hello World from index.js!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
