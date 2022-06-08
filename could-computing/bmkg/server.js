const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const resource = require("./weather/resource");
const async = require("async");
const weather=require("./cache/weather.json")



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use('/',korek)

app.get('/', function (req, res) {
    res.send(weather);
});



app.listen(4000, function () {
    console.log('Example app listening on port 4000!');

    // Update
    resource.get()
        .then(() => {
            const oneDayInMs = 86400000;
            setInterval(() => weather.get(), oneDayInMs);
        });
});

