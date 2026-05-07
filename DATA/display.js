
const fs = require('node:fs');
fs.readFile('thirukkural.json', 'utf8', (err, data) => {
    if(err){
        console.log('Unable to open file:',err)
        return 
    }
    console.log(data.length);
    let th = JSON.parse(data);
    console.log(Object.keys(th));
    console.log(Object.keys(th['kural']));
    console.log(Object.keys(th['kural'][0]));

});
// console.log('hello world');
