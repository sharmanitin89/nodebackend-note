const express = require('express');
const mongoclient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');


const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app, {});


MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);

app.listen(port, () => {
    console.log('Server is live' + port);
    });
})