const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

// app.use('/', router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
