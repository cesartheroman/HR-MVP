const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
let port = process.env.PORT;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

if (port == null || port == '') {
  port = 8000;
}
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
