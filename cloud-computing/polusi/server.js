const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const resource = require("./air/index");
const csvData = require ('./air/index')
const model ='https://storage.googleapis.com/modelpolusi/model.tflite'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', function (req, res) {
    res.send(csvData);
});

app.get('/model',function(req,res){
    res.send(model);
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');

    // // Update
    // resource.get()
    //     .then(() => {
    //         const oneDayInMs = 86400000;
    //         setInterval(() => air.get(), oneDayInMs);
    //     });
});
