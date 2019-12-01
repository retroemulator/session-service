const express = require('express');
const bodyParser = require('body-parser');

const apiV1Router = require('./api/v1');
const cors = require('./middleware/cors');

const PORT = process.env.PORT || 5004;

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.use('/api/v1', apiV1Router);
