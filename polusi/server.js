const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const resource = require("./air/index.csv");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', function (req, res) {
    res.send(resource.file);
});

app.get('/',function(req,res){

})

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');

    // Update
    resource.get()
        .then(() => {
            const oneDayInMs = 86400000;
            setInterval(() => air.get(), oneDayInMs);
        });
});