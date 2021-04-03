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

// multer library를 통해서 이진수 데이터(이미지파일)을 처리한다.
const multer = require('multer');
const upload = multer({ dest: './upload' })

app.get('/api/customers', (req, res) => {
  connection.query("SELECT * FROM CUSTOMER WHERE isDeleted = 0", (err, rows, fields) => {
    res.send(rows);
  })
});

app.use('/image', express.static('./upload')); // 사용자는 image로 접근하지만 실제로는 서버의 upload폴더에 접근.

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, NOW(), 0)'
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job]
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
})

app.delete('/api/customers/:id', (req, res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))