const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  }))

app.use(bodyParser.json())

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'legend_cars',
  port: 8889
});

connection.connect();

app.get('/cars/list', (req, res) => {
  connection.query('SELECT * FROM cars', (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.post('/cars/create', (req, res) => {
  const car = req.body
  connection.query(`INSERT INTO cars (brand, color, price, description, model) VALUES ('${car.brand}', '${car.color}', '${car.price}', '${car.description}', '${car.model}')`, (err, rows, fields) => {
    if (err) throw err
    res.json(rows)
  })
})

app.delete('/cars/remove/:id', (req, res) => {
  const id = req.params.id
  connection.query(`DELETE FROM cars WHERE id = ${id}`, (err, rows, fields) => {
    if (err) throw err
    res.json(rows)
  })
})

app.post('/cars/update/:id', (req, res) => {
  const car = req.body
  const param = req.params.id
  connection
    .query(`UPDATE cars 
      SET brand = '${car.brand}', color = '${car.color}', price = '${car.price}', description = '${car.description}', model = '${car.model}'
      WHERE id = '${param}'`,
      (err, rows, fields) => {
        if (err) throw err
        res.json(rows)
      })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
