const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const campaigns = require('./routes/api/campaigns');

app.use('/api/campaigns', campaigns);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));