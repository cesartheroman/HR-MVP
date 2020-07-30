const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => res.send('Romandex'));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
