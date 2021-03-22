const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 데이터베이스 연결
const db = fs.readFileSync('./database.json');
const dbconf = JSON.parse(db);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: dbconf.host,
  user: dbconf.user,
  password: dbconf.password,
  port: dbconf.port,
  database: dbconf.database
});
connection.connect();

app.get('/api/customers', (req, res) => {
  connection.query("SELECT * FROM CUSTOMER", (err, rows, fields) => {
    res.send(rows);
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`))