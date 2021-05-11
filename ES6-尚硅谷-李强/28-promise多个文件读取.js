const fs = require('fs')

// fs.readFile('./01-课程简介.html', (err, data_1) => {
//     fs.readFile('./02-ECMAScript概念解释.html', (err, data_2) => {
//         fs.readFile('./03-let.html', (err, data_3) => {
//             let res = data_1 + "\n----\n" + data_2 + "\n----\n" + data_3
//             console.log(res);
//         })
//     })
// })

// promise实现
const p = new Promise((resolve, reject)=>{
    fs.readFile('./01-课程简介.html', (err, data) => {
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve, reject)=>{
        fs.readFile('./02-ECMAScript概念解释.html', (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject)=>{
        fs.readFile('./03-let.html', (err, data)=> {
            value.push(data)
            resolve(value)
        })
    })
}).then(value=> {
    console.log(value.join('\n'));
})


