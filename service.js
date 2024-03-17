const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Kết nối đến cơ sở dữ liệu MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydatabase'
});

// Kiểm tra kết nối
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Lắng nghe các request POST
app.use(express.json());

// Tạo một route GET để lấy danh sách users
app.get('/users', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

// Tạo một route POST để thêm mới user
app.post('/users', (req, res) => {
    let newUser = req.body;
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, newUser, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('User added successfully');
    });
});

module.exports = app; // Export app để có thể sử dụng trong index.js
