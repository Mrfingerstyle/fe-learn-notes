const fs = require('fs')

const p = new Promise(function(resolve, reject) {
    fs.readFile('./26-Promise封装AJAX请求.html', (err, data) => {
        if (err) reject(err) 
        resolve(data)
    })
})

p.then(function (value) {
    console.log(value.toString());
}, function(reason) {
    console.error(reason);
})


