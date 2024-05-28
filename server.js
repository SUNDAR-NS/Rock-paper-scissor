const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'glogin'
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('K:\\JAVASCRIPT\\Js'));

app.route('/sample.html')
    .get((req, res) => {
        res.sendFile(__dirname + '/sample.html');
    });

// app.route('/main.html')
//     .get((req, res) => {
//         res.sendFile(__dirname + '/main.html');
//     });

app.route('/login')
    .get((req, res) => {
        res.sendFile(__dirname + '/index.html');
    })
    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const query = 'SELECT * FROM login WHERE username = ? AND password = ?';
        db.query(query, [username, password], (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                res.redirect('/sample.html');
            } else {
                res.redirect('/fail.html');
            }
        });
    });

app.route('/signup')
    .get((req, res) => {
        res.sendFile(__dirname + '/signup.html');
    })
    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const insertQuery = 'INSERT INTO login (username, password) VALUES (?, ?)';
        db.query(insertQuery, [username, password], (err, result) => {
            if (err) throw err;

            res.redirect('/index.html');
        });
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});