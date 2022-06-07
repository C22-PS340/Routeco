const parse = require('csv-parser');
const fs = require('fs');

const csvData = [];

fs.createReadStream(__dirname + '/polusi_2010-2021.csv')
.pipe(parse())
.on('data', (data) => csvData.push(data))
.on('end',() => {
    console.log(csvData);
})

    module.exports=csvData